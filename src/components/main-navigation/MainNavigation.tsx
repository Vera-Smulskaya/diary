import { Link } from "react-router-dom";

export default function MainNavigation() {
    return (
        <ul className="flex justify-around w-full max-w-6xl mx-auto py-6 text-xl">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/notes/create">Create</Link>
            </li>
            <li>
                <Link to="/notes">Notes</Link>
            </li>
        </ul>
    );
}
