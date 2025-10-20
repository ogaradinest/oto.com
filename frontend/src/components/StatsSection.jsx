import React from "react";
import { mockStats } from "../data/mockData";

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-700 overflow-hidden liquid-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#43978D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#F9AD6A] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The best <span className="text-[#0000FF]">otomation ROIs</span>
            <br />
            are working in sync. Like owl's eyes.{" "}
            <img 
              src="https://customer-assets.emergentagent.com/job_automate-business/artifacts/zuonih79_logo_mini.png" 
              alt="owl eyes" 
              className="inline-block h-16 w-auto ml-2"
            />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            We sell the ROI of our <span className="text-[#0000FF]">otomation</span>
          </p>
        </div>

        {/* Stats Grid - Equal rectangles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-90 transition-all duration-300 h-48 flex flex-col justify-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#0000FF] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-[#F9AD6A] to-[#D46C4E] mx-auto mb-4 rounded-full"></div>
                <h3 className="text-lg font-bold mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0000FF] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Let's talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;