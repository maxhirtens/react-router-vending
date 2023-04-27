import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
        <>
            <h1>Vending Machine</h1>
            <h3>Items In Stock</h3>
            <p><Link exact to="/powerbar">Powerbars</Link></p>
            <p><Link exact to="/coconuts">Coconuts</Link></p>
            <p><Link exact to="/frenchtoast">French Toast</Link></p>
        </>
    )
}

export default VendingMachine;