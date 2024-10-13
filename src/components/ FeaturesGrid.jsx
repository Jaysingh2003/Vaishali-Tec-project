import React from "react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: "boost.png", // Replace with actual path
      title: "Boost your Reach & Visibility",
    },
    {
      icon: "sales.png", // Replace with actual path
      title: "Elevate your Brand Value",
    },
    {
      icon: "virtual.png", // Replace with actual path
      title: "Secure your Virtual Interactions",
    },
    
    {
      icon: "brandpng.png", // Replace with actual path
      title: "Elevate your Brand Value",
    },
    {
      icon: "reach.png", // Replace with actual path
      title: "Secure your Virtual Interactions",
    },
    {
      icon: "anouncement.png", // Replace with actual path
      title: "Streamline your Performance",
    },
  ];

  return (
    <div className="text-center mt-28 p-6 bg-gray-100 items-start px-16 justify-center">
      <h2 className="text-[40px] font-bold text-blue-700 mb-4">A Business Website that Leaves an Impact</h2>
      <p className="text-gray-600 text-xl mb-8">
        Just like your business, your business website needs to be unique, impactful, and advanced
        to get ahead of the competition. Webtel's team of experts works closely with you to build a
        website that helps you stand out and beat the competition.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center w-[250px] h-[260px]"
          >
            <img src={feature.icon} alt={feature.title} className="w-48 h-48 mb-4" />
            <h3 className="text-blue-700 font-semibold text-lg">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;