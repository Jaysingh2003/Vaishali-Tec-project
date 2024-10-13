import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Teammember() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='w-[95%] mt-40 m-auto'>
      {/* Heading for the team section */}
      <h2 className='text-3xl font-bold text-center mb-10'>
        Our Team Members
      </h2>

      <div>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className='group bg-white h-[350px] flex flex-col justify-center items-center text-black rounded-xl transition-colors duration-300 hover:bg-gray-100'
            >  
              <div className='flex flex-col justify-center items-center  p-6'> 
               
                <img
                  src={d.image}
                  alt={d.name}
                  className='w-40 h-50 rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-105'
                />
                <div className='flex flex-col justify-center items-center mt-5 gap-4 transform transition-transform duration-300 ease-in-out group-hover:scale-110'>
                  <p className='text-xl font-semibold text-center'>{d.name}</p>
                  <p className='text-center'>{d.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: 'jaysingh',
    image: 'jay.jpg',
    description: 'Jaysingh is a skilled developer.',
    paragraph: 'Morgan is committed to quality and innovation in all products.'
  },
  {
    name: 'Alok Singh',
    image: 'alok.jpg',
    description: 'Alok is a senior devloper.',
    paragraph: 'Jaysingh is passionate about building high-performance applications.'
  },
  {
    name: 'jaysingh',
    image: 'jay.jpg',
    description: 'Jaysingh is a skilled developer.',
    paragraph: 'Alok focuses on robust solutions for complex engineering problems.'
  },
  {
    name: 'Alok Singh',
    image: 'alok.jpg',
    description: 'Alok is a senior devloper.',
    paragraph: 'Hello specializes in creating friendly interactions with users.'
  },
];

export default Teammember;