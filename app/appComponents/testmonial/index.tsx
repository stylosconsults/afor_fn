import React, { useState, useEffect } from "react";
import { MapPin, Users, Trees, DollarSign, Quote } from "lucide-react";
import { AnimatedNumber } from "@/utils/animatedNumber";
import { AnimatedTestimonials } from "./card";
import { GradientButton } from "../atoms/button";

const Testimonials = () => {
  const testimonies = [
    {
      name: "Umuhoza Marie",
      designation: "Huye District",
      src: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1738683911/testmonial_u97lka.webp",
      quote:
        "Through leadership training, I gained confidence to start my own agricultural cooperative, supporting 25 women in our community.",
    },
    {
      name: "Mugisha Jean",
      designation: "Huye District",
      src: "https://res.cloudinary.com/dexaxaqjx/image/upload/v1738683911/testmonial_u97lka.webp",
      quote:
        "The ICT training transformed my life. I'm now a freelance web developer, supporting my family and inspiring local youth.",
    },
  ];

  const volunteerRoles = [
    "Mentors for youth leadership",
    "Environmental campaign trainers",
    "Community development specialists",
  ];

  const donationImpacts = [
    { amount: "$10", impact: "5 tree seedlings planted" },
    { amount: "$100", impact: "ICT training for 3 youth" },
  ];

  return (
    <div className="bg-secondary font-serif py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl flex items-center justify-center text-center font-bold text-primary mb-6">
            <Quote />
            Hear From Those We've Empowered
            <Quote />
          </h3>
          <AnimatedTestimonials testimonials={testimonies} />
        </div>

        {/* Get Involved */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Volunteer Opportunities */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h3>
            <ul className="space-y-2">
              {volunteerRoles.map((role, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Users className="w-5 h-5 mr-2 text-green-500" />
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Donation Impact */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Your Contribution Matters
            </h3>
            {donationImpacts.map((impact, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b last:border-b-0 border-gray-200"
              >
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800">
                    {impact.amount}
                  </span>
                </div>
                <span className="text-gray-600">{impact.impact}</span>
              </div>
            ))}
          </div>
          <div>
            <GradientButton icon="" className="bg-primary cursor-pointer">Joint campaigns.</GradientButton>
            <GradientButton icon="" className="bg-transparent cursor-pointer hover:bg-primary text-white border border-primary">Co-branded community programs.</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
