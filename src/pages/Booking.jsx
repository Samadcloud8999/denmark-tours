import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import '../styles/booking.css';

const Booking = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!cardDetails.cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Номер карты должен содержать 16 цифр';
    }
    if (!cardDetails.cardHolder.trim()) {
      newErrors.cardHolder = 'Введите имя владельца';
    }
    if (!cardDetails.expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      newErrors.expiry = 'Формат: ММ/ГГ';
    }
    if (!cardDetails.cvv.match(/^\d{3}$/)) {
      newErrors.cvv = 'CVV должен содержать 3 цифры';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Данные карты отправлены (демо)!');
      setCardDetails({ cardNumber: '', cardHolder: '', expiry: '', cvv: '' });
    }
  };

  return (
    <motion.section
      className="booking container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1>Оформление бронирования</h1>
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="cardNumber">Номер карты</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
          />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder">Имя владельца</label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={cardDetails.cardHolder}
            onChange={handleInputChange}
            placeholder="Иван Иванов"
          />
          {errors.cardHolder && <span className="error">{errors.cardHolder}</span>}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Срок действия</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={cardDetails.expiry}
              onChange={handleInputChange}
              placeholder="ММ/ГГ"
              maxLength="5"
            />
            {errors.expiry && <span className="error">{errors.expiry}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleInputChange}
              placeholder="123"
              maxLength="3"
            />
            {errors.cvv && <span className="error">{errors.cvv}</span>}
          </div>
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaCreditCard className="icon" /> Подтвердить
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Booking;