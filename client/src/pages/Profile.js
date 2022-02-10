import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";

import { LoadUser, LogOut } from '../store/actions/UserAction';
import { UpdateUser, DeleteUser, PostPost, DeletePost } from '../services';
import { useHistory } from 'react-router-dom';
import User from '../components/User';
import Post from '../components/Post';
import NewPost from '../components/NewPost';
import { UpdateCurrent } from '../store/actions/PostAction';


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
        render === 1 ?  setRender(2) : setRender(1)
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
        <div>
            <h3> Welcome <span>{props.userState.user.first_name}</span> <span>{props.userState.user.username}</span></h3>
            <div>
                <button onClick={handleLogOut}>Log out</button>
                <button onClick={()=> setRender(1)}>Edit Profile</button>
                <button onClick={() => setRender(3)}>Post</button>
            </div>

            <div>
                {render === 0 ?
                    <div>
                        {props.userState.user.about ? <p>About: {props.userState.user.about}</p> : null}
                        {props.userState.user.posts ? props.userState.user.posts.map((e, e2) => (
                            <div key={e2} className='posts' >
                                <Post e={e} userState={props.userState} postState={props.postState} deletePost={deletePost}/>
                            </div>
                        ))
                        :
                        null}
                    </div>
                    :
                    null}
            </div>

            <div>
                {render === 1 ? <User userState={props.userState} handleSubmit={handleSubmit} handleCancel={handleCancel} renderDelete={renderDelete}/>
                : 
                null}
            </div>

            <div>
                {render === 2 ? 
                <div>
                    Are you sure you want to delete your account. This cannot be undone! <br/>
                    <button onClick={handleDelete}>Yes I want to delete it</button> <button onClick={() => setRender(1)}>Nope! take me back!</button>
                </div>
                : null}
            </div>
            
            <div>
                {render === 3 ?
                <div>
                    <NewPost handleCancel={handleCancel} handlePost={handlePost}/>
                </div>
                : null}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)