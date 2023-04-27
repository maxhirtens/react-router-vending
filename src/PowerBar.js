import React from "react";
import { Link } from "react-router-dom";

const PowerBar = () => {
    return (
        <div>
            <h1>Power Bar</h1>
            <img alt="a power bar" src="https://images.freshop.com/00097421030044/ab2346ba70053da5ae06db903d338ade_large.png" />
            <p>It's just OK.</p>
            <p><Link exact to="/">Home</Link></p>
        </div>
    )
}

export default PowerBar;