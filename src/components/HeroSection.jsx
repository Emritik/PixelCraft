import React from "react";
import card from '../assets/images/card.png'
import balloons from '../assets/images/balloons.png'
import bubbles from '../assets/images/bubbles.png'
import wave from '../assets/images/wave.png'

const HeroSection = () => {
  return (
    <section className="relative dark:bg-gradient-to-b dark:from-pink-400 dark:to-blue-900 bg-white h-screen flex flex-col justify-center items-center text-center">
      
      <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-10">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="bg-gradient-to-tr from-purple-300 to-blue-200 darK:bg-gradient-to-tr dark:from-purple-900 dark:to-red-600 rounded-lg shadow-lg"
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Heading */}
        <h1 className=" text-6xl font-bold md:font-extrabold text-gray-900 dark:text-white mb-6">
          Let’s <span className="text-purple-600 dark:text-indigo-800">Start</span> <br /> startup
        </h1>

        {/* Button */}
        <button
          className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-medium rounded-full shadow-lg hover:scale-105 transition-transform"
          onClick={() => window.open("https://wa.me/+919125545701", "_blank")}
        >
          Connect on WhatsApp
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute md:right-28 top-40 right-10">
      <div className="w-16 h-16 rounded-full">
            <img src={balloons} alt="" />
        </div>
      </div>
      <div className="absolute bottom-40 md:left-60 left-10">
      <div className="w-16 h-16 rounded-full">
            <img src={bubbles} alt="" />
        </div>
      </div>
      <div className="absolute top-12 md:left-48 left-20">
      <div className="w-16 h-16 rounded-full">
            <img src={card} alt="" />
        </div>
      </div>
      <br /><br />
      <div className="flex justify-center items-center sm:bottom-0">
        <div className="w-20 h-16 sm:w-20 sm:h-12 md:w-20 md:h-16 lg:w-20 lg:h-12">
          <img src={wave} alt="Wave" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
