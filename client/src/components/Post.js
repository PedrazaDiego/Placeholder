import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';


export default function Post(props) {


  return (
    <div className='posts post-card'>
      <div>
        {props.postState.current === 1 ? <DeleteIcon onClick={() => props.deletePost(props.e.id)}>Delete</DeleteIcon> : null}
      </div>
      <img src={props.e.image} />
      {props.postState.current === 1 ?
        <div>
          {props.e.likes.length} likes
        </div>
        : null}


      {props.postState.current === 0 ?
        <div>
          <FavoriteTwoToneIcon onClick={() => props.handleLike(props.e.id, props.userState.user_id)}>heart</FavoriteTwoToneIcon> {props.e.likes.length} likes
        </div>
        :
        null}
    </div>
  )
}