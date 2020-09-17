import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function Login({ loginSuccess, loginFailure }) {
  const onSuccess = (response) => {
    loginSuccess(response);
  };

  const onFailure = (response) => {
    loginFailure(response);
  };

  //   const [loginInfo, setLoginInfo] = useState({
  //     username: "",
  //     password: "",
  //   });

  //   function handleInputChange(event) {
  //     const { name, value } = event.target;

  //     setLoginInfo((prevValue) => {
  //       return {
  //         ...prevValue,
  //         [name]: value,
  //       };
  //     });
  //   }

  //   function handleClick(event) {
  //     props.onSubmit(loginInfo);

  //     // setLoginInfo({
  //     //     username: "",
  //     //     password: ""
  //     // });

  //     event.preventDefault();
  //   }

  return (
    <div className="login">
      <GoogleLogin
        className="login-button"
        clientId="638783148155-2phpgk04915c6t6vreq7eo6p2ukt6m5s.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
    // <div className="container mt-5">
    //     <div className="row">
    //         <div className="col-sm-8">
    //             <div className="card">
    //                 <div className="card-body">
    //                     <form >
    //                         <div className="form-group">
    //                             <label htmlFor="email" >Email</label>
    //                             <input onChange={handleInputChange} type="email" className="form-control" name="username" value={loginInfo.username}></input>
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="password">Password</label>
    //                             <input onChange={handleInputChange} type="password" className="form-control" name="password" value={loginInfo.password}></input>
    //                         </div>
    //                         <button onClick={handleClick} type="submit" className="btn btn-dark login-btn">Login</button>
    //                         <button type="submit" className="btn btn-dark register-btn">Register</button>
    //                     </form>
    //                 </div>
    //             </div>

    //         </div>

    //     <div className="col-sm-4">
    //         <div className="card">
    //             <div className="card-body">
    //                 <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
    //                     <i className="fab fa-google"> </i>
    //                     Sign In with Google
    //                 </a>
    //             </div>
    //             <div className="card">
    //                 <div className="card-body">
    //                     <a className="btn btn-block btn-social btn-facebook" href="/auth/facebook" role="button">
    //                     <i className="fab fa-facebook"></i>
    //                     Sign In with Facebook

    //                     </a>

    //                 </div>

    //             </div>

    //         </div>

    //     </div>
    //     </div>

    // </div>
  );
}

export default Login;
