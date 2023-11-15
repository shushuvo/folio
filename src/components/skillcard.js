import React from 'react';
import './skillcard.css'

function Skillcard({imglink}) {
  return (    
    <div>
<div class="skillcard">
<img src={imglink}/>
</div>
    </div>  
  );
}

export default Skillcard;