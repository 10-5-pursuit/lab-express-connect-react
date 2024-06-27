import { useState, useEffect } from "react";
import Log from "./Log";

const API = "http://localhost:8888";

export default function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetch(`${API}/logs`)
          .then((response) => {
            return response.json();
          })
          .then((responseJSON) => setLogs(responseJSON))
          .catch((error) => console.error(error));
      }, []);
    
    return (
        <table className="logs">
            <thead>
            <tr>
                <th>Mistakes</th>
                <th>Captain Name</th>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>
            {logs.map((log, index) => {
                return <Log key={index} log={log} index={index} />;
            })}
            </tbody>
        </table>
    );
}