import React, { useRef, useState } from "react";
import styled, { withTheme } from "styled-components";
import LeftArrow from "../assets/left.png";
import RightArrow from "../assets/right.png";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";

import "./CardSlider.css";
import { useNavigate } from "react-router-dom";
function CardSlider({ data, title }) {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
    
  const navigate = useNavigate();

  const settings = {
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

React.useEffect(() => {
  console.log("show mouse over value",isHovered);
},[isHovered]);

  return (
    <div className="container" >
      <h1 style={{ color: "white" }}>{title}</h1>
      <Slider {...settings}>
        {  
      data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })
    
    }

        {/* {data.map((movie, index) => (
          <div
         
          >
            <img
              style={{
                borderRadius: "0.2rem",
                width: "100%",
                height: "100%",
                zindex: 10,
              }}
              src={`https://image.tmdb.org/t/p/w500${movie.image}`}
              alt="card"
              onClick={() => navigate("/player")}
            />
    {
      isHovered ? (
        <div>
          <h1 style={{color:"white"}}>name of th movie</h1>
        </div>
      ):(
        <div></div>
      )
    }
          </div>
        ))} */}

        {/* <Container
    showControls={showControls}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
     style={{}}>
     <h1>{title}</h1>
    <div className='wrapper'>
   
    {
      data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })
    
    }
    </div>
    </Container> */}
      </Slider>
    </div>
  );
}

const Container = styled.div`
  position: relative;
  padding: 2rem 0;
  h1 {
    color: white;
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;
export default CardSlider;
