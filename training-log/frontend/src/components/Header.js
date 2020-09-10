import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";


function Header({name, logout}) {
  return (
    <div className="header">
      <h1>Trainig Log</h1>
      <div className="header__right">
        <p>{name}</p>
        {name && <button onClick={logout}>Logout</button>}
      </div>
    </div>
    
  );
}

export default Header;
