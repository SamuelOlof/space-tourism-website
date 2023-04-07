import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Home, Crew, Destination, Technology  } from './pages';


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}

export default App;
