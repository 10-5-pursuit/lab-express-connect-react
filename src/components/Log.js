import { Link } from "react-router-dom";

export default function Log({ log, index }) {
    return (
        <tr>
          <td id="mistake">
            {log.mistakesWereMadeToday ? (
              <span>💣</span>
            ) : (
              <span>✅</span>
            )}
          </td>
          <td>
            {log.captainName}
          </td>
          <td>
            <Link to={`/logs/${index}`}>{log.title}</Link>
          </td>
        </tr>
      );
}