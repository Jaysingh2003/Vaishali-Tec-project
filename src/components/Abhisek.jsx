import React from 'react'

function Abhisek() {
  return (
    <div>
        <div className=" p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center  w-[95%] mx-auto">
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <img
          src="bihari.jpg"
          alt="Professional Illustration"
          className="w-full max-w-[300px] rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-[#4A90E2]">
          A Virtual Workplace for Professionals
        </h2>
        <p className="text-gray-600 text-lg">
          Are you a CA or accounting professional, looking for a website that best suits your profession? 
        </p>
        <p className="text-gray-600 text-lg">
          Virtual Office is a power-packed and compliant website for CA, CS, Advocates, and Professional Firms as per ICAI guidelines. We offer a unique appealing web design that can replicate your workplace on an online platform so that you can create an efficient virtual presence.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Abhisek