import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BluskiLogo from './components/bluskiLogo'
import MyNavbar from './components/myNavbar'

function App() {

  return (
    <>
      <div className="top-header">
        <MyNavbar />
      </div>
      <div className="top-logo">
        <BluskiLogo />
      </div>
      <div className="bullet-services">
        <ul>
          <li>Maintenance & Repairs</li>
          <li>Roofing Repairs & Leaks</li>
          <li>Hot & Cold Services</li>
          <li>Blocked/Burst Pipes</li>
          <li>Bathroom & Kitchen Renos</li>
          <li>Gas Fitting</li>
          <li>And More!!</li>
        </ul>
      </div>
    </>
  )
}

export default App
