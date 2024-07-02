import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Show = () => {
    const [ captain, setCaptain] = useState(null);
    const { index } = useParams();
    const navigate = useNavigate();
    const API = process.env.REACT_APP_VITE_BASE_URL;

    const handleDelete = () => {
        fetch(`${API}/${index}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(navigate('/captains'))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(res => res.json())
            .then(res =>{
                setCaptain(res)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Link to ={`/captains`}>
                <button>Back</button>
            </Link>
            {captain &&
            <div>
              <h2>{captain.captainName}</h2>
              <h3>{captain.title}</h3>
              <p>{captain.post}</p>
              <p>{captain.mistakesWereMadeToday}</p>
              <p>{captain.daysSinceLastCrisis}</p>  
            </div>
            }
            <Link to={`/captains/${index}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Show;