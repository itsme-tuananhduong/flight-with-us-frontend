import React, { useContext, useState } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import BoxDatVe from '../components/BoxDatVe/BoxDatVe';
import Navbar from '../shared/components/Navbar';
import BottomNavbar from '../shared/components/BottomNavbar';

import LoadingSpinner from '../shared/components/LoadingSpinner';
import ErrorModal from '../shared/components/ErrorModal';

import './Booking.css';

const Booking = () => {
  const [error, setError] = useState(null);
  const clearError = () => {
    setError(null);
  };
  const [isLoading, setIsLoading] = useState(false);

  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner />}
      <Navbar />
      <div className={theme === 'dark' ? 'booking-page dark' : 'booking-page'}>
        <div className="booking-wrapper">
          <BoxDatVe setIsLoading={setIsLoading} setError={setError} />
        </div>
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default Booking;
