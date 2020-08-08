import React from "react";
import Input from "./Input";

function Login(props){

    return (
        <form className="form">
            <Input placeholder="Username" type="text" />
            <Input placeholder="Password" type="password" />
            {!props.isRegistered && <Input placeholder="Confim Password" type password /> }   
        <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
      </form>
    );
}

export default Login;