import React from 'react'


export default function Post(props) {

  return (
    <div className='posts post-card'>
      <div>
        {props.postState.current === 1 ? <button onClick={() => props.deletePost(props.e.id)}>Delete</button> : null}
      </div>
      <img src={props.e.image} />
      {props.postState.current === 1 ?
        <div>
          <button>heart</button> {props.e.likes.length} likes
        </div>
        : null}


      {props.postState.current === 0 ?
        <div>
          <button>heart</button> {props.e.likes.length} likes
        </div>
        :
        null}
    </div>
  )
}