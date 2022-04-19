import React from 'react';
import Services from '../Services/Services';
import VideoCarousel from '../VideoCarousel/VideoCarousel';
import './Home.css';

const Home = () => {
  return (
    <div>
      <VideoCarousel></VideoCarousel>
      <Services ></Services>
    </div>
  );
};;

export default Home;