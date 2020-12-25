import React from "react";
import "./App.css";

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://logomaster.ai/static/media/sample.c8bf2b04.svg"
                    alt="Rick"
                />
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div className="content">Main content</div>
        </div>
    );
};

export default App;
