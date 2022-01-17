import React, { useContext, useState } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import BoxCard from '../components/BoxCard';
import CustomerCare from '../components/CustomerCare/CustomerCare';
import FormSearch from '../components/FormSearch/FormSearch';
import Navbar from '../shared/components/Navbar';
import BottomNavbar from '../shared/components/BottomNavbar';

import LoadingSpinner from '../shared/components/LoadingSpinner';
import ErrorModal from '../shared/components/ErrorModal';

import './Home.css';

const Home = () => {
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
      <div className={theme === 'dark' ? 'home-page dark' : 'home-page'}>
        <div className="home-wrapper">
          <FormSearch setIsLoading={setIsLoading} setError={setError} />
          <CustomerCare />
          <BoxCard />

          <button className="home-btn">Xem thêm</button>
        </div>
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default Home;
