import { motion } from "framer-motion";
import Banner from "./components/Banner";
import Growth from "./components/Growth";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import FAQComponent from "./components/FAQComponent";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhatsAppButton from './components/WhatsAppButton'
import ThemeToggleButton from "./components/ThemeToggleButton";

function App() {
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  
  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <Navbar />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <Banner />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <WhyChooseUs />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <Growth />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <Portfolio />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <AboutUs />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <Services />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <Team />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <FAQComponent />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <HeroSection />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
        <Footer />
        <WhatsAppButton />
        <ThemeToggleButton />
      </motion.div>
      
    </div>
  );
}

export default App;
