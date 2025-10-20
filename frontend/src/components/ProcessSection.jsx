import React from "react";
import { Search, Users, Settings, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      step: "IDENTIFY",
      description: "high-impact otomation opportunities",
      icon: Search,
      color: "from-[#43978D] to-[#264D59]",
      iconBg: "bg-[#F9E07F]",
      iconColor: "text-[#264D59]"
    },
    {
      step: "EDUCATE", 
      description: "train you and your team to make sure you can innovate further",
      icon: Users,
      color: "from-[#F9AD6A] to-[#D46C4E]",
      iconBg: "bg-[#264D59]",
      iconColor: "text-white"
    },
    {
      step: "IMPLEMENT",
      description: "efficiency through a fresh pair of eyes. owl eyes.",
      icon: Settings,
      color: "from-[#264D59] to-[#43978D]",
      iconBg: "bg-[#F9E07F]",
      iconColor: "text-[#264D59]"
    }
  ];

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#264D59] mb-4 lg:mb-6">
            <span className="text-[#0000FF]">otomation</span> Process
          </h2>
        </div>

        {/* Process Steps - All in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {processSteps.map((process, index) => (
            <div key={index} className={`relative rounded-2xl bg-gradient-to-br ${process.color} p-6 lg:p-8 text-white text-center min-h-[280px] flex flex-col justify-center`}>
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10 rounded-2xl overflow-hidden">
                <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full blur-lg"></div>
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`${process.iconBg} p-4 rounded-xl inline-block`}>
                  <process.icon className={`${process.iconColor}`} size={32} />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {process.step}
                </h3>
                <p className="text-base lg:text-lg leading-relaxed opacity-90">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#1d4ed8] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-[#1e40af] transition-all duration-200 flex items-center gap-2 group mx-auto"
          >
            Let's talk
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;