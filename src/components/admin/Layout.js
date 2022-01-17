import React, { useEffect } from 'react';

import './Layout.css';

import Sidebar from './Sidebar';
import TopNav from './TopNav';
import Flights from '../../pages/Admin/Flights';
import Dashboard from '../../pages/Admin/Dashboard';
import AddFlights from '../../pages/Admin/AddFlights';
import Accounts from '../../pages/Admin/Accounts';
import Passengers from '../../pages/Admin/Passengers';
import InvoiceDetail from '../../pages/Admin/InvoiceDetail';

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
          {props.location === '/admin/flights' && <Flights />}
          {props.location === '/admin/dashboard' && <Dashboard />}
          {props.location === '/admin/add-flight' && <AddFlights />}
          {props.location === '/admin/accounts' && <Accounts />}
          {props.location === '/admin/passengers' && <Passengers />}
          {props.location === '/admin/invoice-detail' && <InvoiceDetail />}
          {/* Add Admin Route Here */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
