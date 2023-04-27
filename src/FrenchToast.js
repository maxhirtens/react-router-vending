import React from "react";
import { Link } from "react-router-dom";

const FrenchToast = () => {
    return (
        <div>
            <h1>French Toast</h1>
            <img alt="french toast" src="https://www.simplyrecipes.com/thmb/b48moNCTtaUYEc1Qyxhe9V66XKc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-French-Toast-Lead-Shot-3b-c3a68a576a9548f5bd43cce3d2d7f4b7.jpg" />
            <p>Now we're talking!</p>
            <p><Link exact to="/">Home</Link></p>
        </div>
    )
}

export default FrenchToast;