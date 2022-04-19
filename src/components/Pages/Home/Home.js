import React from "react";
import Destinations from "../Destinations/Destinations";
import Services from "../Services/Services";
import VideoCarousel from "../VideoCarousel/VideoCarousel";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <VideoCarousel></VideoCarousel>
      <Services></Services>
      <Destinations></Destinations>
    </div>
  );
};

export default Home;
