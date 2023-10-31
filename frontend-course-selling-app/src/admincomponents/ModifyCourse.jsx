import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ModifyCourse() {
  const [courseId, setCourseId] = useState('');
  const [newCourseData, setNewCourseData] = useState({});
  const [message, setMessage] = useState('');
  const [courses, setCourses] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourseData({ ...newCourseData, [name]: value });
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(`http://localhost:3000/admin/courses/${courseId}`, { ...newCourseData }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setMessage('Course updated successfully');
      } else {
        setMessage('Error updating course');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    }
  }

  useEffect(() => {
    const fetchCourse = async() => {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/admin/courses",{
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        setCourses(response.data)
    }
    fetchCourse();
  }, []);

  return (
    <div>
      <h2>Modify Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseId">Course ID: </label>
          <input
            type="text"
            id="courseId"
            name="courseId"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">New Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">New Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Modify Course</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ModifyCourse;