import './App.css';

// import react from 'react';
// import About from './components/About/About';
import {Login} from './modules/user/Login';
import Home from './modules/user/Home';
import Navbar from './modules/user/Navbar';
import Contact from './modules/user/Contact';
import About from './modules/user/About';
import Register from './modules/user/Register';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Profile from './modules/user/Profile';
import Timer from './work/Task/Timer.js';
import {useEffect , useState} from 'react';
import jwt_decode from 'jwt-decode';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Personal from "./work/personal/Personal"
import Home2 from './modules/user/Home2';
import Professional from "./work/professional/Professional"
// import Professional from "./work/professional/Professional";

function App() {

  const [user , setUser]=useState({});
 


  return (

    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Register />} />
          <Route exact path="/Home2" element={<Home2 />} />
          <Route exact path="/Personal" element={<Personal />} />
          <Route exact path="/Professional" element={<Professional />}/>

        </Routes>
        {/* </Navbar> */}
        {/* <div>
            <Navbar/>
            <Home/>
            <Root/>
        </div> */}
        </BrowserRouter>
        {/* <Contact/> */}
        <div className='personal'>
        <Personal/>
        </div>
        <div className='work'>
        <Professional/>
        </div>
    </>
    
  );
}
export default App;

