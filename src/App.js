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
                  path="/real-react-portfolio"
                  element={<Home />}
                />
                <Route 
                  path="/real-react-portfolio/aboutMe"
                  element={<AboutMe />}
                />
                <Route 
                  path="/real-react-portfolio/resume"
                  element={<Resume />}
                />
                <Route 
                  path="/real-react-portfolio/contact"
                  element={<Contact />}
                />
                <Route 
                  path="/real-react-portfolio/portfolio"
                  element={<Portfolio />}
                />
              </Routes>
            </Router>
    </div>
    

  
  );
}

export default App;
