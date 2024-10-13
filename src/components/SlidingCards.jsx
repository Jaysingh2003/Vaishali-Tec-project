import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlidingCards() {
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
        <div className='w-[90%] m-auto'>
            <div className=''>
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className='group mt-96 bg-white h-[340px] flex flex-col text-black rounded-xl transition-colors duration-300 hover:bg-gray-100'>
                            {/* Card container */}
                            <div className='relative h-56 rounded-t-xl  flex flex-col  justify-center items-center'>
                                {/* Image - initially visible, hidden on hover */}
                                <img 
                                    src={d.image} 
                                    alt={d.name} 
                                    className='w-54 h-54 mt-24 rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-0'
                                />
                                 <div className='flex flex-col justify-center items-center gap-4 p-4  transform transition-transform duration-300 ease-in-out group-hover:scale-0'>
                                <p className='text-2xl  font-semibold'>{d.name}</p>
                                <p>{d.description}</p>
                                </div>

                                {/* Paragraph - initially hidden, shown on hover */}
                                <p className='absolute  flex justify-center items-center p-8 text-black text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                    {d.paragraph}
                                </p>
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
        name: 'Morgan',
        image: 'web1.jpg',
        description: 'Morgan is a renowned brand.',
        paragraph: 'Morgan is committed to quality and innovation in all products Alok focuses on robust solutions for complex engineering problems.'
    },
    {
        name: 'Jaysingh',
        image: 'web2.jpg',
        description: 'Jaysingh is a skilled developer.',
        paragraph: 'Alok focuses on robust solutions for complex engineering problems Alok focuses on robust solutions for complex engineering problems.'
    },
    {
        name: 'Alok',
        image: 'web3.jpg',
        description: 'Alok is a proficient engineer.',
        paragraph: 'Alok focuses on robust solutions for complex engineering problems Alok focuses on robust solutions for complex engineering problems.'
    },
    {
        name: 'Hello',
        image: 'web4.jpg',
        description: 'Hello is a greeting brand.',
        paragraph: 'Hello specializes in creating friendly interactions with users Alok focuses on robust solutions for complex engineering problems.'
    },
];

export default SlidingCards;