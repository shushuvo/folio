import React from 'react';
import './skillcard.css'

function Projectcard({pimglink,pimglink2, pimglink3,pimglink4,butlink,projectdes, techno, butex}) {
  return (    
    <div>
           <div className='projectcard'>
                 <div className='hotelmara'>
                 <img src={pimglink}/>
                 <img src={pimglink2}/>
                 <img src={pimglink3}/>
                 <img src={pimglink4}/>
                 </div>
                 <div className='butdiv'>
                <a href={butlink} class="glossy-button" target="_blank">{butex}</a>
                  </div>
                <h3>{projectdes}</h3>
                <strong>Technologies:</strong><p>{techno}</p>
            </div>
    </div>  
  );
}

export default Projectcard;