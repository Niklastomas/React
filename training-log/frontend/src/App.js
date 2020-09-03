import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import Exercise from "./components/Exercise";
import ExerciseInfo from "./components/ExerciseInfo";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState({});
  const [showCreateArea, setShowCreateArea] = useState(false);
  const [showExercise, setShowExercise] = useState(false);
  const [showExerciseInfo, setShowExerciseInfo] = useState(false);

  const loadExercises = () => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => {
        if (res.data.length > 0) {
          setExercises(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadExercises();
  }, []);

  const addExercise = (exercise) => {
    axios
      .post("http://localhost:5000/exercises/add/", exercise)
      .then(() => loadExercises())
      .catch((err) => console.log(err));
    setShowCreateArea(false);
  };

  const editExercise = (updatedExercise) => {
    axios
      .post(
        `http://localhost:5000/exercises/update/${updatedExercise._id}`,
        updatedExercise
      )
      .then(() => loadExercises())
      .catch((err) => console.log(err));
    close();
  };

  const showCreate = () => {
    if (showCreateArea === true) {
      setShowCreateArea(false);
    } else {
      setShowCreateArea(true);
      setShowExerciseInfo(false);
      setShowExercise(false);
    }
  };

  const showExercises = () => {
    if (showExercise === true) {
      setShowExercise(false);
    } else {
      setShowExercise(true);
      setShowExerciseInfo(false);
      setShowCreateArea(false);
    }
  };

  const showInfo = (id) => {
    console.log(id);
    axios
      .get(`http://localhost:5000/exercises/${id}`)
      .then((res) => {
        setExercise(res.data);
      })
      .catch((err) => console.log(err));

    if (exercise !== null) {
      setShowExerciseInfo(true);
      setShowExercise(false);
      setShowCreateArea(false);
    }
  };

  const close = () => {
    setShowExerciseInfo(false);
    setShowExercise(false);
    setShowCreateArea(false);
  };

  return (
    <div className="app">
      <Header />
      <Sidebar showAdd={showCreate} showExercises={showExercises} />

      <div className="app__content">
        {showCreateArea && <CreateArea addExercise={addExercise} />}
        {showExercise &&
          exercises.map((exercise) => (
            <Exercise
              key={exercise._id}
              id={exercise._id}
              name={exercise.name}
              date={exercise.date}
              duration={exercise.duration}
              onClick={showInfo}
            />
          ))}
        {showExerciseInfo && (
          <ExerciseInfo
            exercise={exercise}
            editExercise={editExercise}
            close={close}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
