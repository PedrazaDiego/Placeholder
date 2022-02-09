import React, { useEffect } from 'react'
import { connect } from "react-redux";


import SignIn from '../components/SignIn';
import { LoadUser } from '../store/actions/UserAction';
import { GetUser } from '../services';


const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchUser: (id) => dispatch(LoadUser(id))
    }
}



const Profile = (props) => {

    // let user = {}

    // const getUserResponse = async () => {
    //     user = await GetUser(props.userState.user_id)
    //     console.log(user.user_name)
    // }

    useEffect(() => {
        props.fetchUser(props.userState.user_id)
    }, [])

    return (
        <div>
            <div>

            </div>
  
        </div>
    )
}   

export default connect(mapStateToProps, mapDispatchToProps)(Profile)