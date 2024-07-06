import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BluskiLogo from './components/bluskiLogo'
import MyNavbar from './components/myNavbar'
import MyFooter from './components/myFooter'
import BulletServices from './components/bulletServices';

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
        <BulletServices />
      </div>
      <div className="bottom-footer">
        <MyFooter />
      </div>
    </>
  )
}

export default App
