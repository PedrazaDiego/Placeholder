import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import { Button, Card } from '@mui/material'


export default function Post(props) {


  return (
    <Card className='posts post-card' sx={{maxWidth: '820px'}, {minWidth: '420px'}} raised={true}>
      <div>
        {props.postState.current === 1 ? <DeleteIcon onClick={() => props.deletePost(props.e.id)}>Delete</DeleteIcon> : null}
      </div>
      {props.postState.current === 0 ?
        <p>
          {props.e.user}
        </p>
        : null}
      <img src={props.e.image} />


      {props.postState.current === 1 ?
        <div>
          {props.e.likes.length} <br />
          likes
        </div>
        : null}


      {props.postState.current === 0 ?
        <div className='post-bottom'>
          <Button>
            <FavoriteTwoToneIcon
              onClick={() => props.handleLike(props.e.id, props.userState.user_id)}>
            </FavoriteTwoToneIcon>
          </Button>
          {props.e.likes.length}  likes
        </div>
        :
        null}
    </Card>
  )
}