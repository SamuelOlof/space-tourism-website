import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Crew, Destination, Technology  } from '../../pages';

const Menu = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}

export default Menu