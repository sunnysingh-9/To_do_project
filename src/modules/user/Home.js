import React from "react";
import {  useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import "./Home.css";
// import {Register} from "../../modules/Register"

// import  "../assests"


const Home =() =>{
 const navigate = useNavigate();
   

    return(
        <>
        {/* <Navbar/> */}
        <div className="container">

            <div className="left">
                <img src="assets/left.jpg" alt="ladka" id="left"></img>
            </div>

            <div className="middle">
                <div className="image">
               <img src="assets/logo1.png" id="image" alt="logo"></img>
                </div>

                <h1 className="h1">TODO LIST</h1>
                <br/>

                <h4 className="h4">To do gives you focus , from work to play.</h4>
                <br/>

                <form>
                <button onClick={() => navigate("/Login")} className="button" > Get Started</button>
                </form>
       
            </div>
                <div className="right">
                <img src="assets/right.png" alt="ladki" id="right"></img>
                </div>    
            </div>
    
    
        </>

)
}
export default Home