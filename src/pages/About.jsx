import { motion } from 'framer-motion';
import '../styles/about.css';

const About = () => {
  return (
    <motion.section
      className="about container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1>О Дании</h1>
      <p>
        Дания — страна сказок, замков и современных городов. Откройте для себя Копенгаген с его
        яркими улицами, исторические замки Зеландии и живописные фьорды.
      </p>
      <div className="gallery">
        <motion.img
          src="src/assets/denmark1.jpg"
          alt="Denmark"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src="src/assets/denmark2.jpg"
          alt="Denmark"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.img
          src="src/assets/denmark3.jpg"
          alt="Denmark"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
    </motion.section>
  );
};

export default About;