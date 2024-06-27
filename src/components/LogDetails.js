import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API;

export default function LogDetails() {
    const [log, setLog] = useState({});
    const navigate = useNavigate();
    const { index } = useParams();

    // On page load, load log details
    useEffect(() => {
    fetch(`${API}/logs/${index}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setLog(responseJSON);
      })
      .catch(() => {
        navigate("/not-found");
      });
    }, []);

    // Be able to delete a color. Return to index view.
    const handleDelete = () => {
    fetch(`${API}/logs/${index}`, { method: "DELETE" })
      .then(() => {
        navigate(`/logs`);
      })
      .catch((error) => console.error(error));
    };

    return (
        <>
            <article className="details">
                <h2>{`${log.title} - By ${log.captainName}`}</h2>
                <p className="post">{log.post}</p>
                <p><b>Days since last crisis: </b>{log.daysSinceLastCrisis}</p>
            </article>
            <div className="navigation">
                <Link to={"/logs"}>Back</Link>
                <Link to={`/logs/${index}/edit`}>Edit</Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}