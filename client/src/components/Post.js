import React from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import { Button, Card } from '@mui/material'


export default function Post(props) {

  return (
    <Card className='posts post-card' raised={true} sx={(theme) =>({
      [theme.breakpoints.down('sm')]: {
        width: 325
      }
    })}> 
      <div>
        {props.postState.current === 1 ? <DeleteIcon onClick={() => props.deletePost(props.e.id)}>Delete</DeleteIcon> : null}
      </div>
      {props.postState.current === 0 ?
        <Link to={`/user/${props.e.user_id}`} className='user-link'> {props.e.user} </Link>
        : null}
      <img src={props.e.image} onClick={() => console.log(props.e.content)}/>


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