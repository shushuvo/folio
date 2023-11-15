import React from 'react';
import './contact.css'

function Contact() {
  return (    
    <div>
    <div className="about"> {/* Use className instead of class */}
        <div class="subabout">
            <h1 className='abouth1'>&lt;Contact me/&gt;</h1>
            <div class="linecon">
                 <div class="line"></div>
            </div>
        </div>
    </div>
    <div className="about"> {/* Use className instead of class */}
        <div class="subabout">
        <div class="contact-section">
    <h2>Contact Me</h2>
    <p>Feel free to reach out for any inquiries or just to say hello!</p>
    <a href="mailto:shuvo483b1@gmail.com" class="email-btn">Send Email</a>
  </div>
        </div>
    </div>

    <div className="about"> {/* Use className instead of class */}
        <div class="subabout">
            <div class="copyright">
               <p1>© 2022-2023 Sadman Sakib Shuvo. All Rights Reserved.</p1>
            </div>
        </div>
    </div>

    </div>  
  );
}

export default Contact;
