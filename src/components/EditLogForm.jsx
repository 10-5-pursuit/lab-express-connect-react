import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react'; 

const EditLogForm = ({ logs, setLogs }) => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  useEffect(() => {
    if (logs.length > 0) {
      setFormData(logs[index]);
    }
  }, [logs, index]);

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
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/logs/${index}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const updatedLog = await response.json();
        const updatedLogs = [...logs];
        updatedLogs[index] = updatedLog;
        setLogs(updatedLogs);
        navigate(`/logs/${index}`);
      } else {
        console.error('Error updating log:', response.status);
      }
    } catch (error) {
      console.error('Error updating log:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='log-form'>
      <h2>Edit Captain's Log</h2>
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
        Update Log
      </button>
    </form>
  );
};

export default EditLogForm;
