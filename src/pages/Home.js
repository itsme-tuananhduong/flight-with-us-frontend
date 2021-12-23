import React, { useContext } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import BoxCard from '../components/BoxCard';
import CustomerCare from '../components/CustomerCare/CustomerCare';
import FormSearch from '../components/FormSearch/FormSearch';
import Navbar from '../shared/components/Navbar';
import BottomNavbar from '../shared/components/BottomNavbar';
import './Home.css';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Navbar />
      <div className={theme === 'dark' ? 'home-page dark' : 'home-page'}>
        <div className="home-wrapper">
          <FormSearch />
          <CustomerCare />
          <BoxCard />
        </div>
      </div>
      <BottomNavbar />
    </React.Fragment>
  );
};

export default Home;
