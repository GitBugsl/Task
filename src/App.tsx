
import React from 'react';
import { BrowserRouter as Router, Route,  Routes, useParams } from 'react-router-dom';

import Home from './Component/Home';
import Category from './Component/Characters/[id]';
import CategoryDetail from './Component/Characters/CharacterDetail/[id]';
import Episode from './Component/Episode/[id]';
import Location from './Component/Location/[id]';
import Favorite from './Component/Favorite';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/character/:id" element={<Category ids={useParams().id!} />} />
        <Route path="/character/detail/:id" element={<CategoryDetail  idc={useParams().id!} iss={''} />} />
        <Route path="/favorite" element={<Favorite/>} />
        <Route path="/episode/:id" element={<Episode ids={useParams().id!} />} />
        <Route path="/location/:id" element={<Location ids={useParams().id!} />} />
      </Routes>
    </Router>
  );
};




export default App;
