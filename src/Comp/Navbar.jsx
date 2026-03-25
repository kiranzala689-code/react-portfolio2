import React from 'react'
// import About from './About'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid d-flex justify-content-between">

    
    <a className="navbar-brand" href="#">
      Navbar
    </a>

 
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse justify-content-evenly" id="navbarNav">
     <ul className="navbar-nav">
  <li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/About">About</NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/Resume">Resume</NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/Services">Services</NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/Portfolio">Portfolio</NavLink>
  </li>
</ul>
       <div className='text-white mt-2 d-flex gap-4'>
        <p> <i class="bi bi-twitter-x "></i></p>
        <p><i class="bi bi-instagram"></i></p>
        <p><i class="bi bi-threads"></i></p>
        <p><i class="bi bi-facebook"></i></p>
        <p><i class="bi bi-linkedin"></i></p>
       </div>
    </div>

  </div>
</nav>

    </div>
  )
}

export default Navbar




// export default Navbar

// import React from 'react'
// import { Link } from 'react-router-dom'
// function Navbar() {
//   return (
//     <div>
//      <Link to="/">header</Link>
//      <Link to="section">section</Link>
//     </div>
//   )
// }

// export default Navbar
