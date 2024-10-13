import React from 'react';

function Navbar() {
    return (
      <div className=' text-white bg-gray-900 w-screen font-poppins text-lg flex  h-20 gap-x-72 items-center justify-between fixed z-50'>
        <img src="VAISHALI TECH.png" alt="" className='w-[200px] h-[50px] ml-[30px]' />
        <div className='navbarmenu ml-[60px] flex gap-12 pointer'> {/* Added gap between items */}
        <a
    href="#webdesign"
    className="menuitem"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('webdesign')?.scrollIntoView({
        behavior: 'smooth',
      });
    }}
  >
    Webdesigns
  </a>

  <a
    href="#uiux"
    className="menuitem"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('uiux')?.scrollIntoView({
        behavior: 'smooth',
      });
    }}
  >
    UI/UX
  </a>

  <a
    href="#digitalmarketing"
    className="menuitem"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('digitalmarketing')?.scrollIntoView({
        behavior: 'smooth',
      });
    }}
  >
    Digital Marketing
  </a>

  <a
    href="#aboutus"
    className="menuitem"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('aboutus')?.scrollIntoView({
        behavior: 'smooth',
      });
    }}
  >
    About Us
  </a>

  <a
    href="#caseStudy"
    className="menuitem"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('caseStudy')?.scrollIntoView({
        behavior: 'smooth',
      });
    }}
  >
    Case Study
  </a>
          <a href="#contact" className="menuitem pr-6"
              onClick={(e) => {e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth',
                      });
                      }}>Contact Us </a>
          
        </div>
      </div>
    );
}

export default Navbar;