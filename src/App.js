import React from "react";
import "./App.css";

const App = () => {
    return (
        <div>
            <Header />
            <Technologies />
        </div>
    );
};
const Technologies = () => {
    return (
        <div>
            <div>one dive</div>
            <div className="App">
                <ul>
                    <li>js</li>
                    <li>css</li>
                    <li>html</li>
                    <li>react</li>
                    <li>jsx</li>
                </ul>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <a href="#s">first project</a>
        </div>
    );
};

export default App;
