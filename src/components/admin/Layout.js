import React, { useEffect } from 'react';

import './Layout.css';

import Sidebar from './Sidebar';
import TopNav from './TopNav';
import Customers from '../../pages/Admin/Customers';
import Dashboard from '../../pages/Admin/Dashboard';
import Products from '../../pages/Admin/Products';

import { useSelector, useDispatch } from 'react-redux';

import ThemeAction from '../../redux/actions/ThemeAction';

const Layout = (props) => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');

    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
      <Sidebar {...props} />
      <div className="layout__content">
        <TopNav />
        <div className="layout__content-main">
          {props.location === '/admin/customers' && <Customers />}
          {props.location === '/admin/dashboard' && <Dashboard />}
          {props.location === '/admin/products' && <Products />}
          {/* Add Admin Route Here */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
