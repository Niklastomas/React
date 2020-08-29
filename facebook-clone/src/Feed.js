import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post
            profilePic="https://www.w3schools.com/w3css/img_lights.jpg"
            message="WOW this works!"
            timestamp="Timestamp"
            username="Nicke"
            image="https://www.w3schools.com/w3css/img_lights.jpg"
         />
        <Post />
        <Post />
           
            
        </div>
    );
}

export default Feed;
