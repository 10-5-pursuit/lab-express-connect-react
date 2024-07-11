import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'; 

const LogForm = ({ setLogs }) => {
  const [formData, setFormData] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/logs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newLog = await response.json();
        setLogs((prevLogs) => [...prevLogs, newLog]);
        navigate('/logs');
      } else {
        console.error('Error creating log:', response.status);
      }
    } catch (error) {
      console.error('Error creating log:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='log-form'>
      <h2>New Captain's Log</h2>
      <div className='form-group'>
        <label htmlFor='captainName'>Captain's Name:</label>
        <input
          type='text'
          id='captainName'
          name='captainName'
          value={formData.captainName}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='post'>Log Entry:</label>
        <textarea
          id='post'
          name='post'
          value={formData.post}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='checkbox'
          id='mistakesWereMadeToday'
          name='mistakesWereMadeToday'
          checked={formData.mistakesWereMadeToday}
          onChange={handleChange}
        />
        <label htmlFor='mistakesWereMadeToday'>Mistakes Were Made Today</label>
      </div>
      <div className='form-group'>
        <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis:</label>
        <input
          type='number'
          id='daysSinceLastCrisis'
          name='daysSinceLastCrisis'
          value={formData.daysSinceLastCrisis}
          onChange={handleChange}
          required
        />
      </div>
      <button type='submit' className='submit-button'>
        Create Log
      </button>
    </form>
  );
};

export default LogForm;
