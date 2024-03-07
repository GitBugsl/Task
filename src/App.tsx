
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

import Characters from './Component/Characters';
import Home from './Component/Home';
import Category from './Component/Category';
import Episode from './Component/Episode';
import Location from './Component/Location';
import Favorite from './Component/Favorite';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/favorite" element={<Favorite/>} />
        <Route path="/episode" element={<Episode/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/characters" element={<Characters/>} />
      </Routes>
    </Router>
  );
};

export default App;
