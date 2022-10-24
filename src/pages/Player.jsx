import React from 'react'
import styled from 'styled-components'
import video from '../assets/video-1.mp4'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
function Player() {
  const navigate=useNavigate();
  return (
    <div style={{width:"100vw",height:"100vh"}}>
   
    <div style={{  position: "absolute", padding: "2rem", zIndex:1,}}>
      <BsArrowLeft onClick={()=>navigate(-1)}  style={{fontSize:"3rem",color:"white",cursor:"pointer"}} />
    </div>
      <video src={video} autoPlay loop controls muted style={{width:"100%", height:"100%", objectFit:"cover"}}/>
    
    </div>


      
  )
}


export default Player