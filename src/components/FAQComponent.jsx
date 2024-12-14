import React, { useState } from "react";
import wave from '../assets/images/wave.png'

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your agency different from other startup development agencies?",
      answer: "Our agency focuses on personalized solutions tailored to your startup's unique needs, ensuring rapid scalability and exceptional user experience.",
    },
    {
      question: "What stage of startups do you typically work with?",
      answer: "We work with startups at all stages, from ideation to scaling, helping them navigate their growth journey effectively.",
    },
    {
      question: "What kind of websites and applications do you develop?",
      answer: "We specialize in developing high-performance websites, mobile applications, and web apps across various industries.",
    },
    {
      question: "How do you help me market and brand my startup effectively?",
      answer: "We provide comprehensive branding strategies, including logo design, social media marketing, and targeted campaigns.",
    },
    {
      question: "How do you communicate and collaborate with your clients?",
      answer: "We use modern collaboration tools like Slack, Zoom, and Trello to ensure seamless communication and project updates.",
    },
    {
      question: "How much does it cost to work with your agency?",
      answer: "Our pricing is flexible and depends on the scope of the project. Contact us for a tailored quote.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-6 md:text-6xl" id="heading">Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            {/* FAQ Question */}
            <button
              className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-2xl transform transition-transform duration-300">
                {openIndex === index ? "˄" : "˅"}
              </span>
            </button>

            {/* FAQ Answer with Transition */}
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-4 text-gray-600 border-t">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className="flex justify-center items-center sm:bottom-0">
        <div className="w-20 h-16 sm:w-20 sm:h-12 md:w-20 md:h-16 lg:w-20 lg:h-12">
          <img src={wave} alt="Wave" />
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
