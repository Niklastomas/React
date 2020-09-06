import React, { useState } from "react";
import "./ExerciseInfo.css";
import TimerIcon from "@material-ui/icons/Timer";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

function ExerciseInfo({ exercise, close, editExercise, deleteExercise }) {
  const [edit, setEdit] = useState(false);
  const [newExercise, setNewExercise] = useState({});
  var newDate = new Date(exercise.date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var d = newDate.getDate();
  var m = monthNames[newDate.getMonth()];
  var y = newDate.getFullYear();

  const handleSubmitUpdate = () => {
    editExercise(newExercise);
    setEdit(false);
  };

  const handleDelete = () => {
      deleteExercise(exercise);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExercise((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
  };

  const handleEdit = () => {
    setEdit(true);
    setNewExercise(exercise);
  };

  return (
    <div className="exerciseInfo">
      {edit && (
        <div className="exerciseInfo__edit">
        <form>
          <input
            onChange={handleChange}
            type="text"
            defaultValue={exercise.name}
            name="name"
          />
          <input
            onChange={handleChange}
            type="text"
            defaultValue={exercise.duration}
            name="duration"
          />
          <input
            onChange={handleChange}
            type="date"
            defaultValue={exercise.date}
            name="date"
          />
          <textarea
            name="comment"
            onChange={handleChange}
            id=""
            cols="30"
            rows="3"
            defaultValue={exercise.comment}
          ></textarea>
          </form>
        </div>
      )}
      {!edit && (
        <div className="exerciseInfo__content">
          <div className="exerciseInfo__content--title">
            <h1>{exercise.name}</h1>
          </div>

          <div className="exerciseInfo__content--text">
            <TimerIcon />

            <h3>{exercise.duration} min</h3>
          </div>
          <div className="exerciseInfo__content--text">
            <CalendarTodayIcon />

            <h3>{d + " " + m + " " + y}</h3>
          </div>
          <div className="exerciseInfo__content--comment">
            <ChatBubbleOutlineIcon />
            <h3>{exercise.comment}</h3>
          </div>
        </div>
      )}
      {edit ? (
        <div className="exerciseInfo__icons">
          <DoneIcon className="doneIcon" onClick={() => handleSubmitUpdate()} />
          <CloseIcon onClick={close} className="closeIcon" />
        </div>
      ) : (
        <div className="exerciseInfo__icons">
          <EditIcon onClick={handleEdit} className="editIcon" />
          <DeleteOutlineOutlinedIcon className="deleteIcon" onClick={() => handleDelete()} />
          <CloseIcon onClick={close} className="closeIcon" />
        </div>
      )}
    </div>
    
  );
}

export default ExerciseInfo;
