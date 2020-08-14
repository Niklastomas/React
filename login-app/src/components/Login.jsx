import React from "react";
import Input from "./Input";

function Login(props){

    return (
        <form className="form" method="POST" action={props.isRegistered ? "/login" : "/register"} >
            <input placeholder="Username" type="text" name="username" />
            <input placeholder="Password" type="password" name="password" />
            {!props.isRegistered && <input placeholder="Confirm Password" type="password" name="confirmPassword" /> }   
        <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
      </form>
    );
}

export default Login;