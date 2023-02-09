import React,{useState} from "react";


function Planeteer({planeteer}) {

  const [quote,setQuote]=useState(false);

  function handleQuote(){
    setQuote((quote)=>!quote);
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.image}
          alt={planeteer.name}
          className="card__image"
          onClick={handleQuote}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{quote ? planeteer.quote: planeteer.bio}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>
              {planeteer.fromUSA ? "USA-based":"Working overseas"}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
