import React from "react";
import wave from "../assets/images/wave.png";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Website",
      image:
        "https://api.backlinko.com/app/uploads/2024/06/how-to-create-a-website-blog-post-image.png",
    },
    {
      id: 2,
      name: "Logo",
      image:
        "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_02.jpg",
    },
    {
      id: 3,
      name: "Brand Identity",
      image:
        "https://thumbs.dreamstime.com/b/collection-dummy-mannequins-assorted-colored-shapes-surrounded-multiple-blocks-vibrant-hues-creates-striking-contrast-296546738.jpg",
    },
    {
      id: 4,
      name: "Marketing",
      image:
        "https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_04.jpg",
    },
    {
      id: 5,
      name: "App Development",
      image:
        "https://endlessts.com/wp-content/uploads/2024/04/5794866-scaled.jpg",
    },
    {
      id: 6,
      name: "Social Media",
      image:
        "https://shoutcart.com/uploads/gig/395038693994dcc0e5112386b980fd36.jpg",
    },
    {
      id: 7,
      name: "Online Coachings",
      image:
        "https://copymate.app/wp-content/uploads/2024/02/coaching-biznesowy-rola-coachingu-w-rozwoju-przedsiebiorczosci-800x694.jpg",
    },
    {
      id: 8,
      name: "SEO",
      image:
        "https://www.agilateur.fr/wp-content/uploads/2024/03/stratege-4-855x855.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gradient-to-b dark:to-pink-400 dark:from-blue-900 py-12" id="services">
      <h1 className="md:text-8xl dark:text-gray-300 sm:text-7xl text-6xl font-extrabold  text-center mb-16" id="heading">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`bg-white rounded-lg shadow-lg w-80 h-[30rem] p-6 text-center ${
              index % 2 === 0 ? "mt-8" : "mt-16"
            }`}
          >
            <img
              src={service.image}
              alt={service.name}
              className="rounded-lg mb-6 w-full h-96 object-cover"
            />
            <h3 className="text-3xl font-extrabold text-gray-700 hover:text-pink-500 transition duration-300">
              {service.name}
            </h3>
          </div>
        ))}
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

export default Services;
