import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container header-container">
        <div className="logo">
          <FaMapMarkerAlt /> Denmark Tours
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <AnimatePresence>
          {(menuOpen || window.innerWidth > 768) && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NavLink to="/" >
                Главная
              </NavLink>
              <NavLink to="/tours" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                Туры
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                О Дании
              </NavLink>
              <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                Контакты
              </NavLink>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
