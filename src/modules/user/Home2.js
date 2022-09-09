import React from "react";
import {useNavigate} from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import "./Home2.css";
// import {Register} from "../../modules/Register"
import {NavLink} from "react-router-dom";
import Personal from "../../work/personal/Personal";
// import  "../assests"
// import './Menu';
// import Menu from "./Menu";
// import Menu from "./Menu";


const Home2 =() =>{
 const navigate = useNavigate();
   

    return(
        <>
        <div>
            


            <div className='main'>
                

                <div className="left">
                    <ul> 
                        <li> <input type="text" placeholder='Profile' className='profile'/></li> <br/>
                        <li><NavLink to ="../../work/personal" > Personal </NavLink> </li>
                        <li><NavLink to ="../../work/professional" > Proffessional </NavLink> </li>
                        {/* <li> <a href="/"> Work</a> </li> */}
                    </ul>
                </div>
                

                <div className="right">
                     <div>
                        <ul> 
                            <li className="part1">
                                <img src="assets/logo1.png" id="imageH" alt="logo"></img> <br />
                                <h1 className="h1">TODO LIST</h1> 
                                <h4 className="h4">To do gives you focus , from work to play.</h4>  <br />
                                <h1 className="welcome">Welcome</h1>  

                            </li>
                            <li className="part2">
                                <img src="assets/right.png" alt="ladki" id="righth"></img>       

                            </li>
                        </ul>

                     </div>
                    </div>
                </div>

            </div>
        
        
        {/* <Navbar/> */}
        {/* <div className="containerh"> */}

            {/* <div className="left">
                <img src="assets/left.jpg" alt="ladka" id="lefth"></img>
            </div> */}
            {/* <div className="lefth">
            <Menu></Menu>
            </div>

            <div className="middleh">
                <div className="image">
               <img src="assets/logo1.png" id="himage" alt="logo"></img>
                </div>

                <h1 className="h1">TODO LIST</h1>
                <br/>

                <h4 className="h4">To do gives you focus , from work to play.</h4>
                <br/>

                <div className="welcome">
                    <h1>Welcome</h1>
                </div>
       
            </div>
                <div className="right">
                <img src="assets/right.png" alt="ladki" id="righth"></img>
                </div>    
            </div> */}
            {/* <Menu></Menu> */}
             
    
    
        </>

)
}
export default Home2