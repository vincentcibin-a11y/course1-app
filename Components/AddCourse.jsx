import React from 'react'

const AddCourse = () => {
    const[course,setCourse]=useState({
        title:"",
        duration:"",
        fees:"",
        trainerName:"",
        startingdate:"",
        endingDate:""
    });
    const inputHandler=(e)=>{
        setCourse({...course,[e.target.name]:e.target.value,});
    };
    const readValues=()=>{axios.post("http://localhost:3000/add-course",course).then((Response)=>{
        alert("Course added successfully");
        setCourse({
            title:"",
            duration:"",
            fees:"",
            trainerName:"",
            startingDate:"",
            endingdate:"",
        });
    }).catch((error)=>{alert("Error");console.log(error)})}
  return (
    <div className="">
Add Course 
<input type="text" className="form-control" name="title" value={course.title} onChange={inputHandler}/>
<input type="number" className="form-control" name="duration" value={course.duration} onChange={inputHandler}/>
<input type="number" className="form-control" name="fees" value={course.fees} onChange={inputHandler}/>
<input type="text" className="form-control" name="trainer-name" value={course.trainerName} onChange={inputHandler}/>
<input type="date" className="form-control" name="startingDate" value={course.startingDate} onChange={inputHandler}/>
<input type="date" className="form-control" name="endingDate" value={course.endingDate} onChange={inputHandler}/>
<button className="btn btn-primary">Submit</button>



    </div>
    
  )
}

export default AddCourse