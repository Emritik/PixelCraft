import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Ritik Sharma",
      role: "Founder & CEO",
      img: "src\\assets\\images\\ritik.jpg",
      linkedin: "https://www.linkedin.com/in/ritik-sharma-48486722a/",
      instagram: "https://www.instagram.com/emritik/",
    },
    {
      name: "Saksham Rai",
      role: "Co-founder",
      img: "src\\assets\\images\\saksham.png",
      linkedin: "https://www.linkedin.com/in/saksham-rai-a34901241/",
      instagram: "https://www.instagram.com/sakshamrai2320/",
    },
    {
      name: "Vaibhav Upadhyay",
      role: "Data Engineer",
      img: "src\\assets\\images\\jackie.png",
      linkedin: "https://www.linkedin.com/in/vaibhav-upadhyay-78436b221/",
      instagram: "https://www.instagram.com/activevaibhav/",
    },
    {
      name: "Tanishka Vashishtha",
      role: "Frontend Developer",
      img: "src\\assets\\images\\tannu.jpg",
      linkedin: "https://www.linkedin.com/in/tanishka-vashishtha-7a033925a/",
      instagram: "#",
    }
  ];

  return (
    <div className="bg-white py-16 px-8" id="team">
      <h1
        className="md:text-8xl sm:text-7xl text-6xl font-extrabold  text-center mb-16"
        id="heading"
      >
        Meet the <span className="text-purple-600">Artists</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group w-full max-w-xs bg-white shadow-lg rounded-3xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-pink-500"
          >
            {/* Image Container */}
            <div className="overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-[-20px]"
              />
            </div>

            {/* Text Content */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white">
                {member.name}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-200">
                {member.role}
              </p>
            </div>

            {/* Social Media Icons with Transition */}
            <div className="absolute bottom-0 flex items-center justify-center gap-4 w-full py-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
