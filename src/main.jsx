import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer.jsx";

export default function Main() {
    return (
        <div >
            <Header  />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
