import { useParams, Link, useNavigate } from 'react-router-dom';
import React from 'react'; 

const LogDetails = ({ logs }) => {
  const { index } = useParams();
  const log = logs[index];
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/logs/${index}`, {
        method: 'DELETE',
      });
      navigate('/logs');
    } catch (error) {
      console.error('Error deleting log:', error);
    }
  };

  if (!log) {
    return <div>Loading...</div>;
  }

  return (
    <div className='log-details'>
      <h2>{log.title}</h2>
      <p>
        <strong>Captain:</strong> {log.captainName}
      </p>
      <p>{log.post}</p>
      <p>
        <strong>Mistakes Were Made:</strong>{' '}
        {log.mistakesWereMadeToday ? 'Yes' : 'No'}
      </p>
      <p>
        <strong>Days Since Last Crisis:</strong> {log.daysSinceLastCrisis}
      </p>
      <div className='button-group'>
        <Link to={`/logs`} className='back-button'>
          Back
        </Link>
        <button onClick={handleDelete} className='delete-button'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default LogDetails;
