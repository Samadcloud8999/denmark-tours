import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Contacts from './pages/Contacts';
import TourDetails from './pages/TourDetails';
import Booking from './pages/Booking';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </motion.main>
      <Footer />
    </Router>
  );
}

export default App;