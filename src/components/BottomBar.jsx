import React from 'react';

const BottomBar = () => {
  return (
    <footer className="bg-black text-white overflow-hidden py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div>
          <div className="flex items-center space-x-2">
            {/* Logo and Title */}
            <img src="/path-to-logo.png" alt="Magic UI Logo" className="w-8 h-8" />
            <div>
              <h1 className="text-lg font-bold">Vaishali Tec</h1>
              <p className="text-sm">UI Library for Design Engineers</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            <a href="#!" className="hover:text-gray-400">
              <i className="fab fa-github"></i>
            </a>
            <a href="#!" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex space-x-8">
          {/* Product Section */}
          <div>
            <h3 className="font-bold mb-2">PRODUCT</h3>
            <ul>
              <li><a href="#!" className="hover:text-gray-400">Email Collection</a></li>
              <li><a href="#!" className="hover:text-gray-400">Pricing</a></li>
              <li><a href="#!" className="hover:text-gray-400">FAQ</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="font-bold mb-2">COMMUNITY</h3>
            <ul>
              <li><a href="#!" className="hover:text-gray-400">Discord</a></li>
              <li><a href="#!" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#!" className="hover:text-gray-400">Email</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-bold mb-2">LEGAL</h3>
            <ul>
              <li><a href="#!" className="hover:text-gray-400">Terms</a></li>
              <li><a href="#!" className="hover:text-gray-400">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-4 text-sm">
        <p>Copyright © 2024 Magic UI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default BottomBar;