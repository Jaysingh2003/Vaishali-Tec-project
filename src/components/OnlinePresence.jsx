import React from "react";

const OnlinePresence = () => {
  return (
    <div className="flex  flex-col ml-10 mt-52 md:flex-row items-center bg-white p-6 shadow-lg rounded-lg">
      <div className="w-1/2 space-y-4">
        <h2 className="text-2xl font-bold text-blue-700">1st Step of your Online Presence</h2>
        <p className="text-gray-600">
          In the era of virtualization, it is important for any organization, regardless of its
          size or industry, to have a strong online presence to get discovered. Resultantly, a
          business website becomes crucial for organizations to optimize their online activities
          and showcase the products and services that they offer.
        </p>
        <p className="text-gray-600">
          With Webtel's Website Designing Services, you can unify the essence and values of your
          business to build an optimized and streamlined website.
        </p>
        <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
          Schedule a Call
        </button>
      </div>
      <div className="w-1/2 mt-6  flex justify-center">
        <img
          src="https://media.istockphoto.com/id/115065432/photo/family-circle.webp?a=1&b=1&s=612x612&w=0&k=20&c=1ldLr0WkQBA-3KOLOK9-MxbKE7lYCJ8RlOzFJMykODY="
          alt="Website Design Service Illustration"
          className="w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default OnlinePresence;