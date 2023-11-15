import React from 'react';
import './skill.css'
import Skillcard from './skillcard';
import dj from './dj.png'
import x86 from './x86.png'
function Skill() {
  return (    
    <div>
           <div className="about"> {/* Use className instead of class */}
        <div class="subabout">
            <h1 className='abouth1'>&lt;My Skills/&gt;</h1>
            <div class="linecon">
                 <div class="line"></div>
            </div>
        </div>
    </div>
    <div className="about"> {/* Use className instead of class */}
        <div class="subabout">
            <div className='skill'>
                <Skillcard imglink="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"/>
                <Skillcard imglink={dj}/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/512px-Spring_Boot.svg.png"/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/150px-Tux.svg.png"/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/120px-Android_Studio_icon_%282023%29.svg.png"/>
                <Skillcard imglink={x86}/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/216px-Gnu-bash-logo.svg.png"/>  
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1280px-MySQL_logo.svg.png"/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/1280px-MongoDB_Fores-Green.svg.png"/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Apache_HTTP_server_logo_%282019-present%29.svg/1280px-Apache_HTTP_server_logo_%282019-present%29.svg.png"/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/1280px-Nginx_logo.svg.png"/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/commons/1/1f/Z_Shell_Logo_Color_Horizontal.svg"/>
                <Skillcard imglink="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/512px-React_Logo_SVG.svg.png"/>
           </div>
        </div>
    </div>
    </div>
  );
}

export default Skill;
