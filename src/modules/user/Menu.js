import React from 'react';
import './Menu.css';
// import fontawesone
import { NavLink} from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    return (
        <div>
            


            <div className='main'>
                

                <div className="left">
                    <ul> 
                        <li> <input type="text" placeholder='Profile' className='profile'/></li> <br/>
                        <li> <NavLink to ="/Personal" > Personal </NavLink> </li>
                        <li> <NavLink to ="/Work" > Professional </NavLink> </li>
                        {/* <li> <a href="/"> Personal</a> </li>
                        <li> <a href="/"> Work</a> </li> */}
                    </ul>
                </div>
                

                <div className="right"></div>

            </div>
        </div>
    
    );
};

export default Menu;