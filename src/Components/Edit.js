import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const API = process.env.REACT_APP_VITE_BASE_URL;
    const [captain, setCaptain] = useState({
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: "",
        mistakesWereMadeToday: false
    });
    const navigate = useNavigate();
    const { index } = useParams();

    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(res => res.json())
            .then(res => {
                setCaptain(() => res)
            })
            .catch(err => console.log(err))
    }, [index]);

    const handleChange = (e) => {
        setCaptain((prevState) => {
           return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    const handleCheckBox = (e) => {
        setCaptain((prevState) => {
            const mistakesMade = !captain.mistakesWereMadeToday;
            
            return{ ...prevState, mistakeWereMadeToday: mistakesMade};
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`${API}/${index}`, {
            method: "PUT",
            body: JSON.stringify(captain),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(navigate(`/captains/${index}`))
            .catch(err => console.log(err))
    };

    if(!captain) return <div>Loading...</div>
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Make Changes</legend>
                    <input
                        type="text"
                        placeholder="Captain Name"
                        name="captainName"
                        value={captain.captainName}
                        onChange={handleChange}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Captain Title"
                        name="title"
                        value={captain.title}
                        onChange={handleChange}
                        />
                    <br />
                    <input 
                        type="text"
                        placeholder="Post"
                        name="post"
                        value={captain.post}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="checkbox"
                        id="mistakes"
                        checked={captain.mistakesWereMadeToday}
                        onChange={handleCheckBox}
                    />
                    <label htmlFor="mistake">Mistakes</label>
                    <br />
                    <input
                        type="number"
                        placeholder="Days Since Last Crisis"
                        value={captain.daysSinceLastCrisis}
                        onChange={handleChange}
                    />
                    <br />
                    <input type="submit" value="Submit" />
             </fieldset>
         </form>
            <Link to={`/captains/${index}`}>
                <button>Back</button>
            </Link>
    </div>
    )
}

export default Edit;