import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core"


function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png'/>
          <input placeholder="What's happening?" type="text" />
        </div>
        <input className='tweetBox__imageInput' placeholder="Optional: Enter Image URL" type="text" />

        <Button className='tweetBox__tweetButton'>Twit</Button>
      </form>
    </div>
  )
}

export default TweetBox;