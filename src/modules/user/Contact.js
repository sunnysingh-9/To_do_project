import React from 'react'
import emailjs from 'emailjs-com';
import "./Contact.css";



function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rdx0itb','template_h48edet',e.target,'WIl-MiJaM3o1eH5MU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <div>
            <div className="container">
              <div className='intro'>

        <h1>Contact With Us</h1> <br />
        <p>We would love to respond to your queries and help you succeed.<br/> Feel free to get in touch with us.</p>
              </div>
        <div className="Contact-box">
            <div className="contact-left">
                <h3>Sent your request</h3>
                <form onSubmit={sendEmail}>
                    
                    <div className="input-row">
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Enter your name"/>
                        </div>
                        <div className="input-group">
                            <label>Phone</label>
                            <input type="text" name="phone" placeholder="+1 412 520 3231"/>
                        </div>

                    </div> 
                    <div className="input-row">
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="email@example.com"/>
                        </div>
                </div>
                    
                        

                    <label>Message</label>
                    <textarea rows="5" name="message" placeholder="Your Message"></textarea>

                    <button type="submit">SEND</button>
                </form>
            </div>
            <div className="contact-right">
                 <h3>Reach us</h3>

                 <table>
                    <tr>
                        <td>Email</td>
                        <td>todolistgroup@gamil.com</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>+91 012 345 6789</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>Bharati Vidyapeeth College, Paschim Vihar</td>
                    </tr>
                 </table>
            </div>
        </div>
    </div>
        // </div>
    );
}

export default Contact;
