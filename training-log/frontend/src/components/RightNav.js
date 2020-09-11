import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 1000px) {
    flex-flow: column nowrap;
    display: flex;
    background: rgb(0 0 0 / 90%);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }

    li:hover {
        cursor: pointer;
        color: #00ffff;

    }

  }
`;

const RightNav = ({ open, addWorkout, showWorkouts }) => {
  return (
    <Ul open={open}>
      <li onClick={addWorkout}>Add Workout</li>
      <li onClick={showWorkouts}>Show Workouts</li>
    
    </Ul>
  )
}

export default RightNav