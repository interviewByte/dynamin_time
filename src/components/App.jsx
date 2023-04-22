import React from "react";
import { useState } from "react";

function App () {
    var now = new Date().toLocaleTimeString([], {hour12:false});
    const [time, setTime] = useState(now)

    function handelClick () {
        now = new Date().toLocaleTimeString([], {hour12:false});
        setTime(now);
    }
    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={handelClick}>Get Time</button>
        </div>
    )
}

export default App;