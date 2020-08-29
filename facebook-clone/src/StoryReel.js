import React from 'react';
import './StoryReel.css';
import Story from './Story';


function StoryReel() {
    return (
        <div className='storyReel'>
            <Story title='Hej' image="https://www.w3schools.com/w3css/img_lights.jpg" />
            <Story title='Pa' />
            <Story title='Dig' />
        </div>
    );
}

export default StoryReel;
