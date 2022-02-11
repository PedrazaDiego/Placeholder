import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'

import { LoadPosts, ToggleState, UpdateCurrent } from "../store/actions/PostAction";
import Post from '../components/Post'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (n) => dispatch(LoadPosts(n)),
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

    const [page, setPage] = useState(2)

    const handleLike = (postId, userId) => {
        let toState
        if (!props.postState.toggledState) {
            toState = true
        }
        if (props.postState.toggledState) {
            toState = false
        }
        props.toggleState(postId, userId, toState)
    }

    const fetchData = () => {
        console.log(`loading new page ${page}`)
        props.fetchPosts(page)
        setPage(page + 1)
    }

    useEffect(() => {
        props.fetchPosts(1)
        props.updateCurrent(0)
    }, [])
    

    return (
        <div>
            {/* {props.postState.isLoading ? null : <div> {props.postState.posts.map((e) => (
                <div key={e.id} className='posts'>
                    <Post e={e} userState={props.userState} postState={props.postState} handleLike={handleLike} />
                </div>
            ))} </div>} */}

    <InfiniteScroll
        dataLength={props.postState.posts.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
            <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
            </p> 
        }
        // below props only if you need pull down functionality
        refreshFunction={() => console.log('refreshed')}
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