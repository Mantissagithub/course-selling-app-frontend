import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './usercomponents/Login';
import Landing from "./usercomponents/Landing";
import BuyCourse from './usercomponents/BuyCourse';
import Register from './usercomponents/Register';
import ShowCourses from './usercomponents/ShowCourses';
import PurchasedCourses from './usercomponents/PurchasedCourses';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/buy" element={<BuyCourse />} />
              <Route path="/courses" element={<ShowCourses />} />
              <Route path="/purchased" element={<PurchasedCourses/>}/>
          </Routes>
      </Router>
  );
}

export default App;