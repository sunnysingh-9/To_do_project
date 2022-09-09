import React from 'react'
import { useRef, useState } from 'react';
import { API_CLIENT } from '../../shared/services/api-client';
import './Register.css';
import {useNavigate} from 'react-router-dom';


const Register = () => {
    
    
    const history = useNavigate();
    const [msg,setMsg] =useState('');
    const userid = useRef('');
    const pwd = useRef('');
    const email = useRef('');
    const phone = useRef('');



    const doregister = async (e)=>{
        e.preventDefault();
        
        const uid = userid.current.value;
        const password= pwd.current.value;
        const emailid = email.current.value;
        const phoneno = phone.current.value;

        const userObject = {'userid':uid, 'password':password , 'email': emailid , 'phone':phoneno};
        console.log('UserObject is ', userObject);
        try{
        const result = await API_CLIENT.post("http://localhost:8000/register", userObject);    
        setMsg(result.data.message);    
    }
        catch(err){
            console.log('Error in registration ', err);
        }

        history('/login');
    }

  return (
    <div>
        <h1 id='register'>Register</h1>
        <h4>{msg}</h4>
        <form action="">
        <div className="container1">
        <div className="input">
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
                    <label>Email</label>
                    <input type="text" ref={email} placeholder="Enter your Email"/>
                </li>
                <br />
                <li>
                    <label>Phone no.</label>
                    <input type="text" ref={phone} placeholder="Enter your Phone no."/>
                </li>
                <br />
                <li>
                    <button onClick ={doregister}  >Register</button>

                </li>

            </ul>
                           
        </div>
                        
                        
    </div>
            
        
        </form>
      
    </div>
  )
}

export default Register