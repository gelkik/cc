import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({ handleNewPlanet }) {

  const fullYear = new Date().getFullYear();

  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    // handleNewPlanet(randomPlaneteer);
    fetch('http://localhost:8003/planeteers',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(randomPlaneteer)
    })
    .then(res=>res.json())
    .then(data=>handleNewPlanet(data))
  }


  return (
    <div className="centered">
      <button 
        onClick={handleClick} 
        id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
