import React, { useEffect, useState, useId } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';


function Feed(props) {
  const index = useId()
  const [alltweet, setAlltweet] = useState([])
  const [success, setSuccess] = useState(false)
  const [users, setUsers] = useState([])
  const addTweet = async (data) => {
    const response = await fetch("http://[::1]:3021/twits", {
      method: "POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(data)
    })

    if(response.ok){
      const data = await response.json();
      setSuccess(data.success)
    }else{
      const error = await response.text()
      console.error(error);
    }
  }

  useEffect(()=> {
    getTweets().then(items=>{
      setAlltweet(items)
    })
    getUsers().then(user => setUsers(user))
  }, [])

  useEffect(()=> {
    if(success){
      getTweets().then(items=>{
        setAlltweet(items)
      })
    }
  }, [success])

  const getTweets = async () => {
    const response = await fetch("http://[::1]:3021/twits");
    if(response.ok){
      const {data} = await response.json();
      return data
    }else{
      const error = await response.text()
      throw new Error(error)
    }
  }

  const getUsers = async () => {
    const response = await fetch("http://[::1]:3021/users");
    if(response.ok){
      const {data} = await response.json();
      return data
    }else{
      const error = await response.text()
      throw new Error(error)
    }
  }
  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed_header'>
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox addTweet={addTweet} />
      {alltweet?.map(content=> (
        <Post {...content} users={users} />
      ))}
    </div>
  )
}

export default Feed;