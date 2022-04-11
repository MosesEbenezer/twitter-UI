import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish"
import './Post.css';


function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className='post'>
      <div className="post_avatar">
        <Avatar src='https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png' />
      </div>
      <div className='post_body'>
        <div className='post_header'>
          <div className='post_headerText'>
            <h3>
              Moses Ebenezer{" "} 
              <span className='post_headerSpecial'>
                <VerifiedUserIcon className='post_badge' />
                @mosesebenezer
              </span>
            </h3>
          </div>
          <div className='post_headerDescription'>
            <p>Twitee App - Twitter clone with IpConf</p>
          </div>
        </div>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif' alt=''/>
        <div className='post_footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post;