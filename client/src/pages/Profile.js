import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

import { LoadUser, LogOut } from '../store/actions/UserAction';
import { UpdateUser, DeleteUser, PostPost, DeletePost } from '../services';
import User from '../components/User';
import Post from '../components/Post';
import NewPost from '../components/NewPost';
import { UpdateCurrent } from '../store/actions/PostAction';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';


const mapStateToProps = (state) => {
    return {
        userState: state.userState,
        postState: state.postState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(LoadUser(id)),
        logOut: () => dispatch(LogOut()),
        updateCurrent: (n) => dispatch(UpdateCurrent(n))
    }
}


const Profile = (props) => {

    const [render, setRender] = useState(0)

    const history = useHistory()

    const handleLogOut = () => {
        props.logOut()
        history.push('/')
    }
    const handleSubmit = (e) => {
        console.log('clicked')
        UpdateUser({
            'first_name': e.target.first_name.value,
            'user_name': e.target.username.value,
            'email': e.target.email.value,
            'password': e.target.password.value,
            'about': e.target.about.value
        }, props.userState.user_id)
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setRender(0)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        DeleteUser(props.userState.user_id)
        props.logOut()
        history.push('/')
    }

    const renderDelete = (e) => {
        e.preventDefault()
        render === 1 ? setRender(2) : setRender(1)
    }

    const handlePost = (e) => {
        PostPost({
            'user_id': props.userState.user_id, 'content': e.target.content.value, 'image': e.target.image.value
        })
    }

    const deletePost = (id) => {
        DeletePost(id)
        window.location.reload()
    }

    useEffect(() => {
        props.fetchUser(props.userState.user_id)
        props.updateCurrent(1)
    }, [])

    return (
        <div className='profile-body'>
            <Card className='posts post-card' raised={true}>
                <h3> <span className='welcome-back'> Welcome Back  </span><br /> <span className='username'>{props.userState.user.username}</span><span className='name'>_{props.userState.user.first_name}</span></h3>
                <Box>
                    <Button onClick={handleLogOut} color="error" style={{ backgroundColor: '#273339', color: 'white' }}>Log out</Button>
                    <Button onClick={() => setRender(1)} style={{ backgroundColor: '#273339', color: 'white' }}>Edit Profile</Button>
                    <Button onClick={() => setRender(3)} style={{ backgroundColor: '#273339', color: 'white' }}>Post</Button>
                </Box>
            </Card> <br />
            <div>
                {render === 0 ?
                    <div>
                        <Card className='posts post-card' raised={true}>
                            {props.userState.user.about ? <p>About: {props.userState.user.about}</p> : null}
                        </Card>
                        {props.userState.user.posts ? props.userState.user.posts.map((e, e2) => (
                            <div key={e2} className='posts'>
                                <Post e={e} userState={props.userState} postState={props.postState} deletePost={deletePost} />
                            </div>
                        ))
                            :
                            null}
                    </div>
                    :
                    null}
            </div>

            <div>
                {render === 1 ? <User userState={props.userState} handleSubmit={handleSubmit} handleCancel={handleCancel} renderDelete={renderDelete} />
                    :
                    null}
            </div>

            <div className='post-form'>
                {render === 2 ?
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }} className='delete-space'>
                        Are you sure you want to delete your account. This cannot be undone! <br />
                        <Button className='delete-space' onClick={handleDelete} color="error" variant="outlined">Yes I want to delete it</Button> <Button className='delete-space' variant="outlined" onClick={() => setRender(1)}>Nope! take me back!</Button>
                    </Box>
                    : null}
            </div>

            <div>
                {render === 3 ?
                    <div>
                        <NewPost handleCancel={handleCancel} handlePost={handlePost} />
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)