import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home-page/HomePage';
import AboutPage from '../pages/about-page/AboutPage';
import NotesPage from '../pages/notes-page/NotesPage';
import NotePage from '../pages/note-page/NotePage';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/notes/:id" element={<NotePage />} />
        </Routes>
    );
}