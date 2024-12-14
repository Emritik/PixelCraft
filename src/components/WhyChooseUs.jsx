import card from "../assets/images/card.png";
import wallet from "../assets/images/wallet.png";
import payment from "../assets/images/payment.png";
import link from "../assets/images/link.png";
import reliability from "../assets/images/reliability.png";
import standard from "../assets/images/standard.png";
import wave from '../assets/images/wave.png'

const WhyChooseUs = () => {
  return (
    <div className="relative bg-white py-16" id="whyus">
      <h1 className="md:text-8xl sm:text-7xl text-6xl font-extrabold text-center mb-16" id="heading">
        Why choose Us
      </h1>
      {/* <h2 className="text-5xl font-extrabold text-center mb-16" id="heading">Why Choose Us</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-12 max-w-4xl mx-auto">
        {/* Card 1 */}
        <div className="relative bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
          <div className="absolute -top-4 -left-4">
            <img
              src={payment} // Replace with your image URL
              alt="wallet icon"
              className="w-20 h-20"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-2xl md:text-3xl  font-extrabold text-center mb-2">Affordable Price</h3>
            <p className="text-gray-600 text-center">
              We provide websites to all startups at very affordable prices.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
          <div className="absolute -top-12 -right-4">
            <img
              src={link}
              className="w-20 h-20"
              alt="personal connection icon"
            />
          </div>
          <div>
            <h3 className="font-extrabold mb-2 text-center text-2xl sm:text-2xl md:text-3xl">Personal Connection</h3>
            <p className="text-gray-600 text-center">
              We build a personal connection with all startup owners.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
          <div className="absolute -bottom-6 -left-4 md:-bottom-12">
            <img
              src={standard} // Replace with your image URL
              alt="industry standard icon"
              className="w-20 h-20"
            />
          </div>
          <div>
            <h3 className="text-center font-extrabold mb-2 text-2xl sm:text-2xl md:text-3xl">Industry Standard</h3>
            <p className="text-gray-600 text-center">
              We ensure our work meets industry standards.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative bg-white border border-gray-200 shadow-lg rounded-lg p-6 flex items-center transform hover:scale-105 transition-transform duration-300">
          <div className="absolute -bottom-8 md:-bottom-12 -right-4">
            <img
              src={reliability} // Replace with your image URL
              alt="trust icon"
              className="w-20 h-20"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-center mb-2">100% Trust</h3>
            <p className="text-gray-600 text-center">
              We give 100% trust to our clients and their startups.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Images */}
      <div className="absolute top-40 sm:top-36 left-60 sm:left-64">
        <img
          src={card} // Replace with your image URL
          alt="decorative"
          className="w-12 h-12 sm:w-10 sm:h-10"
        />
      </div>
      <div className="absolute bottom-24 sm:bottom-20 sm:right-28 right-64 md:right-24 md:bottom-64">
        <img
          src={wallet} // Replace with your image URL
          alt="decorative"
          className="w-12 h-12"
        />
      </div>
      <div className="flex justify-center items-center sm:bottom-0">
        <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12">
          <img src={wave} alt="Wave" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
