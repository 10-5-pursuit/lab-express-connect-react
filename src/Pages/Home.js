import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [ captains, setCaptains ] = useState([]);
    const API = process.env.REACT_APP_VITE_BASE_URL;

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(res => {
                setCaptains(res)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            { captains.map((captain, i) => {
                return (
                    <div key={i}>
                        <Link to={`/captains/${i}`}>{captain.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;