import React from "react";
import { Mail, Phone, MapPin, Linkedin, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-start">
              <img 
                src="https://customer-assets.emergentagent.com/job_523ddc15-12aa-4a04-8ea3-751c2ec002de/artifacts/a6i6e90a_logo.png" 
                alt="otobrothers logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 text-lg max-w-2xl text-left">
              We are sharp, good and determined.
              <br />
              We see efficiencies in the Dark Forest of Complicated Business Processes.
              <br />
              The Owls of the business world.
            </p>
            <div className="flex space-x-4 justify-start">
              <a 
                href="https://linkedin.com/company/otobrothers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all duration-200 hover:scale-105"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://youtube.com/@otobrothers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all duration-200 hover:scale-105"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#F9E07F]">Contact</h4>
            <div className="space-y-6">
              {/* Bucharest */}
              <div>
                <div className="flex items-center mb-2">
                  <MapPin className="text-[#F9AD6A]" size={16} />
                  <span className="ml-2 font-semibold">Bucharest, RO</span>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center">
                    <Phone size={14} />
                    <span className="ml-2 text-gray-300">+40 722 465 536</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={14} />
                    <a 
                      href="mailto:support@otobrothers.com" 
                      className="ml-2 text-gray-300 hover:text-[#F9AD6A] transition-colors duration-200"
                    >
                      support@otobrothers.com
                    </a>
                  </div>
                </div>
              </div>

              {/* London */}
              <div>
                <div className="flex items-center mb-2">
                  <MapPin className="text-[#F9AD6A]" size={16} />
                  <span className="ml-2 font-semibold">London, UK</span>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center">
                    <Phone size={14} />
                    <span className="ml-2 text-gray-300">+44 7577 774 805</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={14} />
                    <a 
                      href="mailto:support@otobrothers.com" 
                      className="ml-2 text-gray-300 hover:text-[#F9AD6A] transition-colors duration-200"
                    >
                      support@otobrothers.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400">
                © 2025 otobrothers. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-[#F9AD6A] transition-colors duration-200">
                  Terms & Conditions
                </a>
                <a href="#" className="text-gray-400 hover:text-[#F9AD6A] transition-colors duration-200">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <button 
              onClick={scrollToTop}
              className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-200 hover:scale-105 group"
            >
              <ArrowUp className="group-hover:-translate-y-1 transition-transform duration-200" size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;