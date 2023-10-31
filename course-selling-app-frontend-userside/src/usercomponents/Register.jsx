import React from "react";
import axios from "axios";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const [username, setUsername] = React.useState("");
    const [password,setPassword] = React.useState("");

    const handleSignup = () => {
        axios.post("http://localhost:3000/users/signup", {username, password}, {headers:{ "Content-Type": "application/json"}})
        .then(response => {
            localStorage.setItem("token",response.data.token);
            console.log(response.data.message);
        })
    }

    return <div>
        <h1>Register to the website</h1>
        <br/>
        <input type={"text"} onChange={e => setUsername(e.target.value)} placeholder="Username"/>
        <br/>
        <input type="text" onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <br />
        <button onClick={handleSignup}>Sign Up</button>
        <br />
        Already a user? <a href="/login">Login</a>
    </div>
}

export default Register;