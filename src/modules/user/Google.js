import React from 'react'
import {useEffect , useState} from 'react';
import jwt_decode from 'jwt-decode';

const Google = () => {
  const [user , setUser]=useState({});
        function handlecallback(response){
          console.log("id token"+response.credential);
          var userObject = jwt_decode(response.credential);
          console.log(userObject);
          setUser(userObject);
          document.getElementById("signindiv").hidden = true ;
        }
      
      function signout(event){
        setUser({});
        document.getElementById("signindiv").hidden = false;
      }
      
        useEffect(()=>{
          /*global google */
          google.accounts.id.initialize({
            client_id:"427238760893-mjef5ekanpbr07b7g5mkjsep9t0bfu48.apps.googleusercontent.com",
            callback: handlecallback
          });
      
          google.accounts.id.renderButton(
      document.getElementById("signindiv"),
      {theme :"outline" , size :"large"}
      
          );
      
        },[]);
  return (
    <div className='google'>
       <div className="Google">
      <div id="signindiv"></div>
      {  Object.keys(user).length !== 0 &&
      <button onClick={signout}>signout</button>
      }


      { user && 
      <div>
        <img src={user.picture} alt=""></img>
        <h3>{user.name}</h3>

      </div>
      }

      
    </div>
    </div>
  )
}

export default Google






