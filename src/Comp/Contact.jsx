import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'

function Contact() {
  return (
    <div>
  {/* <Navbar/> */}
      <div className="container  mt-5 text-white wow animate__animated animate__fadeInUp">
        <h1 className='text-center text-white mt-4 mb-3'>Contact</h1>
        <h5 className='p-5 text-secondary'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</h5>
        <div className="row g-4">

          <div className="col-md-5 col-12 rounded mb-2">
            <div className="bg-dark text-white p-5 text-center rounded">
              <h1>Contact Info</h1>
              <p className='text-start text-secondary p-2'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>
              <div className="d-flex gap-2">
                <div><h3 ><i class="bi bi-geo-alt-fill"></i></h3></div>
                <div>
                  <h4 className='ps-3 text-start'>Our Location</h4>
                  <h6 className='pe-5 ps-3 text-start text-secondary'>A108 Adam Street
                    New York, NY 535022</h6>
                </div>
              </div>
              <div className="d-flex gap-2 mt-3">
                <div><h3 ><i class="bi bi-telephone"></i></h3></div>
                <div>
                  <h4 className='ps-3 text-start'>Phone Number</h4>
                  <h6 className='pe-5 ps-3 text-start text-secondary'>
                    +91 9328970369</h6>
                  <p className='pe-5 ps-3 text-start text-secondary'>+91 8469459176</p>
                </div>
              </div>
              
              <div className="d-flex gap-2 mt-3">
                <div><h3><i class="bi bi-envelope-check-fill"></i></h3></div>
                <div>
                  <h4 className='ps-3 text-start'>Email Address</h4>
                  <h6 className='pe-5 ps-3 text-start text-secondary'>kiranzala689@gmail.com</h6>
                  <p className='pe-5 ps-3 text-start text-secondary'>kiranz@gmail.com</p>
                </div>
              </div>




            </div>
          </div>

          <div className="col-md-7 col-12 mb-5">
            <div className="bg-dark text-white p-5 text-start rounded mb-2">
              <h1 className=' mb-3'>Get in Touch</h1>
              <p className="mt-2 text-secondary">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>
              <form className="bg-dark text-white p-4 rounded">

                <div className="row g-3">
                  <div className="col-md-6 col-12">
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="col-md-6 col-12">
                    <input
                      type="email"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Subject"
                  />
                </div>

                <div className="mt-3">
                  <textarea
                    rows="5"
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="text-center mt-4">
                  <button className="btn btn-primary px-4">Send Message</button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Contact
