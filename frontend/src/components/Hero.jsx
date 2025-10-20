import React from "react";
import { ArrowRight, Zap, Target, DollarSign } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 100; // Account for sticky header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 overflow-hidden static-bg">
      {/* Static glass background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-red-200 to-red-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col items-center text-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 max-w-4xl">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center glass-card p-8 rounded-3xl aqua-glow">
                <span className="text-blue-600 static-glow">otomation</span>
                <br />
                <span className="text-gray-700">at the center of everything* we do.</span>
                <br />
                <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal text-gray-600">*apart from ping-pong. that's still analog.</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold text-base lg:text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group relative z-10 glass-card aqua-glow smooth-all floating-element"
              >
                Let's talk
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 glass-card p-4 rounded-2xl liquid-wave">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-3 rounded-xl flex-shrink-0 aqua-glow floating-element">
                  <Zap className="text-white" size={20} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-base lg:text-lg text-gray-700">FAST</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">Implementation in weeks</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 glass-card p-4 rounded-2xl liquid-wave" style={{animationDelay: '1s'}}>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl flex-shrink-0 aqua-glow floating-element" style={{animationDelay: '1s'}}>
                  <Target className="text-white" size={20} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-base lg:text-lg text-gray-700">PROVEN</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">21 successful implementations</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 glass-card p-4 rounded-2xl liquid-wave" style={{animationDelay: '2s'}}>
                <div className="bg-gradient-to-br from-red-400 to-red-500 p-3 rounded-xl flex-shrink-0 aqua-glow floating-element" style={{animationDelay: '2s'}}>
                  <DollarSign className="text-white" size={20} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-base lg:text-lg text-gray-700">ROI</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">+$250k savings delivered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header Image - Removed to fix alignment */}
          <div className="hidden">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;