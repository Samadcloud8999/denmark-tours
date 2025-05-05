import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import '../styles/tour-details.css';
import { tours } from '../data';

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) return <p>Тур не найден</p>;

  return (
    <motion.section
      className="tour-details container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1>{tour.title}</h1>
      <motion.img
        src={tour.image}
        alt={tour.title}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <p className="price">Цена: {tour.price}</p>
      <p className="description">
        Подробное описание тура: Насладитесь красотами Дании с нашими профессиональными гидами...
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Забронировать
      </motion.button>
    </motion.section>
  );
};

export default TourDetails;