import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './admincomponents/Login';
import Landing from "./admincomponents/Landing";
import CreateCourse from './admincomponents/CreateCourse';
import Register from './admincomponents/Register';
import ShowCourses from './admincomponents/ShowCourses';
import ModifyCourse from './admincomponents/ModifyCourse';

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<CreateCourse />} />
                <Route path="/courses" element={<ShowCourses />} />
                <Route path="/modifycourse" element={<ModifyCourse/>}/>
            </Routes>
        </Router>
    );
}

export default App;