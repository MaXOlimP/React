import React from "react";
import "./App.css";

const App = () => {
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
            <Next />
        </div>
    );
};

const Next = () => {
    return (
        <div className="Next">
            <ul>
                <li> head</li>
            </ul>
        </div>
    );
};
export default App;
