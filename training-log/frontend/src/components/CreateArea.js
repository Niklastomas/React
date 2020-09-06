import React, { useState } from "react";
import "./CreateArea.css";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CloseIcon from '@material-ui/icons/Close';

function CreateArea({ addExercise, close }) {
  const [exercise, setExercise] = useState({
    name: "",
    duration: "",
    date: new Date(),
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExercise((prevExercise) => {
      return {
        ...prevExercise,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExercise(exercise);
    setExercise({
      name: "",
      duration: "",
      date: new Date(),
      comment: "",
    });
  };

  return (
    <div className="createArea">
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            value={exercise.name}
            type="text"
            name="name"
            className="form-control"
            placeholder="Workout Name"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            value={exercise.duration}
            type="number"
            name="duration"
            className="form-control"
            placeholder="Duration (min)"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            value={exercise.date}
            type="date"
            name="date"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            value={exercise.comment}
            className="form-control"
            name="comment"
            rows="1"
            placeholder="Comment"
          ></textarea>
        </div>
        <AddCircleOutlineIcon className="addIcon" onClick={handleSubmit}/>
        <CloseIcon className="closeIcon" onClick={close} />
       
      </form>
    </div>
  );
}

export default CreateArea;
