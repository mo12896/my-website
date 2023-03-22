import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';


// Define your main component
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <Link to="home" smooth={true} duration={1000}>
            <h1 className="logo">Moritz Müller</h1>
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="projects" smooth={true} duration={1000} offset={-100}>Projects</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={1000} offset={-100}>About</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={1000}>Contact</Link>
            </li>
          </ul>
        </nav>
        <Element name="home">
          <HomePage />
        </Element>
        <Element name="projects">
          <ProjectsPage />
        </Element>
        <Element name="about">
          <AboutPage />
        </Element>
        <Element name="contact">
          <ContactPage />
        </Element>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



// Render your main component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

