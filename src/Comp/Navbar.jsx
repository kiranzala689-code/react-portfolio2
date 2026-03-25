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
       <div className='text-white  mt-2 d-flex gap-4'>
  
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <i className="bi bi-twitter-x text-white"></i>
  </a>

  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <i className="bi bi-instagram text-white"></i>
  </a>

  <a href="https://threads.net" target="_blank" rel="noreferrer">
    <i className="bi bi-threads text-white"></i>
  </a>

  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <i className="bi bi-facebook text-white"></i>
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
    <i className="bi bi-linkedin text-white"></i>
  </a>

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
