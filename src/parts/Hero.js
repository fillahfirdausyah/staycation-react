import React from "react";

import HeroBanner from "assets/images/hero/hero-banner.jpg";
import HeroFrame from "assets/images/hero/hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";

import Button from 'elements/Button'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo()
    }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 422 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work, Start Next Vacation
          </h1>
          <p className="mb-5 font-wight-light-text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
            Show Me
          </Button>   
        </div>
      </div>
    </section>
  );
}
