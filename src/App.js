import React from "react";
import "./App.css";

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://www.sativa-poland.pl/assets/images/sativapoland-logo-1-1-298x256.png"
                    alt="Sativa"
                />
            </header>
            <nav className="nav">
                <div>
                    <a href="#s">Profile</a>
                </div>
                <div>
                    <a href="#s">Messages</a>
                </div>
                <div>
                    <a href="#s">News</a>
                </div>
                <div>
                    <a href="#s">Music</a>
                </div>
                <div>
                    <a href="#s">Settings</a>
                </div>
            </nav>
            <div className="content">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzG54ww1YZLKXoOuClJvRIK_VA9TtrjS0hsQ&usqp=CAU://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtzxDlnPTqkDlriVgoJm_EklsAe1uxEjrWA&usqp=CAU://ppcdn.500px.org/1794879/9d80693271620c05ff63610ece497b6659f7d6f3/4.jpg"
                    alt=" India v Sativa v Hybrid"
                />
            </div>
        </div>
    );
};

export default App;
