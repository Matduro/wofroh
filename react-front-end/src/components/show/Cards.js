import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>The latest and greatest from WoFroH</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/hulkin-andy.jpg"
              text="Unleash your inner Hulk with Andy's summer bootcamp"
              label="Strength"
              path="/strength"
            />
            <CardItem
              src="images/nally-gary-baywatch.jpg"
              text="Christian and Gary share their beach-body secrets"
              label="Fitness"
              path="/fitness"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/female-squat.jpeg"
              text="Feel the fire in your quads"
              label="Legs"
              path="/legs"
            />
            <CardItem
              src="images/malepushup.jpeg"
              text="One simple solution for great pectorals"
              label="Chest"
              path="/chest"
            />
            <CardItem
              src="images/yoga-home.jpeg"
              text="Give your body the mobility it deserves"
              label="Yoga"
              path="/yoga"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
