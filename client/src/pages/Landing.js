import React, { useEffect } from "react";
import {connect} from 'react-redux'

import { LoadPosts, UpdateCurrent } from "../store/actions/PostAction";
import Post from '../components/Post'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(LoadPosts()),
        updateCurrent: (n) => dispatch(UpdateCurrent(n))
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState,
        postState: state.postState
    } 
 }


const Landing = (props) => {

    useEffect(() => {
        props.fetchPosts()
        props.updateCurrent(0)
    }, [])

    return (
        <div>
            {props.postState.isLoading ? null : <div> {props.postState.posts.map( (e) => (
                <div key={e.id} className='posts'>
                    <Post e={e} userState={props.userState} postState={props.postState}/>
                    {/* <img src={e.image}/> */}
                </div>
            ))} </div>}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)