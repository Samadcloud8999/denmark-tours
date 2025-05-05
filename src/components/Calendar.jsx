import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import '../styles/calendar.css';

const dates = [
  { date: '15 мая 2025', tour: 'Копенгаген классический' },
  { date: '22 мая 2025', tour: 'Фьорды Дании' },
  { date: '5 июня 2025', tour: 'Замки Зеландии' },
];

const Calendar = () => {
  return (
    <section className="calendar container">
      <h2>Календарь туров</h2>
      <motion.div
        className="dates-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {dates.map((item, index) => (
          <motion.div
            key={index}
            className="date"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaCalendarAlt className="icon" />
            <h3>{item.date}</h3>
            <p>{item.tour}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Calendar;