import React, { useState, useEffect } from "react";
import icon1 from "../assets/images/menu.png";
import whiteLogo from "../assets/images/Whitebg.png";  // White logo for light mode
import blackLogo from "../assets/images/Blackbg.png";  // Black logo for dark mode

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { id: 1, name: "Home", link: "#banner" },
    { id: 2, name: "Services", link: "#services" },
    { id: 3, name: "Why Us", link: "#whyus" },
    { id: 4, name: "About", link: "#about" },
    { id: 5, name: "Blogs", link: "#blog" },
    { id: 6, name: "Team", link: "#team" },
  ];

  // Detect if dark mode is enabled on the initial page load
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
      document.documentElement.classList.add('dark'); // Manually apply dark mode if detected
    }
  }, []);

  return (
    <nav className="bg-transparent backdrop-blur-md px-6 fixed top-0 left-0 right-0 z-50">
      <style>
        {`
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Disable pointer events for background when sidebar is open */
          .blurred-content {
            pointer-events: none;
          }
        `}
      </style>
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between ${
          isOpen ? "blurred-content" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-40 h-28 flex items-center justify-center">
            <img
              src={blackLogo}
              className="h-20 w-40 dark:hidden" 
              alt="Pixel Craft Logo"
            />
            <img
              src={whiteLogo}
              className="h-32 w-40 hidden dark:block" 
              alt="Pixel Craft Logo"
            />
          </div>
        </div>

        {/* Links for larger screens */}
        <ul className="hidden md:flex space-x-8 text-black dark:text-white font-semibold text-lg">
          {Links.map((link) => (
            <li
              className="hover:text-purple-500 transition-colors duration-200 cursor-pointer"
              key={link.id}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Connect Button */}
        <div className="hidden md:block ml-4">
          <button
            className="text-black border-2 font-semibold text-lg border-gray-400 px-6 py-2 rounded-full transition-all duration-400 hover:bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white dark:text-white dark:bg-gradient-to-br dark:from-purple-500 dark:to-pink-500 dark:border-0"
            onClick={() => window.open("https://wa.me/+919125545701", "_blank")}
          >
            Connect On WhatsApp
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black hover:text-purple-500"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={icon1}
              alt="open menu"
              className="h-8 w-8" // Consistent height and width
            />
          </button>
        </div>
      </div>

      {/* Sidebar for smaller screens */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-white dark:bg-gray-700 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="w-28 h-auto flex items-center justify-center">
            <img
              src={blackLogo}
              className="h-20 w-auto dark:hidden"
              alt="Pixel Craft Logo"
            />
            <img
              src={whiteLogo}
              className="h-20 w-auto hidden dark:block"
              alt="Pixel Craft Logo"
            />
          </div>
          <button
            className="text-black dark:text-white text-3xl hover:text-fuchsia-400 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="mt-8 space-y-6 px-6 text-black dark:text-white items-start font-semibold text-lg">
          {Links.map((link) => (
            <li
              className="hover:text-purple-500 transition-colors duration-200 cursor-pointer border-b border-gray-300 pb-2"
              key={link.id}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Connect Button */}
        <div className="mt-8 px-6">
          <button
            onClick={() => window.open("https://wa.me/+919125545701", "_blank")}
            className="w-full text-black border-2 font-semibold text-lg border-gray-400 px-6 py-2 rounded-full transition-all duration-400 hover:bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white dark:bg-gradient-to-br dark:from-purple-500 dark:to-pink-500  dark:text-white dark:hover:bg-gradient-to-br dark:hover:from-purple-900 dark:hover:to-pink-900"
          >
            Connect On WhatsApp
          </button>
        </div>
      </div>

      {/* Background Blur and Click-to-Close */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
