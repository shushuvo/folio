import React from 'react';
import './photo.css'
import pic from './pic.png'

function Photo() {
  return (
    <div class="photocon">
    <div className="potato"> {/* Use className instead of class */}
      <img src={pic} alt="Medical" /> {/* Use img tag instead of image */}
    </div>
    </div>
  );
}

export default Photo;
