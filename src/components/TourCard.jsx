import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/tour-card.css';

const TourCard = ({ tour }) => {
  return (
    <motion.div
      className="tour-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={tour.image} alt={tour.title} />
      <h3>{tour.title}</h3>
      <p>{tour.price}</p>
      <Link to={`/tours/${tour.id}`}>Подробнее</Link>
    </motion.div>
  );
};

export default TourCard;
