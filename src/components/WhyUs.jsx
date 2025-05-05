import { motion } from 'framer-motion';
import { FaCheck, FaUser, FaHeadset } from 'react-icons/fa';
import '../styles/why-us.css';

const features = [
  { icon: <FaCheck />, title: 'Гарантия качества', description: 'Надёжные туры с проверенными маршрутами.' },
  { icon: <FaUser />, title: 'Опытные гиды', description: 'Профессионалы, знающие Данию.' },
  { icon: <FaHeadset />, title: 'Поддержка 24/7', description: 'Мы всегда на связи.' },
];

const WhyUs = () => {
  return (
    <section className="why-us container">
      <h2>Почему выбирают нас</h2>
      <motion.div
        className="features-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyUs;