import React, { useEffect } from 'react';

import './layout.css';

import Sidebar from './Sidebar';
import TopNav from './TopNav';
import Switch from './Switch';
import Dashboard from '../../pages/admin/Dashboard';
import Customers from '../../pages/admin/Customers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import ThemeAction from '../../redux/actions/ThemeAction';

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');

    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/admin'
          element={(props) => {
            return (
              <div
                className={`layout ${themeReducer.mode} ${themeReducer.color}`}
              >
                <Sidebar {...props} />
                <div className='layout__content'>
                  <TopNav />
                  <div className='layout__content-main'></div>
                </div>
              </div>
            );
          }}
        />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/customers' element={<Customers />} />
      </Routes>
      {/* <Route
        element={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar {...props} />
            <div className='layout__content'>
              <TopNav />
              <div className='layout__content-main'>
                <Switch />
              </div>
            </div>
          </div>
        )}
      /> */}
    </BrowserRouter>
  );
};

export default Layout;
