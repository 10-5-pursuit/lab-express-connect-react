import React from 'react';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Index from './components/Index'
import Show from './components/Show'
import New from './components/New'
import Edit from './components/Edit'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/logs" element={<Index/>}/>
        <Route path="/logs/new" element={<New/>}/>
        <Route path="/logs/:index" element={<Show/>}/>
        <Route path="/logs/:index/edit" element={<Edit/>}/>

      </Routes>
    </div>
  );
};

export default App;
