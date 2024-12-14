import React from "react";
import wave from "../assets/images/wave.png";
import cabs from "../assets/images/cabs.png";
import coaching from "../assets/images/coaching.png";
import feedope from "../assets/images/feedope.jpg";

const Portfolio = () => {
  return (
    <div className="bg-white py-10">
      <h1
        className="md:text-8xl sm:text-7xl text-6xl font-extrabold text-center mb-16"
        id="heading"
      >
        Our Portfolio
      </h1>
      <div className="flex justify-center gap-5 flex-wrap">
        <div className="w-80 h-96 bg-gray-100 relative overflow-hidden shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <img
            src={cabs}
            className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 hover:blur-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <h2 className="text-white text-2xl font-bold mb-2">
              Cabs-outstation
            </h2>
            <p className="text-white text-lg">
              A platform for outstation cab booking.
            </p>
          </div>
        </div>
        <div className="w-80 h-96 bg-gray-100 relative overflow-hidden shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <img
            src={coaching}
            className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 hover:blur-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <h2 className="text-white text-2xl font-bold mb-2">
              Commerce2Fusion
            </h2>
            <p className="text-white text-lg">E-commerce solutions provider.</p>
          </div>
        </div>
        <div className="w-80 h-96 bg-gray-100 relative overflow-hidden shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <img
            src={feedope}
            className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 hover:blur-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <h2 className="text-white text-2xl font-bold mb-2">Feedope</h2>
            <p className="text-white text-lg">
              Digital Marketing Agency in Hisar.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex justify-center items-center sm:bottom-0">
        <div className="w-16 h-12 sm:w-20 sm:h-12 md:w-20 md:h-12 lg:w-20 lg:h-12">
          <img src={wave} alt="Wave" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
