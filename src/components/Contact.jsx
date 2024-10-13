import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

function Contact() {
  return (
    <motion.div
      className='h-full ml-[150px] max-w-[1366px] flex items-center gap-[50px]'
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="flex-1 flex flex-col gap-[40px]" variants={variants}>
        <motion.h1 className="text-[90px] leading-[80px]" variants={variants}>
          Connect with Us.
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2 className="text-xl font-bold">Email</h2>
          <span className="font-light font-voyage">jay229413@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2 className="text-xl font-bold">Address</h2>
          <span className="font-light font-voyage">
            32-B Krishna Nagar, 110051 New Delhi, India
          </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2 className="text-xl font-bold">Contact</h2>
          <span className="font-light font-voyage">9936341784</span>
        </motion.div>
      </motion.div>
      <div className="flex-1">
        <form className="flex flex-col gap-[30px] w-[70%]">
          <input
            type="text"
            placeholder="Name"
            className="p-[10px] border border-gray-500 bg-transparent rounded-md text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-[10px] border border-gray-500 bg-transparent rounded-md text-white"
          />
          <textarea
            placeholder="Message"
            className="p-[10px] border border-gray-500 bg-transparent rounded-md text-white h-[100px]"
          />
          <button
            type="submit"
            className="p-[15px_30px] bg-[#ea7807] text-white rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;