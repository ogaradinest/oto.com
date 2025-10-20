import React, { useState } from "react";
import { ChevronDown, ChevronUp, Zap, Users, HeadphonesIcon, Calculator, UserCheck, BarChart3, Building, ArrowRight } from "lucide-react";
import { mockServices } from "../data/mockData";

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getServiceIcon = (category) => {
    const iconMap = {
      "AI-Powered Business Process": Zap,
      "Sales & Marketing": Users,
      "Customer Experience & Support": HeadphonesIcon,
      "Finance & Operations": Calculator,
      "HR & People Ops": UserCheck,
      "Data & Analytics": BarChart3,
      "Industry-Specific": Building
    };
    return iconMap[category] || Zap;
  };

  const getServiceColor = (index) => {
    const colors = [
      { bg: "bg-[#43978D]", hover: "hover:bg-[#264D59]", accent: "border-[#43978D]" },
      { bg: "bg-[#F9AD6A]", hover: "hover:bg-[#D46C4E]", accent: "border-[#F9AD6A]" },
      { bg: "bg-[#264D59]", hover: "hover:bg-[#43978D]", accent: "border-[#264D59]" },
      { bg: "bg-[#D46C4E]", hover: "hover:bg-[#F9AD6A]", accent: "border-[#D46C4E]" },
      { bg: "bg-[#43978D]", hover: "hover:bg-[#264D59]", accent: "border-[#43978D]" },
      { bg: "bg-[#F9AD6A]", hover: "hover:bg-[#D46C4E]", accent: "border-[#F9AD6A]" },
      { bg: "bg-[#264D59]", hover: "hover:bg-[#43978D]", accent: "border-[#264D59]" }
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white liquid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#264D59] mb-6">
            <span className="text-[#0000FF]">otomation</span> Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {mockServices.map((service, index) => {
            const IconComponent = getServiceIcon(service.category);
            const colors = getServiceColor(index);
            const isExpanded = expandedService === service.id;
            
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Service Header */}
                <div 
                  className={`${colors.bg} ${colors.hover} p-6 cursor-pointer transition-all duration-200`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-xl backdrop-blur-sm">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {service.category}
                      </h3>
                    </div>
                    <div className="bg-white bg-opacity-30 p-3 rounded-xl backdrop-blur-sm hover:bg-opacity-40 transition-all duration-200">
                      {isExpanded ? (
                        <ChevronUp className="text-white" size={24} />
                      ) : (
                        <ChevronDown className="text-white" size={24} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Content - Collapsible */}
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-6 space-y-4">
                    {service.services.map((item, itemIndex) => {
                      const [title, description] = item.split(': ');
                      return (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full ${colors.bg} mt-2 flex-shrink-0`}></div>
                          <div>
                            <h4 className="font-semibold text-[#264D59] text-sm">
                              {title}
                            </h4>
                            {description && (
                              <p className="text-gray-600 text-sm mt-1">
                                {description}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>


              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0000FF] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 group mx-auto"
          >
            Let's talk
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;