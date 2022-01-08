import React, { useContext } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import Navbar from '../shared/components/Navbar';
import BottomNavbar from '../shared/components/BottomNavbar';
import SearchByMonth from '../components/SearchByMonth';
import SearchByWeek from '../components/SearchByWeek';

import './Result.css';

const Result = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Navbar />
      <div className={theme === 'dark' ? 'result-page dark' : 'result-page'}>
        <div className="result-wrapper">
          <SearchByWeek />
          {/* <SearchByMonth /> */}
        </div>
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default Result;
