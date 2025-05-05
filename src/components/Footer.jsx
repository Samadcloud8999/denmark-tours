import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <div className="footer-content">
          <p><FaPhone /> +509190706</p>
          <p><FaEnvelope /> samandartolubaev2@gmail.com</p>
          <p><FaMapMarkerAlt /> Копенгаген, Дания</p>
        </div>
        <p className="copyright">© 2025 Denmark Tours. права Альфо зашищены .</p>
      </div>
    </motion.footer>
  );
};

export default Footer;