import React, { useEffect } from 'react'
import { connect } from "react-redux";
import axios from 'axios'

import SignIn from '../components/SignIn';
import { LoadUser, LogOut } from '../store/actions/UserAction';
import { GetUser } from '../services';
import { useHistory } from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(LoadUser(id)),
        logOut: () => dispatch(LogOut())
    }
}




const Profile = (props) => {

    const history = useHistory()

    const handleLogOut = () => {
        props.logOut()
        history.push('/')
    }

    useEffect(() => {
        props.fetchUser(props.userState.user_id)
    }, [])

    return (
        <div>
            <h3> Welcome {props.userState.user.username}</h3>
            <button onClick={handleLogOut}>Log out</button>
            {props.userState.user.about ? <p>About: {props.userState.user.about}</p> : null}
            {props.userState.user.posts ? props.userState.user.posts.map( (e, e2) => (
                <div key={e2} className='posts' >
                    {e.content}
                    <img src={e.image}/>
                </div>
            )) : null}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)