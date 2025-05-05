import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import '../styles/contacts.css';

const Contacts = () => {
  return (
    <motion.section
      className="contacts container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1>Контакты</h1>
      <ContactForm />
      <motion.div
        className="map"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.0939683617667!2d12.568337315924405!3d55.67609698053425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533f1c0c4e3d%3A0x4e36b47e8e8b1c1e!2sCopenhagen%2C%20Denmark!5e0!3m2!1sen!2sus!4v1634567891234!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '20px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.section>
  );
};

export default Contacts;