import React from 'react';
import './project.css'
import './projectcard.css'
import Projectcard from './projectcard';
import neon from './neon.png'
import neon2 from './neon2.png'
import neon3 from './neon3.png'
import neon4 from  './neon4.png'

import baf from './baf.png'
import baf2 from './baf2.png'
import baf3 from './baf3.png'
import baf4 from './baf4.png'

function Project() {
  return (    
    <div>
    <div className="about"> {/* Use className instead of class */}
        <div class="subabout">
            <h1 className='abouth1'>&lt;My Project/&gt;</h1>
            <div class="linecon">
                 <div class="line"></div>
            </div>
        </div>
    </div>
    <div className="about"> {/* Use className instead of class */}
        <div class="subabout">
          <div className='project'>
               <Projectcard 
               butex={"Sign Up"}
               techno={"Django"}
               projectdes={"I made a social media Neon"}
               butlink={"http://neonfuture.pythonanywhere.com/"}
               pimglink={neon}
               pimglink2={neon2}
               pimglink3={neon3}
               pimglink4={neon4}
               />
             <Projectcard 
               butex={"Visit"}
               techno={"MERN"}
               projectdes={"I made a highschool website"}
               butlink={"http://bafmh.onrender.com/"}
               pimglink={baf}
               pimglink2={baf2}
               pimglink3={baf3}
               pimglink4={baf4}
               />
        </div>
        </div>
    </div>
    </div>  
  );
}

export default Project;
