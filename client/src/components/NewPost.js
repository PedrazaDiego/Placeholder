import React from 'react'

export default function NewPost() {
  return (
    <div>
        <form>
            <input type='text' placeholder='what are you thinking' name='content'></input>
            <input type='text' placeholder='image url' name='image'></input>
        </form>
    </div>
  )
}
