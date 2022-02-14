import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

import { LoadUser, Loading } from '../store/actions/UserAction';
import { ToggleState } from '../store/actions/PostAction';

import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import Card from '@mui/material/Card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';


const mapStateToProps = (state) => {
    return {
        userState: state.userState,
        postState: state.postState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(Loading(id)),
        toggleState: (postId, userId) => dispatch(ToggleState(postId, userId)),
    }
}


const Profile = (props) => {

    const id = useParams()

    const [render, setRender] = useState(false)

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
                    {props.userState.isLoading ? <p>Loading ... </p> : props.userState.user.posts.map((e) => (
                        <ImageListItem key={e.id}>
                            <img
                                src={`${e.image}`} alt='post'
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