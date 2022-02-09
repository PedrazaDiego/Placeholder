import React from 'react'
import { connect } from "react-redux";


import SignIn from '../components/SignIn';
import { LoadToken } from '../store/actions/UserAction';


const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchToken: (user) => dispatch(LoadToken(user))
    }
}

const Profile = (props) => {

    // const history = useHistory()

    const handleLogIn = (e) => {
        e.preventDefault()
        // history.push('/')
        props.fetchToken({'email':e.target.username.value, 'password': e.target.password.value})

    }

    return (
        <div>
            <SignIn handleLogIn={handleLogIn}/>
        </div>
    )
}   

export default connect(mapStateToProps, mapDispatchToProps)(Profile)