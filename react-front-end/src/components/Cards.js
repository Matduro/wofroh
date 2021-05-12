import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Workouts!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/core-crusher.jpg"
              text="Boost the abilities of your abdominal and back muscles without leaving your home"
              label="Core Crusher"
              path="/services"
            />
            <CardItem
              src="images/nally-express.jpg"
              text="Enjoy fitness in the comfort of your boat sailing around Vancouver Island"
              label="Nally Express"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/ball-exercise.jpg"
              text="Build your stamina without professional workout equipment"
              label="Adventurer"
              path="/services"
            />
            <CardItem
              src="images/andys-cardio.jpg"
              text="Experience crazy heart rate next to your computer without coffee"
              label="Andy's Cardio"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
