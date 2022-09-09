// import React from 'react'
// import {useEffect, useState} from 'react';
// import { API_CLIENT } from '../../shared/services/api-client';
// // import axios from "axios";
// import { useParams } from 'react-router-dom';

// const Profile = () => {

//     const {id} = useParams();

//     console.log(id)

//     const [profile , setProfile] = useState();

    
//     const userObj = {'userObject.userid':'' ,'userObject.email':'', 'userObject.phone':''};

//     // const clicked = ()=>{
//     //    axios.get(`http://localhost:8000/profile/${id}`).then(({data})=>{
//     //       console.log(data)
//     //    })
//     // }

// useEffect(()=>{
   
//         // console.log('UserObject is ', userObj);

//         const promise = API_CLIENT.get(process.env.REACT_APP_PROFILE_URL);
//         promise.then((result)=>{
//             console.log('userdata ', result.data.userid);
//            setProfile(result.data.userid);
//         }).catch(err=>console.log('Network Err ', err));
// },[])



//   return (
//     <>
//     <div className='profile'>
//   {/* <button onClick={clicked}>On cLICK</button> */}
// <form action="">
//     <div className='image'>
//         {console.log(profile)}
//         <div className='profile.head'>
//             <h5>Sunny singh</h5>
//             <h6>web developer</h6>
//             <p profile-rating>Ranking: <span>1/10</span> </p>

//         </div>


//         <div className='edit'>

//             <input type="text" value="Edit profile" />
//         </div>

//     </div>

//     <div className='data'>
//         <div className='tabcontennt'>
//             <div className='row'>
//                 <div className='col'>
//                     <label> User Id </label> 
//                 </div>
//                 <div className='col'>
//                     {/* {profile.userid ? (<p>{profile.userid}</p>) : ""} */}
//                 </div>

//             </div>

//             <div className='row'>
//                 <div className='col'>
//                     <label> name </label> 
//                 </div>
//                 <div className='col'>
//                     <p>sunny</p>
//                 </div>

//             </div>

//             <div className='row'>
//                 <div className='col'>
//                     <label> phone </label> 
//                 </div>
//                 <div className='col'>
//                     <p>{profile.phone}</p>
//                 </div>

//             </div>

//             <div className='row'>
//                 <div className='col'>
//                     <label>email</label> 
//                 </div>
//                 <div className='col'>
//                     {/* <p>{userObj.email}</p> */}
//                 </div>

//             </div>

//             <div className='row'>
//                 <div className='col'>
//                     <label>profession</label> 
//                 </div>
//                 <div className='col'>
//                     <p>web developer</p>
//                 </div>

//             </div>

//             <div className='right'>

//             </div>
//         </div>
//     </div>

// </form>

//     </div>
    
//     </>
//   )
// }

// export default Profile

