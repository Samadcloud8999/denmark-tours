import { motion } from 'framer-motion';
import TourCard from '../components/TourCard';
import '../styles/tours.css';
import { tours } from '../data';

const Tours = () => {
  return (
    <motion.section
      className="tours-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1>Все туры</h1>
      <div className="tours-grid">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </motion.section>
  );
};

export default Tours;