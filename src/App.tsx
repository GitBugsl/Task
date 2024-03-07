
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

import Characters from './Component/Characters';
import Home from './Component/Home';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<Characters/>} />
      </Routes>
    </Router>
  );
};

export default App;
