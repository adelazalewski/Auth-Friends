import React from "react";
import { Link } from "react-router-dom";
//REDUX
import {connect} from "react-redux";
import {clearStorage} from "../actions/actions";

 function Header(props) {
    
    //console.log("header props: ", props)
return(
    
    <header>
        <h1>F<span className="brown">.</span>R<span className="yellow">.</span>I<span className="blue">.</span>E<span className="brown">.</span>N<span className="blue">.</span>D<span className="yellow">.</span>S</h1>
        <nav>
        
        <Link className="login-link" to="/homepage">Friends Home Page</Link>
        {props.loggedin  ? <Link className="login-link" onClick={(e)=>props.clearStorage(e)} to="/login">LogOut</Link> : <Link className="login-link" to="/login">Login</Link>}
        </nav>
    </header>
    
)
}
const mapStateToProps = (state) => {
    return{
        loggedin: state.loggedin
    }
};
export default connect(mapStateToProps, {clearStorage})(Header);