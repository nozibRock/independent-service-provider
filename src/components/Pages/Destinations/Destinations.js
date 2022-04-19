import React from "react";
import "./Destinations.css";

import BoraBora from "../../../Images/borabora.jpg";
import BoraBora2 from "../../../Images/borabora2.jpg";
import Maldives from "../../../Images/maldives.jpg";
import Maldives2 from "../../../Images/maldives2.jpg";
import KeyWest from "../../../Images/keywest.jpg";

const Destinations = () => {
  return (
    <div>
      <div name="destinations" className="destinations">
        <div className="container">
          <h1>All-Inclusive Resorts</h1>
          <p>On the Caribbean's Best Beaches</p>

          <div className="img-container ">
            <div className=" span-3 image-grid-row-2 img-wrapper">
              <img className=" gray" src={BoraBora} alt="/" />
              <div class="content fade text-dark">
                <h3>Bora Bora</h3>
                <p>
                  Bora Bora, Tahiti is a bucket list destination for anyone!
                  It's been on our list for a long time. This hotel in French
                  Polynesia is one of the best hotels in the world! This is a
                  MAGICAL hotel.
                </p>
              </div>
            </div>

            <div className="img-wrapper">
              <img src={BoraBora2} className="zoom blur" alt="/" />
              <div class="content slide-left">
                <h3>Bora Bora</h3>
                <p>
                  Bora Bora, Tahiti is a bucket list destination for anyone!
                </p>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={Maldives} className="blur" alt="/" />
              <div class="content slide-right">
                <h3>Maldives</h3>
                <p>
                  Maldives has a population of around 540,000 people dispersed
                  across 185 islands.
                </p>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={Maldives2} className="blur" alt="/" />
              <div class="content slide-left">
                <h3>Maldives</h3>
                <p>
                  Maldives has a population of around 540,000 people dispersed
                  across 185 islands.
                </p>
              </div>
            </div>
            <div className="img-wrapper">
              <img src={KeyWest} className="gray" alt="/" />
              <div class="content slide-right">
                <h3>Key West</h3>
                <p>
                  Key West, a U.S. island city, is part of the Florida Keys
                  archipelago. It's also Florida's southernmost point, lying
                  roughly 90 miles north of Cuba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
