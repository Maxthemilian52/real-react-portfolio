import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Pages/Home'
import Resume from './components/Pages/Resume';
import Contact from './components/Pages/Contact';
import AboutMe from './components/Pages/AboutMe';
import Portfolio from './components/Pages/Portfolio';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
              <Routes>
                <Route 
                  path="/"
                  element={<Home />}
                />
                <Route 
                  path="/aboutMe"
                  element={<AboutMe />}
                />
                <Route 
                  path="/resume"
                  element={<Resume />}
                />
                <Route 
                  path="/contact"
                  element={<Contact />}
                />
                <Route 
                  path="/portfolio"
                  element={<Portfolio />}
                />
              </Routes>
            </Router>
    </div>
    

  
  );
}

export default App;
