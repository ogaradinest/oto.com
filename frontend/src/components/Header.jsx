import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 200; // Even more offset to show section titles
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-2xl sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Combined Logo and Header Image Section */}
        <div className="relative py-8 sm:py-10 lg:py-12">
          {/* Combined logo and header image */}
          <div className="flex justify-end">
            <img 
              src="https://customer-assets.emergentagent.com/job_automate-business/artifacts/ivnkooon_logo_header.png" 
              alt="otobrothers" 
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
            />
          </div>
        </div>

        {/* Navigation Menu - Below logo and header */}
        <div className="border-t border-gray-200 py-3">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8 ml-auto">
              <button 
                onClick={() => scrollToSection('process')}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium text-sm lg:text-base smooth-all hover:scale-105"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium text-sm lg:text-base smooth-all hover:scale-105"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium text-sm lg:text-base smooth-all hover:scale-105"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#2563eb] text-white px-4 lg:px-6 py-2 rounded-xl hover:bg-[#1d4ed8] transition-all duration-300 font-medium text-sm lg:text-base"
              >
                Let's talk
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#43978D] transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 border-t border-gray-100 mt-3">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-gray-700 hover:text-[#0000FF] transition-colors duration-200 font-medium text-left"
                >
                  Process
                </button>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-700 hover:text-[#0000FF] transition-colors duration-200 font-medium text-left"
                >
                  Solutions
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-[#0000FF] transition-colors duration-200 font-medium text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-left w-fit"
                >
                  Let's talk
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;