import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';

import { LoadUser } from '../store/actions/UserAction';
import { ToggleState } from '../store/actions/PostAction';

import { Card, ImageList, ImageListItem, Button } from '@mui/material'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'


const mapStateToProps = (state) => {
    return {
        userState: state.userState,
        postState: state.postState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(LoadUser(id)),
        toggleState: (postId, userId) => dispatch(ToggleState(postId, userId))
    }
}


const Profile = (props) => {

    const [render, setRender] = useState(0)

    const history = useHistory()
    const id = useParams()

    const handleLike = (postId, userId) => {
        props.toggleState(postId, userId)
    }

    useEffect(() => {
        props.fetchUser(id.id)
    }, [])

    return (
        <div className='posts post-card'>
            <Card className='posts post-card' raised={true}>
                <h3> <span className='welcome-back'> </span><br /> <span className='username'>{props.userState.user.username}</span><span className='name'>_{props.userState.user.first_name}</span></h3>
                {props.userState.user.about ? <p>Bio: {props.userState.user.about}</p> : null}
            </Card>
            <br />
            <Card raised={true}>
                <ImageList>
                    {props.userState.isLoading ? id.id : props.userState.user.posts.map((e) => (
                        <ImageListItem key={e.id}>
                            <img
                                src={`${e.image}`}
                            />
                            <Button className='post-bottom'>
                                <FavoriteTwoToneIcon
                                    onClick={() => handleLike(e.id, props.userState.user_id)}>
                                </FavoriteTwoToneIcon>
                                {e.likes.length}  likes
                            </Button>
                            
                        </ImageListItem>
                    ))}
                </ImageList>
            </Card>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)