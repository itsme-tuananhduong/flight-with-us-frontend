import React, { useContext, useState } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import Navbar from '../shared/components/Navbar';
import BottomNavbar from '../shared/components/BottomNavbar';
import SearchByMonth from '../components/SearchByMonth';
import SearchByWeek from '../components/SearchByWeek';

import LoadingSpinner from '../shared/components/LoadingSpinner';
import ErrorModal from '../shared/components/ErrorModal';

import './Result.css';

const Result = ({ flag }) => {
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
      <div className={theme === 'dark' ? 'result-page dark' : 'result-page'}>
        <div className="result-wrapper">
          {flag === 0 && (
            <SearchByWeek setIsLoading={setIsLoading} setError={setError} />
          )}
          {flag === 1 && (
            <SearchByMonth setIsLoading={setIsLoading} setError={setError} />
          )}
        </div>
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default Result;
