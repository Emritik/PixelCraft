import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import giftbox from "../assets/images/giftbox.png";
import sheild from "../assets/images/sheild.png";
import wave from "../assets/images/wave.png";

const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-8" id="about">
      <h1 className="md:text-8xl sm:text-7xl text-6xl font-extrabold  text-center mb-16" id="heading">
        About The <br /> PixelCraft
      </h1>

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-20">
        <div className="flex justify-center lg:w-1/2">
          <img
            id="img"
            src={about1}
            alt="Create Startup Illustration"
            className="w-full max-w-md"
          />
        </div>
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-purple-700 text-xl font-bold uppercase">
            Create and Invest
          </h1>
          <h1 className="text-black sm:text-5xl sm:font-extrabold text-5xl font-bold leading-tight mt-4">
            Create your own <span className="text-pink-600">STARTUP</span>
          </h1>
          <p className="text-gray-500 text-lg mt-4">
            We are 100% committed to taking your startup from zero to step
            hundred.
          </p>
          <div className="flex flex-col justify-around mt-6">
            <div className="text-center md:text-left">
              <h3 className="text-black text-6xl font-bold">1.5+</h3>
              <p className="text-gray-500">Experience More Than 1.5 years.</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-black text-6xl font-bold">2.5x</h3>
              <p className="text-gray-500">
                We claim that we are 2.5 times faster, more effective and
                perform better than others.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-20">
        <div className="md:text-left text-center lg:w-1/2 lg:pl-10">
          <h1 className="text-purple-700 text-xl font-bold uppercase">
            Sync and Track
          </h1>
          <h2 className="text-black sm:text-4xl sm:font-extrabold md:text-6xl text-4xl font-bold leading-tight mt-4">
            Grow Your <span className="text-pink-600">STARTUP</span> To The Next
            Level
          </h2>
          <p className="text-gray-500 text-lg mt-4">
            We help all startups in execution, legally as well as research and
            development.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 rounded-2xl text-purple-600 w-16 h-16 flex items-center justify-center">
                <img src={sheild} alt="Shield Icon" />
              </div>
              <span>And we do all this with 100% accuracy.</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 text-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center">
                <img src={giftbox} alt="Giftbox Icon" />
              </div>
              <span>And we do all this within 1 month.</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img
            src={about2}
            id="img"
            alt="Startup Growth Illustration"
            className="w-full max-w-md"
          />
        </div>
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

export default AboutUs;
