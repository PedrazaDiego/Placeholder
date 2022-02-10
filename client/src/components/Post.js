import React from 'react'



export default function Post(props) {

  return (
    <div className='posts post-card'>
        <img src={props.e.image}/>
        {props.postState.current === 1 ? 
        <div>
          {props.userState.user.username} <button>heart</button> {props.e.likes.length} likes
        </div> 
        : null}

        {props.postState.current === 0 ?
        <div>

        </div>
        : null}
    </div>
  )
}
