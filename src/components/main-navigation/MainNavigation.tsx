import { Link } from "react-router-dom";

export default function MainNavigation() {
    return (
        <ul className="flex">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/create">Create</Link>
            </li>
            <li>
                <Link to="/notes">Notes</Link>
            </li>
        </ul>
    );
}
