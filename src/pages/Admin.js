import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeContext } from '../shared/context/ThemeProvider';

import './Admin.css';

import '../assets/boxicons-2.0.7/css/boxicons.min.css';
import '../assets/css/grid.css';
import '../assets/css/theme.css';
import '../assets/css/index.css';

const Admin = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? 'admin-page dark' : 'admin-page'}>
      <div className="admin-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
