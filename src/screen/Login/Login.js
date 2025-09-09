import React, { useState, useEffect } from "react";
import './Login.css';

const Login = () => {
    const [data, setData] = useState({
        username: '',
        password: ''

    })
    const { username, password } = data;
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    const submitHandler = e => {
        e.preventDefault()
        console.log(data)
    }
    return (
        <div>Login
            <center>
                <form onSubmit={submitHandler}>
                    <div className="Username">Username : <input type="text" name="username" value={username} onChange={changeHandler} /><br /></div>
                    <div className="Password">Password : <input type="password" name="password" value={password} onChange={changeHandler} /><br /></div>
                    <input type="submit" name="submit" />
                </form>
            </center>
            
        </div>

    )
}
export default Login