import react from 'react';
import axios from 'axios';

function BuyCourse(){
    const [courseId,setCourseId] = react.useState("");
    const [message,setMessage] = react.useState("");

    const handlePurchase = async() => {
        const token = localStorage.getItem("token");
        const response = await axios.post(`http://localhost:3000/users/courses/${courseId}`,{},{
            headers: {
                Authorization : `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
        if (response.status === 200) {
            console.log("Course purchased successfully");
        } else {
            console.log("Error purchasing course");
        }
    }

    return (
        <div>
            <input type="text" value={courseId} placeholder='Enter Course Id' onChange={(e) => setCourseId(e.target.value)} />
            <button onClick={handlePurchase}>Purchase This Course</button>
        </div>
    )
}

export default BuyCourse;