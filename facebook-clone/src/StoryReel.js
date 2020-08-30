import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        profileSrc="https://www.w3schools.com/howto/img_avatar.png"
        title="Niklas"
        image="https://www.w3schools.com/w3css/img_lights.jpg"
      />
      <Story
        profileSrc="https://www.w3schools.com/w3images/avatar6.png"
        title="Tomas"
        image="https://images.unsplash.com/photo-1598607014267-279d7d1e575d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
      />
      <Story
        profileSrc="https://www.w3schools.com/w3images/avatar2.png"
        title="Nicke"
        image="https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
      />
    </div>
  );
}

export default StoryReel;
