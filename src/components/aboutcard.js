import React from 'react';
import './aboutcard.css'

function Aboutcard({ title, description, clossy }) {
  return (    
    <div>
<div class="aboutcard">
<h1 className={clossy}>{title}</h1>
<p>{description}</p>
</div>
    </div>  
  );
}

export default Aboutcard;