import React from 'react';
import "./Ramen.css"
import { Link } from 'react-router-dom';

function Ramen() {
  return (
    <div className="ramen">
      <h2 className="heading">Send Noods!</h2>
      <img 
        src="https://gifbin.com/bin/092013/1380734096_ramen_noodles_beard_bowl.gif"
        alt="Man eating ramen out of his beard that has been shaped like a bowl."
        className="image"
      />
      <Link to="/" className="go-back-link">
        Go Back
      </Link>
    </div>
  )
}

export default Ramen;
