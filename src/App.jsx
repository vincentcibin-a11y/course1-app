import { useState } from 'react'
import './App.css'
import AddCourse from '../Components/AddCourse'
import ViewCourse from '../Components/ViewCourse'

function App() {


  return (
    <>
  <div className="">
    <AddCourse/>
    <hr className="" />
    <ViewCourse/>

  </div>
    </>
  )
}

export default App
