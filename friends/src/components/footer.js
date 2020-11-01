import React from "react";
import image from "../sofa.png";

export default function Footer() {
    return(
        <footer>
            <img alt="couch" src={image} />
            <h2>New York, NY</h2>
        </footer>
    )
}