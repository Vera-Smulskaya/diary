import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import NotesPage from "../pages/notes/NotesPage";
import NotePage from "../pages/note/NotePage";
import CreateNotePage from "../pages/create/CreateNotePage";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/notes/:id" element={<NotePage />} />
            <Route path="/notes/create" element={<CreateNotePage />} />
        </Routes>
    );
}
