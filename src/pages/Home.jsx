import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TourCard from '../components/TourCard';
import WhyUs from '../components/WhyUs';
import Calendar from '../components/Calendar';
import ReviewCard from '../components/ReviewCard';
import StartJourney from '../components/StartJourney';
import ContactForm from '../components/ContactForm';
import '../styles/home.css';
import { tours, reviews } from '../data';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Hero />
      <section className="tours container">
        <h2>Популярные туры</h2>
        <div className="tours-grid">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
      <WhyUs />
      <Calendar />
      <section className="reviews container">
        <h2>Отзывы путешественников</h2>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
      <StartJourney />
      <ContactForm />
    </motion.div>
  );
};

export default Home;