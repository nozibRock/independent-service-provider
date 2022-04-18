import React, { useState } from 'react';
import './VideoCarousel.css'

import vid1 from '../../../Videos/video1.mp4'
import vid2 from '../../../Videos/video2.mp4'
import vid3 from "../../../Videos/video3.mp4";
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const VideoCarousel = () => {
     const [index, setIndex] = useState(0);

     const handleSelect = (selectedIndex, e) => {
       setIndex(selectedIndex);
     };
    const videoProperties = [
      {
        id: 1,
        title: "They Sell Tea to Travel the World",
        src: vid1,
      },
      {
        id: 2,
        title: "Our Travel & Love Story",
        src: vid2,
      },
      {
        id: 3,
        title: "Underground Hotel for $1/Night? MALAWI",
        src: vid3,
      },
    ];
    return (
      <div className=" mt-5">
        <Carousel activeIndex={index} onSelect={handleSelect} fade className="carousel-container">
          {videoProperties.map((videoObj) => {
            return (
              <Carousel.Item key={videoObj.id}>
                <ReactPlayer
                  className="carousel-vid"
                  width={"100%"}
                  height={"100%"}
                  url={videoObj.src}
                  pip={false}
                  controls={false}
                  playing={true}
                  loop={true}
                  muted={true}
                ></ReactPlayer>
                <Carousel.Caption className="fw-bold text-start carousel-info">
                  <h1>{videoObj.title}</h1>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
};

export default VideoCarousel;