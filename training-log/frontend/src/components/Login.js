import React, {useState} from 'react'
import "./Login.css";


function Login({login}) {

    const [input, setInput] = useState({
        username: "",
        password: ""
    });

    
    const handleChange = (e) => {

        const {name, value} = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            };
        });

    };

    const submitInput = (e) => {
        e.preventDefault();
        login(input);

        setInput({
            username: "",
            password: ""
        });
    };

    return (
        <div className="login">
            <form className="login__form">
                <input onChange={handleChange} type="text" name="username" value={input.username} placeholder="Username"/>
                <input onChange={handleChange} type="password" name="password" value={input.password} placeholder="Password"/>
                <button type="submit" onClick={submitInput} className="login__button">Login</button>
            </form>
            
            

        </div>
    )
}

export default Login
