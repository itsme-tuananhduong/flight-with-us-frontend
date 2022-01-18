import React, { useState } from 'react';

import './TopNav.css';

import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';

import ThemeMenu from './ThemeMenu';

import notifications from '../../assets/JsonData/notification.json';

import Sidebar from './Sidebar';

import user_image from '../../assets/images/admin.svg';

import user_menu from '../../assets/JsonData/user_menus.json';

const curr_user = {
  display_name: 'ADMIN',
  image: user_image,
};

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const Topnav = () => {
  const [active, setActive] = useState(false);

  const toggleSidebar = () => {
    setActive(true);
  };

  return (
    <div className="topnav">
      <div className="topnav-left">
        <div className="topnav-bar">
          <svg
            onClick={toggleSidebar}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
          <Sidebar active={active} setActive={setActive} />
        </div>

        <div className="topnav__search">
          <input
            className="admin-input"
            type="text"
            placeholder="Tìm kiếm..."
          />
          <i className="bx bx-search"></i>
        </div>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">Xem tất cả</Link>}
          />
          {/* dropdown here */}
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
