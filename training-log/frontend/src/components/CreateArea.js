import React, { useState } from "react";
import "./CreateArea.css";
import axios from "axios";

function CreateArea({ addExercise }) {
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
            placeholder="Exercise Name"
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
            placeholder="How did you feel?"
          ></textarea>
        </div>
        <button onClick={handleSubmit} className="btn btn-secondary">
          Add Exercise
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
