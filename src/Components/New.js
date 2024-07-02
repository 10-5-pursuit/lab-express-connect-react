import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const New = () => {
    const navigate = useNavigate();
    const [newCaptain, setNewCaptain] = useState({
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: "",
        mistakesWereMadeToday: false,
    });

    const API = process.env.REACT_APP_VITE_BASE_URL;

    const handleChange = (e) => {
        setNewCaptain((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value};
        });
    };

    const handleCheckBox = (e) => {
        setNewCaptain((prevState) => {
            const mistakesMade = !newCaptain.mistakesWereMadeToday;

            return{ ...prevState, mistakesWereMadeToday: mistakesMade};
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(API, {
            method: "POST",
            body: JSON.stringify(newCaptain),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(navigate("/captains"))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>New Captain</legend>
                <input
                    type="text"
                    placeholder="Captain Name"
                    name="captainName"
                    value={newCaptain.captainName}
                    onChange={handleChange}
                />
                <br />
                <input 
                    type="text"
                    placeholder="Captain Title"
                    name="title"
                    value={newCaptain.title}
                    onChange={handleChange}
                />
                <br />
                <input 
                    type="text"
                    placeholder="Post"
                    name="post"
                    value={newCaptain.post}
                    onChange={handleChange}
                />
                <br />
                <input 
                    type="checkbox"
                    id="mistakes"
                    checked={newCaptain.mistakesWereMadeToday}
                    onChange={handleCheckBox}
                />
                <label htmlFor="mistake">Mistakes?</label>
                <br />
                <input
                    type="number"
                    placeholer="Days Since Last Crisis"
                    name="daysSinceLastCrisis"
                    value={newCaptain.daysSinceLastCrisis}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    )
}

export default New;