import React from 'react';

const Agency = () => {
  const features = [
    {
      title: 'One-Stop Solution',
      description: 'From UI/UX design to complete website development, logo design, and SEO, we cover all aspects of digital presence under one roof.',
    },
    {
      title: 'Client-Centric Approach',
      description: 'Dedicated Support: We prioritize client satisfaction by offering dedicated support throughout the project and beyond.',
    },
    {
      title: 'Proven Results',
      description: 'Boosted Online Presence: Our SEO and digital marketing strategies have helped numerous clients increase their online visibility and drive more traffic to their sites.',
    },
    {
      title: 'Transparent Pricing',
      description: 'No Hidden Costs: Our pricing is clear and transparent, ensuring you get the best value for your investment without any surprises. Flexible Packages: We offer various pricing packages to suit businesses of all sizes, from startups to established enterprises.',
    },
  ];

  return (
    <div className="max-w-5xl  mx-auto py-10">
      <h2 className="text-center text-6xl font-bold mb-8">Why Our Agency</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-lg"
          >
            <h3 className="text-xl  font-semibold mb-4">{feature.title}</h3>
            <p className='tex-md font-poppins'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agency;