import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import Burger from "./Burger";

function Sidebar({ showAdd, showExercises }) {
  
  return (
    <div className="sidebar">
      <div onClick={showAdd} className={showAdd ? "sidebar__option active" : "sidebar__option"}>
        <h3>Add Workout</h3>
        <h3>
          <AddIcon />
        </h3>
      </div>
      <div onClick={showExercises} className="sidebar__option">
        <h3>Show Workouts</h3>
      </div>
      <div className="sidebar__option"></div>
    </div>
  );
}

export default Sidebar;
