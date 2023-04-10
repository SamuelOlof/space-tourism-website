import  React, { useState } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './App.scss';
import { Menu } from './components';
import { images } from './constants';


function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className='app__menu'>
        <div className='app__menu-logo'>
          <img src={images.logo} alt="Space tourism logo" />
        </div>

        <div className='app__menu-hamburger'>
          <img src={images.iconHamburger} alt="" onClick={() => setToggle(true)} />
        </div>

        {toggle &&(
            <motion.div 
                whileInView = {{ x: [300,0]}}
                transition = {{duration: 0.85, ease: 'ease-out'}}
            >
              <div className='app__menu-container'>
                <div className='app__menu-close'>
                  <img src={images.iconClose} alt="" onClick={() => setToggle(false)} />
                </div>

                <ul className='app__menu-links'>
                  <li>
                    <Link className='link' to="/" onClick={() => setToggle(false)}><span>00  </span> Home </Link>
                  </li>

                  <li>
                    <Link className='link' to="/destination" onClick={() => setToggle(false) }><span>01  </span> Destination </Link>
                  </li>

                  <li>
                    <Link className='link' to="/crew" onClick={() => setToggle(false) }><span>02 </span> Crew </Link>
                  </li>

                  <li>
                    <Link className='link' to="/technology" onClick={() => setToggle(false) }><span>03 </span> Technology </Link>
                  </li>
                </ul>   
              </div>  
            </motion.div> 
        )}

        <div className='app__menu-navbar-container'>
          <div className='app__menu-navbar-line'></div>
          <ul className='app__menu-navbar-links'>
            <li>
              <Link className='link' to="/"> Home </Link>
            </li>

            <li>
              <Link className='link' to="/destination"> Destination </Link>
            </li>

            <li>
              <Link className='link' to="/crew"> Crew </Link>
            </li>

            <li>
              <Link className='link' to="/technology"> Technology </Link>
            </li>
          </ul>
        </div>

      </nav>

      
      <Menu/>
    </>

  );
}

export default App;
