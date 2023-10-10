import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import Header from "./components/header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <MainRoutes />
        </BrowserRouter>
    );
}

export default App;
