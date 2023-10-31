import react from 'react';
import axios from 'axios';

function PurchasedCourses(){
    const [purchasedCourse,setPurchasedCourse] = react.useState([]);

    react.useEffect(() => {
        const fetchPurchased = async() => {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:3000/users/purchasedCourses",{},{
                headers:{
                    Authorization : `Bearer ${token}`,
                }
            })
            setPurchasedCourse(response.data.purchasedCourses);
        }
        fetchPurchased();
    },[]);

    return (
        <div>
            <h1>PURCHASED COURSES</h1>
            {purchasedCourse.map(c => <Course title={c.title} description={c.description} id={c.id}/>)}
        </div>
    )
}

function Course(props) {
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <h2>{props.id}</h2>
    </div>
}

export default PurchasedCourses;