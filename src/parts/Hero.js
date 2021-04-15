import React from "react";

import HeroBanner from "assets/images/hero/hero-banner.jpg";
import HeroFrame from "assets/images/hero/hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";

import Button from 'elements/Button'

export default function Hero(props) {

    // function showMostPicked() {
    //     window.scrollTo({
    //         top: props.refMostPicked.current.offsetTop - 30,
    //         behavior: "smooth"
    //     })
    // }

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
      <div className="row mt-5">
          <div className="col-auto">
              <img src={IconTraveler} alt={`Travelers`}/>
              <h6 className="mt-3">
                  {/* {props.data.travelers} <span className="text-gray-500 font-wight-light">Travelers</span> */}
              </h6>
          </div>
      </div>
    </section>
  );
}
