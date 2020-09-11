import React, { useState } from "react";
import "./Login.css";

function Login({ handleLogin, handleRegister }) {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showLogin, setShowLogin] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const submitLoginInput = (e) => {
    e.preventDefault();
    handleLogin(input);

    setInput({
      username: "",
      password: "",
    });
  };

  const toggleLogin = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  const submitRegisterInput = (e) => {
    e.preventDefault();
    if(input.password === input.confirmPassword) {
        handleRegister(input);
        setShowLogin(true);
    } else {
        alert("You need to enter the same password!")
    }
    
  };

  return (
    <div className="login">
      <>
        <form className="login__form" onSubmit={showLogin ? submitLoginInput : submitRegisterInput}>
          <input
            required
            onChange={handleChange}
            type="text"
            name="username"
            value={input.username}
            placeholder="Username"
          />
          <input
            required
            onChange={handleChange}
            type="password"
            name="password"
            value={input.password}
            placeholder={"Password"}
          />
          {!showLogin &&  <input
            required
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            placeholder="Confirm Password"
          /> }
          {showLogin ?  <button type="submit" className="login__button">
            Login
          </button> : <button type="submit" className="login__button">
            Register
          </button> }
         
        </form>
        <div className="login__text">
          <p>
            {showLogin ? (
              <>
                Dont have an account?{" "}
                <a onClick={toggleLogin} href="">
                  Register
                </a>
              </>
            ) : (
              <>
                Already have an Account?{" "}
                <a onClick={toggleLogin} href="">
                  Login
                </a>
              </>
            )}
          </p>
        </div>
      </>
      {/* {showLogin ? (
        <>
          <form className="login__form" onSubmit={submitLoginInput}>
            <input
              required
              onChange={handleChange}
              type="text"
              name="username"
              value={input.username}
              placeholder="Username"
            />
            <input
              required
              onChange={handleChange}
              type="password"
              name="password"
              value={input.password}
              placeholder="Password"
            />
            <button type="submit" className="login__button">
              Login
            </button>
          </form>
          <div className="login__text">
            <p>
              Dont have an account? <a onClick={register} href="">Register</a>
            </p>
          </div>
        </>
      ) : (
        <form className="login__form" onSubmit={submitRegisterInput}>
          <input
            required
            onChange={handleChange}
            type="text"
            name="username"
            value={input.username}
            placeholder="Username"
          />
          <input
            required
            onChange={handleChange}
            type="password"
            name="password"
            value={input.password}
            placeholder="Enter Password"
          />
            <input
            required
            onChange={handleChange}
            type="password"
            name="password"
            value={input.confirmPassword}
            placeholder="Confirm Password"
          />
          <button type="submit" className="login__button">
            Register
          </button>
        </form>
      )} */}
    </div>
  );
}

export default Login;
