import React from 'react'

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <a className="navbar-brand" href="AddCourse/">Navbar</a>
        <a className="navbar-brand" href="/AddCourse">Add Course</a>
        <a className="navbar-brand" href="/AddCourse">View course</a>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </div>
    </nav>
  )
}


export default NavigationBar