import { FaLinkedin, FaInstagram } from "react-icons/fa";
import ritik from "../assets/images/ritik.jpg";
import tannu from "../assets/images/tannu.jpg";
import saksham from "../assets/images/saksham.png";
import jackie from "../assets/images/jackie.png";

const Team = () => {
  return (
    <div className="bg-white dark:bg-gradient-to-b dark:from-pink-400 dark:to-blue-900 py-16 px-8" id="team">
      <h1
        className="md:text-8xl sm:text-7xl text-6xl font-extrabold  text-center mb-16 dark:text-gray-200"
        id="heading"
      >
        Meet the <span className="text-purple-600 dark:text-yellow-400">Artists</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        <div className="relative group w-full max-w-xs bg-white shadow-lg rounded-3xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-pink-500">
          {/* Image Container */}
          <div className="overflow-hidden">
            <img
              src={ritik}
              alt='ritik-image'
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-[-20px]"
            />
          </div>

          {/* Text Content */}
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">
              Ritik Sharma
            </h3>
            <p className="text-gray-500 group-hover:text-gray-200">
            Founder & CEO
            </p>
          </div>

          {/* Social Media Icons with Transition */}
          <div className="absolute bottom-0 flex items-center justify-center gap-4 w-full py-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
            <a
              href="https://www.instagram.com/emritik/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.linkedin.com/in/ritik-sharma-48486722a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="relative group w-full max-w-xs bg-white shadow-lg rounded-3xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-pink-500">
          {/* Image Container */}
          <div className="overflow-hidden">
            <img
              src={saksham}
              alt="Saksham image"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-[-20px]"
            />
          </div>

          {/* Text Content */}
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">
              Saksham Rai
            </h3>
            <p className="text-gray-500 group-hover:text-gray-200">
            Co-founder
            </p>
          </div>

          {/* Social Media Icons with Transition */}
          <div className="absolute bottom-0 flex items-center justify-center gap-4 w-full py-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
            <a
              href="https://www.linkedin.com/in/saksham-rai-a34901241/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href= "https://www.instagram.com/sakshamrai2320/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="relative group w-full max-w-xs bg-white shadow-lg rounded-3xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-pink-500">
          {/* Image Container */}
          <div className="overflow-hidden">
            <img
              src={jackie}
              alt='Vaibhav image'
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-[-20px]"
            />
          </div>

          {/* Text Content */}
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">
            Vaibhav Upadhyay
            </h3>
            <p className="text-gray-500 group-hover:text-gray-200">
              Data Engineer
            </p>
          </div>

          {/* Social Media Icons with Transition */}
          <div className="absolute bottom-0 flex items-center justify-center gap-4 w-full py-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
            <a
              href="https://www.linkedin.com/in/vaibhav-upadhyay-78436b221/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/activevaibhav/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="relative group w-full max-w-xs bg-white shadow-lg rounded-3xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-pink-500">
          {/* Image Container */}
          <div className="overflow-hidden">
            <img
              src={tannu}
              alt="Tanishka Image"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-[-20px]"
            />
          </div>

          {/* Text Content */}
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">
              Tanishka Vashishtha
            </h3>
            <p className="text-gray-500 group-hover:text-gray-200">
              Frontend Developer
            </p>
          </div>

          {/* Social Media Icons with Transition */}
          <div className="absolute bottom-0 flex items-center justify-center gap-4 w-full py-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
            <a
              href="https://www.linkedin.com/in/tanishka-vashishtha-7a033925a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

