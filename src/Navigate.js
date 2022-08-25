import React, {useState} from 'react';
import Header from './components/Header';
import Home from './components/Pages/Home'
import Resume from './components/Pages/Resume';
import Contact from './components/Pages/Contact';
import AboutMe from './components/Pages/AboutMe';
import Portfolio from './components/Pages/Portfolio';


function Navigation() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home changePage={changePage}/>
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
    }

    const changePage = (page) => setCurrentPage(page);

    return(
        <div>
            <Header currentPage={currentPage} changePage={changePage}></Header>
            {renderPage()}
        </div>
    );
};

export default Navigation;