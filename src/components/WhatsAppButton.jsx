import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a
        href="https://wa.me/+919125545701" // replace by  number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-400 text-white p-3 rounded-lg hover:bg-green-500 transition-all duration-300 relative group"
      >
        <FaWhatsapp size={30} />
        <span className="ml-2 text-sm hidden group-hover:block">
          Connect on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
