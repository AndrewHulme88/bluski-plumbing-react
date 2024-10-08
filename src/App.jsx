import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MyNavbar from './components/myNavbar'
import Showcase from './components/showcase';
import HomePage from './components/homePage';
import FooterBootstrap from './components/footerBootstrap';
import Credentials from './components/credentials';

function App() {

  return (
    <Router>
      <div id="root">
        <div className="top-header">
          <MyNavbar />
        </div>

        <div className="routes">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/showcase' element={<Showcase />} />
            <Route path='/credentials' element={<Credentials />} />
          </Routes>
        </div>
      </div>
      <div className="bottom-footer">
        <FooterBootstrap />
      </div>
    </Router>
  )
}

export default App
