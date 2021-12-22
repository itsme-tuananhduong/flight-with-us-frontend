import React, { useContext } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import Navbar from '../shared/components/Navbar';
import BottomNavbar from '../shared/components/BottomNavbar';
import './UserFlight.css';

const UserFlight = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Navbar />
      <div
        className={
          theme === 'dark' ? 'user-flight-page dark' : 'user-flight-page'
        }
      >
        user-flight
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default UserFlight;
