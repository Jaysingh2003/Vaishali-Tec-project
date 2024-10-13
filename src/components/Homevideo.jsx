import React from 'react';
import videobg from '../assets/bgvideo.mp4';

function Homevideo() {
  return (
    <div className='main relative pt-36 overflow-hidden  w-screen'>
      <div className="overlay w-[100%] h-[40vh] absolute bg-gray-500/50  "></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '40vh', objectFit: 'cover'  }}
      >
        <source src={videobg} type="video/mp4" />
      </video>
      <div className='content absolute text-center top-64 w-full left-0 right-0'>
        <h1 className="text-white text-5xl font-semibold font-poppins">“Crafting Tailored Website Designs that  <br /> Reflect the Essence of Your Brand.”</h1>
      
      </div>
    </div>
  );
};

export default Homevideo;