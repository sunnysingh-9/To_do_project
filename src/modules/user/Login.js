import './Login.css'
import {useState, useRef } from 'react';
import { API_CLIENT } from '../../shared/services/api-client';
import {NavLink} from "react-router-dom"
import {useNavigate} from 'react-router-dom';
import Google from './Google';
import  Home2 from './Home2';


 export const Login = ()=>{
    
   const navigate = useNavigate();
   const history = useNavigate();

    const [msg,setMsg] =useState('');
    const userid = useRef('');
    const pwd = useRef('');

//  navigate('/yourstodo/id)
    const doLogin = async (e)=>{
        e.preventDefault();
        const uid = userid.current.value;
        const password= pwd.current.value;

        const userObject = {'userid':uid, 'password':password};
        console.log('UserObject is ', userObject);
        try{
        const result = await API_CLIENT.post(process.env.REACT_APP_LOGIN_URL, userObject);    
        setMsg(result.data.message);
        // navigate(`/profile/${result.data.userid}`)
         // "yourstodo/:id"  const {id} = useParams()
    }
        catch(err){
            console.log('Error in Login Call ', err);
        }

        history('/home2');

    };
    return (
        <>
        <h1 id='login'>Login</h1>

        <h4>{msg}</h4>
        

        <form action="" className='form'>
        <div className="container2">
        <div className="input1">
            <ul>
                <li>
                    <label>User id</label>
                    <input type="text" ref={userid}  placeholder="Enter your User id"/>
                </li>
                <br />
                <li>
                    <label>Password</label>
                    <input type="password" ref={pwd} placeholder="Enter your Password"/>
                </li>
                <br />
                
                <li>
                    <button onClick ={doLogin}>Login</button>
                </li>
            </ul>
            <br />
            <p>No account? <NavLink to ="/Register" > Register </NavLink> </p>
            <br />
            <p>Log in with  <Google/></p> 
                           
        </div>
                        
                        
    </div>
            
        
        </form>

        
     
    
     </>
        
     
    )
}

