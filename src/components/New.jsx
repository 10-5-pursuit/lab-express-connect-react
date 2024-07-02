import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const New = () => {
    const navigate = useNavigate()
    const [newLog, setNewLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    })
    // const API = import.meta.env.VITE_BASE_URL 

    const handleChange = (e) => {
        setNewLog((prevState)=> {
            return {...prevState,[e.target.name]: e.target.value }
        })
    }

    const handleCheckbox = (e) => {
        setNewLog((prevState)=> {
            const oppositeVal = !newLog.mistakesWereMadeToday
            return {...prevState, mistakesWereMadeToday: oppositeVal }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:4001/logs", {
            method: "POST",
            body: JSON.stringify(newLog),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            navigate("/logs")
        })
        .catch(err =>{console.log(err)})
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>New Log</legend>
                <input 
                type="text"
                placeholder='Captain Name' 
                name='captainName'
                value={newLog.captainName}
                onChange={handleChange}
                />
                <br />
                <input 
                type="text"
                placeholder='Title' 
                name='title'
                value={newLog.title}
                onChange={handleChange}
                />
                <br />
                <input 
                type="text"
                placeholder='Post Description' 
                name='post'
                value={newLog.post}
                onChange={handleChange}
                />
                <br />
                <input 
                type="checkbox"
                id='mistakes'
                checked={newLog.mistakesWereMadeToday}
                onChange={handleCheckbox}
                />
                <label htmlFor="mistakes">Were There Mistakes Made Today?</label>
                <br />
                <input 
                type="number"
                placeholder='# of Days Since Last Crisis' 
                name='daysSinceLastCrisis'
                value={newLog.daysSinceLastCrisis}
                onChange={handleChange}
                />
                <input type="submit" value="Submit" />
            </fieldset>
        </form>
    )
}

export default New