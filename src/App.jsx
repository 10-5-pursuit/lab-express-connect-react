import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import NavBar from './components/NavBar';
import LogList from './components/LogList';
import LogDetails from './components/LogDetails';
import LogForm from './components/LogForm';
import EditLogForm from './components/EditLogForm';

function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/logs`);
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<LogList logs={logs} />} />
        <Route path='/logs' element={<LogList logs={logs} />} />
        <Route path='/logs/:index' element={<LogDetails logs={logs} />} />
        <Route path='/logs/new' element={<LogForm setLogs={setLogs} />} />
        <Route
          path='/logs/:index/edit'
          element={<EditLogForm logs={logs} setLogs={setLogs} />}
        />
      </Routes>
    </div>
  );
}

export default App;
