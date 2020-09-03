import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";

function Sidebar({ showAdd, showExercises }) {
  return (
    <div className="sidebar">
      <div onClick={showAdd} className="sidebar__option">
        <h3>Add Exercise</h3>
        <h3>
          <AddIcon />
        </h3>
      </div>
      <div onClick={showExercises} className="sidebar__option">
        <h3>Show Exercises</h3>
      </div>
      <div className="sidebar__option"></div>
    </div>
  );
}

export default Sidebar;
