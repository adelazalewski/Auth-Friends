import React, { useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
const handleChange = (e) => {
    e.persist();
    setLogin({
        ...login,
        [e.target.name]: e.target.value
    })
}
const history = useHistory();
//console.log("history: ", history);
const submit = (e) => {
    e.preventDefault();
    setLogin({
        username: "",
        password: ""
    });
    axios.post('http://localhost:5000/api/login', login)
    .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/homepage")
        //console.log("login post res: ", res); - gives you an object with a key/value -- data: token
    })
    .catch((err) => {
        console.log("login err: ", err);

    })
}
    return (
        <form onSubmit={submit}>
            <h3>Login First Of All</h3>
            <label htmlFor="username">Username</label>
            <input name="username" type="text" placeholder="Lambda School" value={login.username} onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" value={login.password} onChange={handleChange} name="password" placeholder="i<3Lambd4" />
            <button>Login</button>
        </form>
    )
}
