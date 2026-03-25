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
                 <NavLink className="nav-link" to="/Portfolio">VIew My Work</NavLink>
              </button>

              <button className="btn btn-outline-primary text-white rounded-pill">
                <NavLink className="nav-link" to="/Resume"> Get In Touch</NavLink>
              </button>
            </div>

            <div className="d-flex gap-4 mt-4 fs-5">
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-threads"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
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
