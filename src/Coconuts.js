import React from "react";
import { Link } from "react-router-dom";

const Coconuts = () => {
    return (
        <div>
            <h1>Coconuts</h1>
            <img alt="some coconuts" src="https://images.heb.com/is/image/HEBGrocery/000375273" />
            <p>It's not too bad.</p>
            <p><Link exact to="/">Home</Link></p>
        </div>
    )
}

export default Coconuts;