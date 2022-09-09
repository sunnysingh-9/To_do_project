import './About.css';
import React from 'react'

const About = () => {
  return (
    <div className='about'>
        
            <div id='daily1'>
                <img src="assets/about1.png" alt=""  />
            </div> 

            <div id='daily2'>
                <h1>A smart daily planner</h1>
                <p>Set yourself up for success with My Day, intelligent and personalized suggestions to update your daily or weekly to do list. With both a Microsoft to do desktop app and mobile app available, it is easy to stay on task all day long.</p>
            </div>

            <div id='online1'>      
                <h1>Manage your to do list online</h1>
                <p>A truly cross platform task management app. Whether you're at home using the desktop app or are using the mobile app on the go you can access your task list and stay organized.</p>
            </div>


            <div id='online2'>
                 <img src="assets/about2.png" alt=""  />
            </div>


            <div id='share1'>
                <img src="assets/about3.png" alt='' ></img>
            </div>

            <div id='share2'>
                <h1>Sharing made easy</h1>
                <p>Sharing an online to do list can help keep you connected with friends, family and colleagues.</p>
            </div>
        

            <div id='easy1'>
                <h1>Make managing tasks easier</h1>
                <p>Break tasks down into simple steps, add due dates, and set reminders for your daily checklist to keep you on track.</p>
            </div>

            <div id='easy2'>
                <img src="assets/about2.png" alt='' ></img>
            </div>

      
    </div>
  )
}

export default About