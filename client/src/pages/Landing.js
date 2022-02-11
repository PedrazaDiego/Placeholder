import React, { useEffect } from "react";
import {connect} from 'react-redux'

import { LoadPosts, ToggleState, UpdateCurrent } from "../store/actions/PostAction";
import { VerifyLike } from "../services";
import Post from '../components/Post'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(LoadPosts()),
        updateCurrent: (n) => dispatch(UpdateCurrent(n)),
        toggleState: (postId, userId, toState) => dispatch(ToggleState(postId, userId, toState))
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState,
        postState: state.postState
    } 
 }


const Landing = (props) => {

    const handleLike = (postId, userId) => {
        let toState
        if(!props.postState.toggledState){
            toState = true
        }
        if(props.postState.toggledState){
            toState = false
        }
        props.toggleState(postId, userId, toState)
    }

    useEffect(() => {
        props.fetchPosts()
        props.updateCurrent(0)
    }, [])

    return (
        <div>
            {props.postState.isLoading ? null : <div> {props.postState.posts.map( (e) => (
                <div key={e.id} className='posts'>
                    <Post e={e} userState={props.userState} postState={props.postState} handleLike={handleLike}/>
                    {/* <img src={e.image}/> */}
                </div>
            ))} </div>}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)