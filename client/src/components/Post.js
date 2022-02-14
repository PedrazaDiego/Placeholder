import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'

import { PostLikes } from '../services'


export default function Post(props) {

  const [likeCount, setLikeCount] = useState(props.e.likes.length)

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
      <img src={props.e.image} alt={`${props.e.image}`} onClick={() => console.log(props.e.content)}/>


      {props.postState.current === 1 ?
        <div>
          {props.e.likes.length} <br />
          likes
        </div>
        : null}


      {props.postState.current === 0 ?
        <div className='post-bottom'>
          <Button sx={{
            paddingX: 0
          }}>
            <FavoriteTwoToneIcon
              onClick={ async () => {
                props.handleLike(props.e.id, props.userState.user_id)
                const res = PostLikes(props.e.id)
                const {likes} = await res
                // setLikeCount(props.e.likes.length)
                setLikeCount(likes.length)
                console.log(likeCount)
                }}>
            </FavoriteTwoToneIcon>
            {likeCount} likes
          </Button>         
            {/* {props.e.likes.length}   */}
        </div>
        :
        null}
    </Card>
  )
}