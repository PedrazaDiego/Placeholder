import React, { useEffect, useState } from 'react'
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

    const [render, setRender] = useState(0)

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
            <h3> Welcome <span>{props.userState.user.first_name}</span> <span>{props.userState.user.username}</span></h3>
            <div>
                <button onClick={handleLogOut}>Log out</button>
                <button onClick={()=> setRender(1)}>Edit Profile</button>
            </div>

            <div>
                {render === 0 ?
                    <div>
                        {props.userState.user.about ? <p>About: {props.userState.user.about}</p> : null}
                        {props.userState.user.posts ? props.userState.user.posts.map((e, e2) => (
                            <div key={e2} className='posts' >
                                {e.content}
                                <img src={e.image} />
                            </div>
                        ))
                        :
                        null}
                    </div>
                    :
                    <form>
                        <label> First Name</label>
                        <input type='text' placeholder={`${props.userState.user.first_name}`} name='first_name'></input>
                        <label> Username</label>
                        <input type='text' placeholder={`${props.userState.user.username}`} name='username'></input>
                        <label> About </label>
                        <textarea type='text' placeholder={`${props.userState.user.about}`} name='about'/>
                        <button onClick={() => setRender(0)}>Confirm</button>
                    </form>}
            </div>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)