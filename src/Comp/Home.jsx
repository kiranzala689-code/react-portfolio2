import React from 'react'
import { NavLink} from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="bg-dark wow animate__animated animate__bounce">
  <div className="container py-5 text-white">
    <div className="row align-items-center">

      <div className="col-12 col-lg-6">
        <div className="card bg-dark text-white border-0 p-3">
          <div className="card-body">

            <h1 className="card-title wow animate__animated animate__bounce">
              Hello, I'm <b className="text-primary fw-bold">KIRANSINH ZALA</b>
            </h1>

            <h3 className="card-subtitle mt-3">
              Creative <b className="text-primary">Web Developer |</b>
            </h3>

            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              <button className="btn btn-primary rounded-pill">
                 <NavLink className="nav-link btn" to="/Portfolio">VIew My Work</NavLink>
              </button>

              <button className="btn btn-outline-primary text-white rounded-pill">
                <NavLink className="nav-link btn" to="/Resume"> Get In Touch</NavLink>
              </button>
            </div>
   <div className='text-white  mt-5 ms-5 d-flex gap-4'>
  
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
   <h4> <i className="bi bi-twitter-x  text-white"></i></h4>
  </a>

  <a href="https://instagram.com" target="_blank" rel="noreferrer">
   <h4> <i className="bi bi-instagram text-white"></i></h4>
  </a>

  <a href="https://threads.net" target="_blank" rel="noreferrer">
  <h4>  <i className="bi bi-threads text-white"></i></h4>
  </a>

  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <h4><i className="bi bi-facebook text-white"></i></h4>
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
<h4>    <i className="bi bi-linkedin text-white"></i></h4>
  </a>

</div>

          </div>
        </div>
      </div>

      <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
        <img
          src="/kiranzzz.jpg"
          className="img-fluid rounded-3"
          style={{ maxHeight: "450px", objectFit: "cover" }}
          alt=""
        />
      </div>

    </div>
  </div>
</div>
</div>
  )
}

export default Home
