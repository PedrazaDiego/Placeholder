import React, { useEffect } from "react";
import {connect} from 'react-redux'

import { LoadPosts } from "../store/actions/PostAction";
import Post from '../components/Post'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(LoadPosts())
    }
}

const mapStateToProps = (state) => {
    return {
        postState: state.postState
    } 
 }


const Landing = (props) => {

    useEffect(() => {
        props.fetchPosts()
    }, [])

    return (
        <div>
            {props.postState.isLoading ? null : <div> {props.postState.posts.map( (e) => (
                <div key={e.id} className='posts'>
                    {/* <Post/> */}
                    <img src={e.image}/>
                </div>
            ))} </div>}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)