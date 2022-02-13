import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';

import { LoadUser } from '../store/actions/UserAction';

import { Card, ImageList, ImageListItem } from '@mui/material'


const mapStateToProps = (state) => {
    return {
        userState: state.userState,
        postState: state.postState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(LoadUser(id))
    }
}


const Profile = (props) => {

    const [render, setRender] = useState(0)

    const history = useHistory()
    const id = useParams()

    useEffect(() => {
        props.fetchUser(id.id)
    }, [])

    return (
        <div className='profile-body'>
            <Card className='posts post-card' raised={true}> 
            <h3> <span className='welcome-back'> </span><br /> <span className='username'>{props.userState.user.username}</span><span className='name'>_{props.userState.user.first_name}</span></h3>
            {props.userState.user.about ? <p>Bio: {props.userState.user.about}</p> : null}
            </Card>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)