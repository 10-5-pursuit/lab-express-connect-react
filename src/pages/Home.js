import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <h2>Welcome to the Captain's Log!</h2>
            <p>Captain's Log, also sometimes referred to as a ship's log, is a way for captains to keep records about a sailing journey. Captain's Logs have been used for thousands of years for captains to keep track of their trip's progress, maintenance issues, coordinates of things found at sea, weather conditions, and more.</p>
            <Link to="/logs">
                <button>GET STARTED</button>
            </Link>
        </div>
    )
}