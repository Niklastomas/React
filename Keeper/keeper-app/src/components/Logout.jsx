import React from "react";
import { GoogleLogout } from "react-google-login";

function Logout({handleLogout}) {

    const onSuccess = () => {
        handleLogout();
    };
  return (
    <div>
      <GoogleLogout
        className="logout-button"
        clientId="638783148155-2phpgk04915c6t6vreq7eo6p2ukt6m5s.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
