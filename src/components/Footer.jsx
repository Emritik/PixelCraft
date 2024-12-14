import React from "react";
import whiteLogo from "../assets/images/Whitebg.png";
import blackLogo from "../assets/images/Blackbg.png";
import giftbox from "../assets/images/giftbox.png";
import cross from "../assets/images/cross.png";
import wallet from "../assets/images/wallet.png";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gradient-to-b dark:to-pink-400 dark:from-blue-900 relative sm:mt-10 -inset-0 -mt-20 dark:sm:-mt-2">
      {" "}
      <div className="text-center">
        

        <img
          src={blackLogo}
          className="w-40 dark:hidden mx-auto h-28 md:w-72 mb-4"
          alt="Pixel Craft Logo"
        />
        <img
          src={whiteLogo}
          className="h-40 w-40 hidden dark:block mx-auto md:w-72 mb-4"
          alt="Pixel Craft Logo"
        />
        <p className="text-gray-800 dark:text-gray-300 text-xl font-medium">
          We help startups across India to reach their heights.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4 text-black">
          {/* Example Social Icons */}
          <a
            href="mailto:pixelcraftinst@gmail.com"
            aria-label="email"
            className="hover:text-gray-700"
          >
            <i className="fa fa-envelope text-2xl" aria-hidden="true"></i>
          </a>

          <a href="https://www.instagram.com/_pixel_craft__/">
            <i className="fab fa-instagram text-2xl"></i>
          </a>

          <a
            href="https://www.youtube.com/@PixelCraftinst"
            aria-label="YouTube"
            className="hover:text-gray-700"
          >
            <i className="fab fa-youtube text-2xl"></i>
          </a>
        </div>
      </div>
      {/* Footer Links */}
      <div className="text-center mt-10 text-gray-400 dark:text-gray-200 text-sm">
        <p className="mb-2">© 2024 PixelCraft. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-600">
            Privacy policy
          </a>
          <a href="#" className="hover:text-gray-600">
            Terms of use
          </a>
        </div>
      </div>
      {/* Decorative Dots */}
      <div className="absolute top-0 right-0 sm:top-20 sm:left-12 md:left-40 md:bottom-10">
        <div className="w-16 h-16 rounded-full">
          <img src={wallet} alt="" />
        </div>
      </div>
      <div className="absolute sm:bottom-60 bottom-48 sm:right-20 md:right-52 md:top-16">
        <div className="w-16 h-16 rounded-full">
          <img src={cross} alt="" />
        </div>
      </div>
      <div className="absolute sm:bottom-20 sm:right-12 md:right-20 md:bottom-0 bottom-24 right-12">
        <div className="w-12 h-12 rounded-full">
          <img src={giftbox} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
