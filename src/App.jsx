import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/myNavbar'
import MyFooter from './components/myFooter'
import Showcase from './components/showcase';
import HomePage from './components/homePage';

function App() {

  return (
    <Router>
      <div className="top-header">
        <MyNavbar />
      </div>

      <div className="routes">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/showcase' element={<Showcase />} />
        </Routes>

      </div>
      <div className="bottom-footer">
        <MyFooter />
      </div>
    </Router>
  )
}

export default App
