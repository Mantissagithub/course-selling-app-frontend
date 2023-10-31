import React from "react";
import axios from "axios";

function ShowCourses() {
    const [courses, setCourses] = React.useState([]);

    React.useEffect(() => {
        const fetchCourse = async() => {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:3000/users/courses",{
                headers: {
                    authorization : `Bearer ${token}`
                }
            })
            setCourses(response.data.courses);
        }
        fetchCourse();
    },[]);

    // Add code to fetch courses from the server
    // and set it in the courses state variable.
    return <div>
        <h1>Course Page</h1>
        {courses.map(c => <Course title={c.title} description={c.description} id={c.id}/>)}
    </div>
}

function Course(props) {
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <h2>{props.id}</h2>
    </div>
}

export default ShowCourses;