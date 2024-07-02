import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './Pages/NavBar'
import Home from './Pages/Home'
import Show from './Components/Show'
import New from './Components/New'
import Edit from './Components/Edit'

function App() {
  return (
    <div>
       <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to ="/captains" replace/>}/>
          <Route path="/captains" element={<Home />}/>
          <Route path="/captains/new" element={<New />}/>
          <Route path="/captains/:index" element={<Show />}/>
          <Route path="/captains/:index/edit" element={<Edit />}/>
        </Routes>
    </div>
)}

export default App;
