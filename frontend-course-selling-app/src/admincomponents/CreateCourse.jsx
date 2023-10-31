import React from "react";
import axios from 'axios';
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
    const [title, setTitle] = React.useState("");
    const [description,setDescription] = React.useState("");
    const token = localStorage.getItem("token");

    const addCourse = async() => {
        const reponse = await axios.post("http://localhost:3000/admin/courses",{title,description}, {
            headers : {
                Authorization : `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
    }

    return <div>
        <h1>Create Course Page</h1>
        <br />
        <input type="text" onChange={e => setTitle(e.target.value)} placeholder="Title"/>
        <br />
        <input type="text" onChange={e=> setDescription(e.target.value)} placeholder="description"/>
        <br />
        <button onClick={addCourse}>Create Course</button>
    </div>
}
export default CreateCourse;