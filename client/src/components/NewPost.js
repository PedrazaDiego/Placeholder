import React from 'react'

export default function NewPost(props) {
  return (
    <div>
        <form onSubmit={props.handlePost}>
            <input type='text' placeholder='what are you thinking' name='content'></input>
            <input type='text' placeholder='image url' name='image'></input>
            <br/>
            <button>Submit</button> <button onClick={props.handleCancel}>Cancel</button>
        </form>
    </div>
  )
}
