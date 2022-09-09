import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";



const Navbar =() =>{
const navigate = useNavigate();

    return(
        <>
            <nav className="main-nav">
                <div className="logo">
                   <h2> <span>T</span>o<span>D</span>o<span>L</span>IST</h2> 
                </div>

                <div className="nav-menu">
                    <ul>
                        <li> <NavLink to ="/Home"  > Home  </NavLink> </li>
                        <li> <NavLink to ="/About" > About </NavLink> </li>
                        <li> <NavLink to ="/Contact" > Contact </NavLink> </li>
                        {/* <li> <a href="/"> Home</a> </li> */}
                        {/* <li> <a href="/"> About</a> </li> */}
                        {/* <li> <a href="/"> Contact</a> </li> */}
                    </ul>
                </div>
                

                <div className="signin">
                    <ul>
                        
                        <li>
                            <form action="/Login">
                            <button id="log-in" onClick={() => navigate("/Login")} >Log In</button>
                            </form>

                            </li>

                        <li>
                            <form action="/Register">
                            <button id="sign-in" onClick={() => navigate("/Register")} >Sign In</button>
                            </form>

                            </li>
                    </ul>
                   
                    
                </div>
            </nav>
            
        </>
    )
}

export default Navbar