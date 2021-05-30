import React from "react";
import prioritize from "../images/prioritize.svg";
import date from "../images/date.svg";
import statistics from "../images/statistics.svg";
import Card from "./Card";

function Cards() {
  return (
    <div className="cards-wrapper">
      <div className="cards-header">Features</div>
      <div className="cards-container">
        <Card source={prioritize} card_header="Prioritized Tasks">
          Every task created gets labeled according to the priority chosen as
          this helps to know which task requires more attention so as to be
          completed on time.
        </Card>

        <Card source={date} card_header="Expiry Date">
          Timing is very essenstial when working and on that note, Time Stack
          offers this feature to keep you right on track, while utilizing every
          time possible.
        </Card>

        <Card source={statistics} card_header="Statistics">
          This app also provides a statsistics feature that helps you to monitor
          your progress visually. With this, you can know how much effort is
          required to get things done.
        </Card>
      </div>
    </div>
  );
}

export default Cards;
