import React from 'react';
import { Routes, Route } from "react-router-dom";
import Signin from './Pages/Signin';
import Anglais from './Pages/Anglais';
import Troll from './Pages/Troll';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Anglais" element={<Anglais />} />
        <Route path="/Troll" element={<Troll />} />
      </Routes>

    </div>
  );
};

export default App;