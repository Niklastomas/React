import React from "react";
import "./Exercise.css";

function Exercise({ name, duration, date, id, onClick }) {
  var newDate = new Date(date);
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

  return (
    <div onClick={() => onClick(id)} className="exercise">
      <h3>{name}</h3>
      {/* <p>{duration} min</p> */}
      <p>{date && d + " " + m + " " + y}</p>
    </div>
  );
}

export default Exercise;
