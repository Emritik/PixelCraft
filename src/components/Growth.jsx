import React from "react";
import StatItem from "./StatItem";
import cross from '../assets/images/cross.png'
import rocket from '../assets/images/rocket.png'

const Growth = () => {
  return (
    <div>
      <div className="p-8 mt-0 dark:bg-gradient-to-b dark:from-pink-400 dark:to-blue-900">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-0 md:grid-cols-3 gap-4">
          <div className="relative">
            <img 
              src={rocket} 
              alt="decorative top"
              className="absolute -top-16 left-8 md:-top-16 md:left-12 transform -translate-x-1/2 w-14 h-14"
            />
            <StatItem number="6" label="Website Build" />
          </div>

          <div className="relative">
            <StatItem number="10" label="Build Brand Identity" />
          </div>

          <div className="relative">
            <StatItem number="3" label="Your Startup Growth" />
            <img
              src={cross}
              alt="decorative bottom"
              className="absolute md:-bottom-0 md:left-96 transform -translate-x-1/2 w-14 h-14 -bottom-20 left-72 sm:left-56 sm:w-10 sm:h-10 sm:bottom-4" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
