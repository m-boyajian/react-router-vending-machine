import React from 'react';
import "./Beer.css"
import { Link } from 'react-router-dom';

function Beer() {
  return (
    <div className="beer">
      <h2 className="heading">Beer Me!</h2>
      <img 
        src="https://i.imgur.com/UPGLz95.gif"
        alt="Little dog drinking the foam on the top of a pint of beer."
        className="image"
      />
      <Link to="/" className="go-back-link">
        Go Back
      </Link>
    </div>
  )
}

export default Beer;