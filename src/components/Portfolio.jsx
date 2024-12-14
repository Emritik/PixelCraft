import React from 'react';
import wave from '../assets/images/wave.png'

const websites = [
  {
    title: 'Cabs-outstation',
    about: 'A platform for outstation cab booking.',
    image: 'src\\assets\\images\\cabs.png',
    link: 'https://cabs-outstation-1.web.app/',
  },
  {
    title: 'Commerce2Fusion',
    about: 'E-commerce solutions provider.',
    image: 'src\\assets\\images\\coaching.png',
    link: 'https://commerce2fusion.com/',
  },
  {
    title: 'Feedope',
    about: 'Digital Marketing Agency in Hisar',
    image: 'src\\assets\\images\\feedope.jpg',
    link: 'https://example3.com',
  },
];

const Portfolio = () => {
  return (
    <div className="bg-white py-10">
      <h1 className="md:text-8xl sm:text-7xl text-6xl font-extrabold text-center mb-16" id="heading">
        Our Portfolio
      </h1>
      <div className="flex justify-center gap-5 flex-wrap">
        {websites.map((website, index) => (
          <div
            key={index}
            className="w-80 h-96 bg-gray-100 relative overflow-hidden shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={website.image}
              alt={website.title}
              className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 hover:blur-md"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <h2 className="text-white text-2xl font-bold mb-2">{website.title}</h2>
              <p className="text-white text-lg">{website.about}</p>
            </div>
          </div>
        ))}
      </div>
      <br /><br />
      <div className="flex justify-center items-center sm:bottom-0">
        <div className="w-16 h-12 sm:w-20 sm:h-12 md:w-20 md:h-12 lg:w-20 lg:h-12">
          <img src={wave} alt="Wave" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
