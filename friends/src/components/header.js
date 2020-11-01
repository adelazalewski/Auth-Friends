import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
return(
    
    <header>
        <h1>F<span className="brown">.</span>R<span className="yellow">.</span>I<span className="blue">.</span>E<span className="brown">.</span>N<span className="blue">.</span>D<span className="yellow">.</span>S</h1>
        <Link className="login-link" to="/login">Login</Link>
        {/* <Link className="login-link" to="/homepage">Friends Home Page</Link> */}
    </header>
    
)
}