import React from "react";
import Login from "./Login";

const isLoggedIn = false;
const userIsRegistered = false;

function App() {
  return (
    <div className="container">
      
      {isLoggedIn ? <h1>Hello</h1> : <Login isRegistered = {userIsRegistered} /> }
      
    </div>
  );
}

export default App;
