import React from 'react'
import Navbar from './Comp/Navbar'
import './App.css'
// import Header from './Comp/Header'
import Footer from './Comp/Footer'
import About from './Comp/About'
import Resume from './Comp/Resume'
import Services from './Comp/Services'
import Contact from './Comp/Contact'
import Portfolio from './Comp/Portfolio'
import './Comp/Navbar.css'
import { Route ,Routes} from 'react-router-dom'
import Home from './Comp/Home'

function App() {
  

  return (
    <div className='wow animate__animated animate__fadeInUp'>
      <Navbar/>
      {/* <Header/> */}

      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
