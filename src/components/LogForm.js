import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API;

export default function LogForm() {
    const index = useParams().index || "new form";
    const navigate = useNavigate();

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    });

    // On page load, fill in the form with the bookmark data.
useEffect(() => {
  fetch(`${API}/logs/${index}`)
  .then((response) => {
      return response.json();
  })
  .then((responseJSON) => {
    if (index !== "new form")
      setLog(responseJSON);
  })
  .catch((error) => {
      console.error(error)
  });
}, [index]);

    // Add a bookmark, return to the index view
    const addLog = () => {
    fetch(`${API}/logs`, {
      method: "POST",
      body: JSON.stringify(log),
      headers: {"Content-Type": "application/json"}
    })
    .then(() => {
        navigate(`/logs`);
    })
    .catch((error) => console.error("catch", error));
  };

   // Update a log. Redirect to show view
   const updateLog = () => {
    fetch(`${API}/logs/${index}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(log)
    })
    .then(() => {
      navigate(`/logs/${index}`);
    })
    .catch((error) => console.error("bad edit form", error));
  };

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(validateInput())
      index === "new form" ? addLog() : updateLog();
  };

  const validateInput = () => {
    const { captainName, title, post } = log;
    return captainName && title && post;
  }

  return (
    <form className="New" onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name
            <input className="text-input" id="captainName" type="text" value={log.captainName} onChange={handleTextChange} required /> </label>
 
        <label htmlFor="title">Title
            <input className="text-input" id="title" type="text" value={log.title} onChange={handleTextChange} required /> </label>

        <label htmlFor="post">Post</label>
        <textarea className="text-input" value={log.post} onChange={handleTextChange} id="post"></textarea>
            
        <label htmlFor="daysSinceLastCrisis"> 
            <input id="daysSinceLastCrisis" type="number" value={log.daysSinceLastCrisis} onChange={handleTextChange} required /> 
            days since last crisis </label> <br/>

        <input className="checkbox" id="mistakesWereMadeToday" type="checkbox" value={log.mistakesWereMadeToday} onChange={handleCheckboxChange}/>
        <label htmlFor="mistakesWereMadeToday" className="checkbox-label">Mistakes were made today </label>

        <button id="submit" className="fa-regular fa-pen-to-square" onClick={handleSubmit}/>
    </form>
  )
}