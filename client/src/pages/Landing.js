import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'

import { LoadPosts, ToggleState, UpdateCurrent } from "../store/actions/PostAction";
import { LoadUser } from '../store/actions/UserAction';
import Post from '../components/Post'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (n) => dispatch(LoadPosts(n)),
        updateCurrent: (n) => dispatch(UpdateCurrent(n)),
        toggleState: (postId, userId) => dispatch(ToggleState(postId, userId)),
        fetchUser: (id) => dispatch(LoadUser(id)),
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState,
        postState: state.postState
    }
}


const Landing = (props) => {

    const [page, setPage] = useState(2)
    const [hasMore, setHasMore] = useState(true)

    const handleLike = (postId, userId) => {
        props.toggleState(postId, userId)
    }

    const fetchData = () => {
        console.log(`loading new page ${page}`)
        props.fetchPosts(page)
        setPage(page + 1)
        if(props.postState.posts.length > props.postState.count - 9){
            setHasMore(false)
        }
    }

    useEffect(() => {
        props.fetchPosts(1)
        props.updateCurrent(0)
        props.fetchUser(props.userState.user_id)
    }, [])
    

    return (
        <div>
            <InfiniteScroll
                dataLength={props.postState.posts.length}
                // next={fetchData} This function was throwing out an error for infinite scroll
                // hasMore={hasMore}
                // loader={<h4>Loading...</h4>} This
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p> 
                }
                refreshFunction={() => window.location.reload()}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                }
            >
                {props.postState.isLoading ? null : <div> {props.postState.posts.map((e, e2) => (
                        <div key={e2} className='posts'>
                            <Post e={e} userState={props.userState} postState={props.postState} handleLike={handleLike} />
                        </div>
                    ))} </div>}
            </InfiniteScroll>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)