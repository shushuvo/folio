import React from 'react';
import './about.css'
import Aboutcard from './aboutcard'

function About() {
  return (    
    <div>
    <div className="about"> {/* Use className instead of class */}
        <div class="subabout">
            <h1 className='abouth1'>&lt;About me/&gt;</h1>
            <div class="linecon">
                 <div class="line"></div>
            </div>
        </div>
    </div>
    <div className="about"> {/* Use className instead of class */}
        <div class="subabout">
            <div className='aboutbigboy'>
                 <div className='aboutbig'>
                 <p>"I am fast, efficient and quick learner. I can quickly adopt my self to new problems. As a passionate Full Stack Web and Android Developer, My goal is to collaborate with a talented team that values continuous learning and embraces cutting-edge technologies. I can utilize my technical skills, creativity, and passion for software development."</p>

<p>With a strong foundation in the MERN stack and Django with three years of professional experience</p>

<b>Developer Information:</b>
                  <ul>
      <li><strong>Name:</strong>Sadman Sakib Shuvo</li>
      <li><strong>Email:</strong> shuvo483b1@gmail.com</li>
      <li><strong>Date of Birth:</strong> 15 June 2002</li>
      <li><strong>Location:</strong> Narsingdi, Bangladesh</li>
    </ul>
                  
                 </div>
                <div>
                   <div class="description">
                      <Aboutcard clossy="aboutdesh1" title="3 +"description="Years of Coding"/>            
                      <Aboutcard clossy="aboutdesh2" title="40 +"description="Self Projects Completed"/>
                   </div>
                   <div class="description">
                      <Aboutcard clossy="aboutdesh3" title="10k +"description="Coding Hours"/>            
                      <Aboutcard clossy="aboutdesh4" title="5" description="Happy Clients"/>
                   </div>
                </div>
            </div> 
        </div>
    </div>
    </div>  
  );
}

export default About;
