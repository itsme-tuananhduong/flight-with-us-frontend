import { useContext } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import './Admin.css';

const Admin = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? 'admin-page dark' : 'admin-page'}>
      admin
    </div>
  );
};

export default Admin;
