import React from 'react';
import "./Pie.css"
import { Link } from 'react-router-dom';

function Pie() {
  return (
    <div className="pie">
      <h2 className="heading">Gimme Pie!</h2>
      <img 
        src="https://i.imgur.com/8gTABsZ.gif"
        alt="Homer Simpson hanging upside down from teh ceiling attempting to reach pie on the floor."
        className="image"
      />
      <Link to="/" className="go-back-link">
        Go Back
      </Link>
    </div>
  )
}

export default Pie;