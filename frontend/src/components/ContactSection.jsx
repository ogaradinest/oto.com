import React, { useState } from "react";
import { Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    companySize: '',
    services: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white liquid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-6 glass-card p-6 rounded-3xl aqua-glow liquid-wave">
            <span className="text-blue-600 pulse-glow">Let's talk</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl shadow-2xl p-8 lg:p-12 liquid-wave aqua-glow">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-[#43978D] mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-[#264D59] mb-4">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Role and Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Role in Company
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent transition-all duration-200"
                        placeholder="CEO, CTO, Operations Manager, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Company Size and Services */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Company Size
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select company size</option>
                        <option value="Less than 20">Less than 20</option>
                        <option value="20-50">20-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100-500">100-500</option>
                        <option value="More than 500">More than 500</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#264D59] mb-2">
                        Services of Interest
                      </label>
                      <select
                        name="services"
                        value={formData.services}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select service</option>
                        <option value="Business Process Automation">Business Process Automation</option>
                        <option value="Sales & Marketing Automation">Sales & Marketing Automation</option>
                        <option value="Customer Support Automation">Customer Support Automation</option>
                        <option value="HR & Operations Automation">HR & Operations Automation</option>
                        <option value="Custom Automation Solutions">Custom Automation Solutions</option>
                        <option value="Full Automation Assessment">Full Automation Assessment</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#264D59] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000FF] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us more about your automation needs and current challenges..."
                    />
                  </div>

                  {/* Submit Button */}
                  <a
                    href="mailto:support@otobrothers.com?subject=Business Automation Inquiry&body=Hello,%0D%0A%0D%0AI am interested in learning more about your automation solutions.%0D%0A%0D%0AName: %0D%0ACompany: %0D%0APhone: %0D%0A%0D%0APlease contact me to discuss our automation needs.%0D%0A%0D%0AThank you!"
                    className="w-full bg-gradient-to-r from-[#0000FF] to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-[#0000FF] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl no-underline"
                  >
                    Send Inquiry
                    <Send size={20} />
                  </a>
                </form>
              )}
            </div>
          </div>

          {/* Office Locations - Equal height to contact form */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#264D59] mb-6">Our Offices</h3>
                
                {/* Bucharest Office */}
                <div className="mb-8 p-6 bg-gradient-to-br from-[#43978D] to-[#264D59] rounded-2xl text-white">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-[#F9E07F]" size={24} />
                    <h4 className="text-xl font-bold ml-3">Bucharest, Romania</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="text-[#F9AD6A]" size={16} />
                      <span className="ml-3">+40 722 465 536</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="text-[#F9AD6A]" size={16} />
                      <span className="ml-3">support@otobrothers.com</span>
                    </div>
                  </div>
                </div>

                {/* London Office */}
                <div className="p-6 bg-gradient-to-br from-[#F9AD6A] to-[#D46C4E] rounded-2xl text-white">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-white" size={24} />
                    <h4 className="text-xl font-bold ml-3">London, United Kingdom</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="text-gray-100" size={16} />
                      <span className="ml-3">+44 7577 774 805</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="text-gray-100" size={16} />
                      <span className="ml-3">support@otobrothers.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Full width with aqua glass background */}
        <div className="mt-16">
          <div className="glass-card rounded-3xl shadow-2xl p-8 w-full liquid-wave aqua-glow bg-gradient-to-br from-blue-100/50 to-white/50">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-6 text-center pulse-glow">Why choose otobrothers?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-500 rounded-full mt-2 flex-shrink-0 aqua-glow floating-element"></div>
                <p className="text-xl text-gray-700">Straight talkers because business talk is serious but it shouldn't be boring.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-500 rounded-full mt-2 flex-shrink-0 aqua-glow floating-element"></div>
                <p className="text-xl text-gray-700">We leave customers' teams fully trained and with tools to experiment their own <span className="text-blue-600">otomation</span>.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-500 rounded-full mt-2 flex-shrink-0 aqua-glow floating-element"></div>
                <p className="text-xl text-gray-700">+50 years experience combined in Sales, Marketing, Advertising and Strategy; with Capital letters because we know what are we talking about.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-500 rounded-full mt-2 flex-shrink-0 aqua-glow floating-element"></div>
                <p className="text-xl text-gray-700">Proven track record with 21 successful implementations to date, with +$250k business revenue via <span className="text-blue-600">otomation</span> efficiencies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;