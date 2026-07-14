import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewCourse = () => {
    const[courses,setCourses]=useState([]);
    const fetchData=()=>{
        axios.get("http://localhost:3000/view-course").then((response)=>{setCourses(response.data)}).catch((error)=>{console.log(error);});

    };
    useEffect(()=>{fetchData();},[]);

  return (
    <div>
      <div>ViewCourse</div>
      <table>
        <thead>
          <tr className="thead">
            <th className="th">Title</th>
            <th className="th">Duration</th>
            <th className="th">Fees</th>
            <th className="th">Trainer</th>
            <th className="th">Start Date</th>
            <th className="th">End Date</th>
          </tr>
        </thead>
        <tbody>
                {courses.map((course)=>(<tr key={course._id}>
                    <td className="">{course.title}</td>
                    <td className="">{course.duration}</td>
                    <td className="">{course.fees}</td>
                    <td className="">{course.trainerName}</td>
                    <td className="">{course.startingDate}</td>
                    <td className="">{course.endingDate}</td>
                </tr>))}

        </tbody>
      </table>
    </div>
  )
}

export default ViewCourse