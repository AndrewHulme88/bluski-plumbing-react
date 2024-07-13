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

      <div className="showcase">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>

        <Showcase />
      </div>
      <div className="bottom-footer">
        <MyFooter />
      </div>
    </Router>
  )
}

export default App
