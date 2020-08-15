import React from "react";



function Login(props){
    return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-sm-8">
                <div className="card">
                    <div className="card-body">
                        <form action="/login" method="POST">
                            <div className="form-group">
                                <label for="email" >Email</label>
                                <input type="email" className="form-control" name="username"></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" name="password"></input>
                            </div>
                            <button type="submit" className="btn btn-dark login-btn">Login</button>
                            <button type="submit" className="btn btn-dark register-btn">Register</button>
                        </form>
                    </div>
                </div>

            </div>
            
        
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                        <i className="fab fa-google"> </i>
                        Sign In with Google
                    </a>
                </div>
                <div className="card">
                    <div className="card-body">
                        <a className="btn btn-block btn-social btn-facebook" href="/auth/facebook" role="button">
                        <i className="fab fa-facebook"></i>
                        Sign In with Facebook

                        </a>

                    </div>

                </div>

            </div>

        </div>
        </div>
        
    </div> 

    );
 
}

export default Login;
