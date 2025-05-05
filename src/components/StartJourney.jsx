import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/start-journey.css';

const StartJourney = () => {
  return (
    <motion.section
      className="start-journey"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.h2
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Начните своё путешествие
        </motion.h2>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
  <Link to="/booking" className="button">
    Забронировать тур
  </Link>
</motion.div>
      </div>
    </motion.section>
  );
};

export default StartJourney;