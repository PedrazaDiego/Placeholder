import React from 'react'

export default function Post(props) {
  return (
    <div className='posts post-card'>
        <img src={props.e.image}/>
    </div>

  )
}
