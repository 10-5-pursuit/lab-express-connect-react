import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [updatedLog, setUpdatedLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: "",
        daysSinceLastCrisis: ""
    })
    const navigate = useNavigate()
    const { index } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4001/logs/${index}`)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setUpdatedLog((prevState) => res)
            })
            .catch(err => console.log(err))
    }, [index])

    const handleChange = (e) => {
        setUpdatedLog((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleCheckbox = (e) => {
        setUpdatedLog((prevState) => {
            const oppositeVal = !updatedLog.mistakesWereMadeToday
            return { ...prevState, mistakesWereMadeToday: oppositeVal }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:4001/logs/${index}`, {
            method: "PUT",
            body: JSON.stringify(updatedLog),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                navigate(`/logs/${index}`)
            })
            .catch(err => { console.log(err) })
    }






    if (!updatedLog) return (<div>Loading...</div>)
    return (
        <>
            <h1>Edit</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Edit This Log</legend>
                    <input
                        type="text"
                        placeholder='Captain Name'
                        name='captainName'
                        value={updatedLog.captainName}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder='Title'
                        name='title'
                        value={updatedLog.title}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder='Post Description'
                        name='post'
                        value={updatedLog.post}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="checkbox"
                        id='mistakes'
                        checked={updatedLog.mistakesWereMadeToday}
                        onChange={handleCheckbox}
                    />
                    <label htmlFor="mistakes">Were There Mistakes Made Today?</label>
                    <br />
                    <input
                        type="number"
                        placeholder='# of Days Since Last Crisis'
                        name='daysSinceLastCrisis'
                        value={updatedLog.daysSinceLastCrisis}
                        onChange={handleChange}
                    />
                    <br />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
            <Link to={`/logs/${index}`}>
                <button>
                    Back
                </button>
            </Link>
        </>
    )
}

export default Edit