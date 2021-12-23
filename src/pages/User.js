import React, { useContext } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import UserInfo from '../components/UserInfo/UserInfo';
import Navbar from '../shared/components/Navbar';
import BottomNavbar from '../shared/components/BottomNavbar';
import './User.css';

const User = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Navbar />
      <div className={theme === 'dark' ? 'user-page dark' : 'user-page'}>
        <div className="user-wrapper">
          <UserInfo />
        </div>
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default User;
