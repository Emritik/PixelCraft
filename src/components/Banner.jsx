import React from "react";
import bubbles from "../assets/images/bubbles.png";
import card from "../assets/images/card.png";
import balloons from "../assets/images/balloons.png";
import wallet from "../assets/images/wallet.png";
import wave from "../assets/images/wave.png";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-44 px-4 sm:py-44 sm:px-8 md:py-56 md:px-16 lg:px-24" id="banner">
      {/* Floating Decorative Images */}
      <div className="absolute top-32 left-24 sm:top-64 sm:left-32 md:top-28 md:left-48 lg:top-32 lg:left-96">
        <div className="w-12 h-12 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
          <img src={card} alt="Cards" />
        </div>
      </div>
      <div className="absolute top-32 left-72 sm:top-32 sm:right-36 md:top-40 md:left-56 lg:top-60 lg:left-12">
        <div className="w-12 h-12 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
          <img src={wallet} alt="Wallet" />
        </div>
      </div>

      <div className="absolute top-96 left-80 sm:top-96 sm:left-12 md:top-96 md:mt-20 md:left-64 lg:left-96">
        <div className="w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
          <img src={balloons} alt="Balloons" />
        </div>
      </div>
      <div className="absolute top-80 right-[-8] sm:top-72 sm:right-8 md:top-72 md:right-16 lg:top-88 lg:right-10">
        <div className="w-14 h-14 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
          <img src={bubbles} alt="Bubbles" />
        </div>
      </div>

      {/* Banner Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side - Text and Button */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-black mb-4 leading-snug">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium md:font-extrabold">
              Supercharge
            </span>{" "}
            your <span className="text-purple-500">STARTUP</span> Adventure
          </h1>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-light md:font-medium text-gray-800 mb-6">
            Let's start and grow your startup to{" "}
            <br className="hidden sm:block" />
            the next level.
          </p>
          <button className="bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-lg hover:shadow-lg transition-all">
            <a href="https://www.instagram.com/_pixel_craft__/">View on Instagram →</a>
          </button>
        </div>

        {/* Right Side - Images */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
          {/* Large Background Image */}
          <div className="w-40 h-96 sm:w-80 sm:h-96 md:w-64 md:h-96 lg:w-80 lg:h-96  bg-blue-100 rounded-xl shadow-md overflow-hidden transform">
            <img
              src="https://stored-cf.slickpic.com/MjQ4NDkxYzVkNTRiZjk,/20221019/MTkzMzQ0MDNmNWY5/pm/1600/The_Frame_in_the_Frame_-_Eiffel_Tower.webp"
              alt="Abstract Image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Foreground Image */}
          <div className="w-36 h-80 sm:w-72 sm:h-80 md:w-56 md:h-80 lg:w-72 lg:h-80 bg-gray-100 rounded-xl shadow-md overflow-hidden transform">
            <img
              src="https://thumbs.dreamstime.com/b/collection-dummy-mannequins-assorted-colored-shapes-surrounded-multiple-blocks-vibrant-hues-creates-striking-contrast-296548213.jpg"
              alt="Vibrant Artwork"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="flex justify-center items-center mt-8">
        <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12">
          <img src={wave} alt="Wave" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
