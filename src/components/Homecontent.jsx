import React from 'react';

const cardData = [
  {
    imgSrc: 'webgif.gif',
    title: 'Web Development',
    description: 'We create modern, user-friendly websites that showcase your brand\'s unique selling points.',
  },
  {
    imgSrc: 'anouncement.png',
    title: 'SEO Optimization',
    description: 'Optimize your website to rank higher in search engine results and reach more customers.',
  },
  {
    imgSrc: 'reach.png',
    title: 'Graphic Design',
    description: 'Creative designs to help communicate your brand’s message effectively.',
  },
  {
    imgSrc: 'marketing.png',
    title: 'Mobile App Development',
    description: 'Build user-friendly mobile applications to extend your business to mobile platforms.',
  }
];

function Homecontent() {
  return (
    <div className='main m-20 items-center justify-center'>
      <p className='text-center  align-center text-[20px] font-serif leading-10'>
        NexWave is a leading website designing service provider that optimizes cutting-edge
        technology and creativity to the core. By ideating a website with your objectives and goals, Webtel offers the best website designing services that enroot your brand's DNA and truly reflect your visions.
      </p>
      <div className='flex flex-wrap justify-center gap-8 mt-12'>
        {cardData.map((card, index) => (
          <div key={index} className="card w-[30vh] h-[34vh] rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img
              src={card.imgSrc}
              alt={card.title}
              className='w-full h-[125px]  object-cover rounded-t-lg'
            />
            <div className='text-center mt-9'>
              <h3 className='text-lg font-bold'>{card.title}</h3>
              <p className='mt-3 text-sm'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homecontent;