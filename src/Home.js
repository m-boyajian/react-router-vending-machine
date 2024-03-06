import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h2 className="heading">
        Hello, I am a vending machine. <br />What would you like to eat?
      </h2> 
      <img 
        src="https://images.squarespace-cdn.com/content/v1/6414d051b255b77e28f6d34a/e43e69ea-f6c3-4c21-8807-265606259164/Tired+Energy+Drink+GIF+by+Fresh+Cake-downsized_large.gif?format=500w" 
        alt="Naked little cartoon man at a vending machine gif"
        className="image"
      />
      <h3 className="nav-links">
        <Link to="/beer">
         Beer 🍺
        </Link>
        <Link to="/ramen">
         Ramen 🍜
        </Link>
        <Link to="/pie">
         Pie 🥧
        </Link>
      </h3>
    </div>
  );
}

export default Home;