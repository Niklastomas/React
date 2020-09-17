import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import Logout from "./Logout";


function Header({ name, handleLogout }) {

    
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>

      {name && (
        <div className="header-user">
          <h3>Welcome {name}!</h3>
            <Logout handleLogout={() => handleLogout()} />
        </div>
      )}
    </header>
  );
}
export default Header;
