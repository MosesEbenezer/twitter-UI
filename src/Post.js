import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish"
import './Post.css';


function Post({
  id,
  user_id,
  users,
  displayName,
  username,
  verified,
  content,
  img_url,
  avatar,
  comments
}, ...props) {

  const [chat, showChat] = useState(false)
  const [comment, setComment] = useState("")
  const [allcomment, setAllcomment] = useState([])

  const handleChat = () => {
    showChat(!chat)
  }

  const sendComment = async () => {
    const data = {
      user_id,
      comment,
      twit_id: id
    }

    const response = await fetch("http://[::1]:3021/comments", {
      method:"POST",
      headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(data)
  })

  if(response.ok){
    const data = await response.json();
    alert("tweet sent successfully")
  }else{
    const error = await response.text();
  }
  }

  useEffect(()=> {
    if(chat){
      getComments().then(items=>{
        setAllcomment(items)
      })
    }
    
  }, [chat])

  useEffect(()=>{
    getUser()
  }, [])

  const getComments = async () => {
    const response = await fetch("http://[::1]:3021/comments");
    if(response.ok){
      const {data} = await response.json();
      return data
    }else{
      const error = await response.text()
      throw new Error(error)
    }
  }

  const getUser = () => {
   const name = users.filter(content_id => content_id != user_id)
  }

  return (
    <div className='post' key={props.id}>
      <div className="post_avatar">
        <Avatar src="https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png" />
      </div>
      <div className='post_body'>
        <div className='post_header'>
          <div className='post_headerText'>
            <h3>
              {/* {getUser()}  */}
              <span className='post_headerSpecial'>
                <VerifiedUserIcon className='post_badge' />
                @mosesebenezer
              </span>
            </h3>
          </div>
          <div className='post_headerDescription'>
            <p>{content}</p>
          </div>
        </div>
        <img src={img_url} alt=''/>
        <div className='post_footer'>
          <div>
          <ChatBubbleOutlineIcon fontSize='small' onClick={handleChat} />
          <span style={{fontSize: '12px', marginLeft: '0.5em'}} >{comments.length > 0 && comments.length}</span>
          {chat && (
            <>
            <div>{comments.map(items=>(
            <div style={{display: 'flex', alignItems:'center'}}>
            <div className="post_avatar">
              <Avatar src="https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png" />
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
              <span>{items.user_id}</span>
              <small>{items.comment}</small>
            </div>
              </div>
          ))}</div>
            <div style={{border: '1px solid #ddd', display:'flex', flexDirection:'row', alignItems:'center', padding:'.5em', width:"20em"}}>
            <input style={{border: 'none', width:'100%', outline:'none', padding:'.5em'}} value={comment} onChange={(e)=>setComment(e.target.value)} />
            <button onClick={sendComment}>send</button>
          </div>
            </>
          
          )}
          </div>
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post;