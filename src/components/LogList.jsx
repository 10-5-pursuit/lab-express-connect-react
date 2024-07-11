import { Link } from 'react-router-dom';
import React from 'react'; 

const LogList = ({ logs }) => {
  return (
    <div className='log-list'>
      <h2>Captain's Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <Link to={`/logs/${index}`}>{log.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogList;
