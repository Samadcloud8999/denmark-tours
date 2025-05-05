import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import '../styles/review-card.css';

const ReviewCard = ({ review }) => {
  return (
    <motion.div
      className="review-card"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="stars">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p>{review.text}</p>
      <h4>{review.author}</h4>
    </motion.div>
  );
};

export default ReviewCard;