import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import '../styles/contact-from.css';

const ContactForm = () => {
  return (
    <section className="contact-form container">
      <h2>Свяжитесь с нами</h2>
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input type="text" placeholder="Имя" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Сообщение" required></textarea>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaEnvelope /> Отправить
        </motion.button>
      </motion.form>
    </section>
  );
};

export default ContactForm;