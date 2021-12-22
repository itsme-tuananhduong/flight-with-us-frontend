import React, { useContext } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import Navbar from '../shared/components/Navbar';
import BottomNavbar from '../shared/components/BottomNavbar';
import './Booking.css';

const Booking = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Navbar />
      <div className={theme === 'dark' ? 'booking-page dark' : 'booking-page'}>
        booking
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default Booking;
