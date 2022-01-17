import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeProvider';

import { AuthContext } from '../context/auth-context';

import './BottomNavbar.css';

const MenuManage = ({ setShowManage, showManage }) => {
  const auth = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(auth.isLoggedIn);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const logoutHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div className={showManage ? 'menu-manage active' : 'menu-manage'}>
      <div className='menu-manage-heading'>
        <div className=' close-manage'>
          <svg
            data-name='Group 28853'
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            className='manage-icon-close'
            focusable='false'
            viewBox='0 0 24 24'
            aria-hidden='true'
            onClick={() => setShowManage(false)}
          >
            <path
              data-name='Rectangle 4424'
              fill='none'
              d='M0 24V0h24v24z'
            ></path>
            <g data-name='Group 27961'>
              <path
                data-name='Path 20155'
                d='M15.241 11.761L9.58 6.1a.34.34 0 00-.48.48L14.519 12 9.1 17.419a.338.338 0 000 .48.342.342 0 00.239.1.331.331 0 00.239-.1l5.661-5.66a.338.338 0 00.002-.478z'
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className='menu-manage-main'>
        <div className='menu-item '>
          {auth.username && (
            <Link to={`/user/${auth.userId}`}>
              <div className='d-flex-item '>
                <div className='user-icon'>
                  <svg
                    focusable='false'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    width='24'
                    height='24'
                  >
                    <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'></path>
                  </svg>
                </div>
                <div className='content-item'>
                  <span className='user-name'>{auth.username} </span>
                  <p>Xem hồ sơ của bạn</p>
                </div>
              </div>
            </Link>
          )}
        </div>
        <div className='menu-item'>
          {auth.isAdmin && auth.isAdmin !== '0' && (
            <Link to='/admin/dashboard'>
              <div className='d-flex-item'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fal'
                  data-icon='cog'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='svg-inline--fa fa-cog fa-w-16 fa-3x manage-icon'
                >
                  <path
                    fill='currentColor'
                    d='M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z'
                    className=''
                  ></path>
                </svg>
                <p>Admin Dashboard</p>
              </div>
            </Link>
          )}
        </div>
        <Link to={`/user/${auth.userId}`}>
          <div className='menu-item'>
            <div className='d-flex-item'>
              <svg
                viewBox='0 0 24 24'
                className='manage-icon'
                focusable='false'
                aria-hidden='true'
              >
                <path d='M18.7 3.3H18c0-.7-.5-1.3-1.2-1.3s-1.3.6-1.3 1.3h-9c-.7 0-1.3.6-1.3 1.3v1.3h-.4c-.2 0-.3.1-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v.6c0 .7.6 1.3 1.3 1.3h12.3c.7 0 1.3-.6 1.3-1.3V4.6c0-.7-.6-1.3-1.3-1.3zm-2.6 0c0-.4.3-.6.6-.6s.6.3.6.6v1H16v-1zm0 1.6h1.3v8.7h-1.3V4.9zm0 9.4h1.3v.2l-.6 1.3-.6-1.3-.1-.2zm-9.7 7.1c-.4 0-.6-.3-.6-.6v-.6h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3v-1.3h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3v-1.3h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3v-1.3h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3v-1.3h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3v-1.3h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3V8.5h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3V6.5h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3V4.6c0-.4.3-.6.6-.6H7v17.4h-.6zm12.9-.7c0 .4-.3.6-.6.6h-11V3.9h7.7v1.9h-.3v-.6c0-.2-.1-.3-.3-.3-.2 0-.3.1-.3.3v3.9c0 .2.1.3.3.3.2 0 .3-.1.3-.3V6.5h.3v8.2l1 1.9c.1.2.3.2.4.1.1 0 .1-.1.1-.1l1-1.9V3.9h.6c.4 0 .6.3.6.6v16.2z'></path>
              </svg>
              <span>Quản lý đơn hàng</span>
            </div>
          </div>
        </Link>

        <div className='menu-item' onClick={toggleTheme}>
          {theme === 'dark' ? (
            <div className='d-flex-item'>
              <svg
                data-name='Capa 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='manage-icon'
                focusable='false'
                aria-hidden='true'
              >
                <path d='M20.57 13.24a.62.62 0 00-.52.11 6.79 6.79 0 01-2.05 1.2 6.34 6.34 0 01-2.33.41A6.74 6.74 0 018.91 8.2 7.09 7.09 0 019.28 6a6.19 6.19 0 011.1-2 .58.58 0 00-.09-.83.63.63 0 00-.53-.11 9.27 9.27 0 00-4.87 3.26A9.1 9.1 0 0012.11 21 9.12 9.12 0 0021 14a.55.55 0 00-.43-.76zm-3.51 4.81a7.93 7.93 0 01-12.82-6.21A7.75 7.75 0 015.88 7a7.93 7.93 0 012.64-2.18c-.11.25-.23.51-.32.78a7.63 7.63 0 00-.44 2.62 7.94 7.94 0 007.94 7.94 7.82 7.82 0 002.74-.48c.29-.12.59-.23.87-.37a8.4 8.4 0 01-2.25 2.74z'></path>
              </svg>
              <div className='content-item'>
                <span>Chế độ tối (tắt)</span>
                <p>
                  Điều chỉnh giao diện để giảm độ chói và cho đôi mắt được nghỉ
                  ngơi
                </p>
              </div>
            </div>
          ) : (
            <div className='d-flex-item'>
              <svg
                data-name='Capa 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='manage-icon'
                focusable='false'
                aria-hidden='true'
              >
                <path d='M20.57 13.24a.62.62 0 00-.52.11 6.79 6.79 0 01-2.05 1.2 6.34 6.34 0 01-2.33.41A6.74 6.74 0 018.91 8.2 7.09 7.09 0 019.28 6a6.19 6.19 0 011.1-2 .58.58 0 00-.09-.83.63.63 0 00-.53-.11 9.27 9.27 0 00-4.87 3.26A9.1 9.1 0 0012.11 21 9.12 9.12 0 0021 14a.55.55 0 00-.43-.76zm-3.51 4.81a7.93 7.93 0 01-12.82-6.21A7.75 7.75 0 015.88 7a7.93 7.93 0 012.64-2.18c-.11.25-.23.51-.32.78a7.63 7.63 0 00-.44 2.62 7.94 7.94 0 007.94 7.94 7.82 7.82 0 002.74-.48c.29-.12.59-.23.87-.37a8.4 8.4 0 01-2.25 2.74z'></path>
              </svg>
              <div className='content-item'>
                <span>Chế độ tối (Bật)</span>
                <p>
                  Điều chỉnh giao diện để giảm độ chói và cho đôi mắt được nghỉ
                  ngơi
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to='/authentication'>
          <div className='menu-item'>
            <div className='d-flex-item'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                className='manage-icon'
                focusable='false'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <g data-name='Group 29031'>
                  <g data-name='Group 28715'>
                    <path
                      data-name='Rectangle 4595'
                      fill='none'
                      d='M0 0h24v24H0z'
                    ></path>
                    <g data-name='Group 28574'>
                      <g data-name='Group 28570'>
                        <path
                          data-name='Path 20399'
                          d='M5.879 21h8.266a1.879 1.879 0 001.879-1.875v-3.75a.376.376 0 00-.751 0v3.75a1.127 1.127 0 01-1.127 1.125H5.88a1.127 1.127 0 01-1.127-1.125V4.875A1.127 1.127 0 015.879 3.75h8.266a1.127 1.127 0 011.127 1.125v3.75a.376.376 0 00.751 0v-3.75A1.879 1.879 0 0014.144 3H5.878a1.879 1.879 0 00-1.879 1.875v14.25A1.879 1.879 0 005.879 21z'
                          stroke='#000'
                          stroke-width='0.25'
                        ></path>
                      </g>
                      <g data-name='Group 28571'>
                        <path
                          data-name='Path 20400'
                          d='M9.353 12.375h11.271a.376.376 0 100-.751H9.353a.376.376 0 000 .751z'
                          stroke='#000'
                          stroke-width='0.25'
                        ></path>
                      </g>
                      <g data-name='Group 28572'>
                        <path
                          data-name='Path 20401'
                          d='M12.359 15.381a.375.375 0 00.266-.641L9.885 12l2.74-2.74a.376.376 0 10-.531-.531l-3.006 3.006a.376.376 0 000 .531l3.006 3.006a.377.377 0 00.265.109z'
                          stroke='#000'
                          stroke-width='0.25'
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              {isLoggedIn && <span onClick={auth.logout}>Đăng xuất</span>}
              {!isLoggedIn && <span>Đăng nhập</span>}
            </div>
          </div>
        </Link>
        <div className='menu-item2'>
          <div className='item1'>
            <svg
              viewBox='0 0 24 24'
              className='manage-icon MuiSvgIcon-colorAction'
              focusable='false'
              aria-hidden='true'
            >
              <path
                stroke='currentColor'
                stroke-width='0.25'
                d='M12.5 3.5c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm-2.6 1C8.8 5.5 8 6.8 7.5 8.2L5 8.7c1-2 2.8-3.5 4.9-4.2zM4.7 9.3l2.6-.4c-.3 1.1-.5 2.2-.5 3.3H4.1c0-1 .2-1.9.6-2.9zm-.6 3.5h2.7c0 1.1.2 2.2.5 3.3l-2.6-.4c-.4-1-.6-1.9-.6-2.9zm.9 3.5l2.5.4c.4 1.4 1.3 2.7 2.4 3.7-2.1-.6-3.9-2.1-4.9-4.1zm7.2 4.6c-1.7-.2-3.2-1.7-4.1-4l.8.1c1.1.2 2.2.3 3.3.3v3.6zm0-4.2c-1.1 0-2.2-.1-3.2-.3l-1.1-.2c-.3-1.1-.5-2.3-.5-3.4h4.8v3.9zm0-4.5H7.4c0-1.2.2-2.3.5-3.4L9 8.6c1.1-.2 2.1-.3 3.2-.3v3.9zm0-4.5c-1.1 0-2.2.1-3.3.3l-.8.1c.8-2.3 2.3-3.9 4.1-4v3.6zm8.7 4.5h-2.7c0-1.1-.2-2.2-.5-3.3l2.6.4c.4 1 .6 1.9.6 2.9zM20 8.7l-2.5-.4c-.4-1.4-1.3-2.7-2.4-3.7 2.1.6 3.9 2.1 4.9 4.1zm-7.2-4.6c1.7.2 3.2 1.7 4.1 4l-.8-.1c-1.1-.2-2.2-.3-3.3-.3V4.1zm0 4.2c1.1 0 2.2.1 3.2.3l1.1.2c.3 1.1.5 2.3.5 3.4h-4.8V8.3zm0 4.5h4.8c0 1.2-.2 2.3-.5 3.4l-1.1.2c-1.1.2-2.1.3-3.2.3v-3.9zm0 4.5c1.1 0 2.2-.1 3.3-.3l.7-.1c-.8 2.3-2.3 3.9-4.1 4v-3.6zm2.3 3.2h0c1.1-1 1.9-2.3 2.4-3.7l2.5-.4c-1 1.9-2.8 3.4-4.9 4.1zm2.6-4.4c.3-1.1.5-2.2.5-3.3h2.7c0 1-.2 1.9-.6 2.9l-2.6.4z'
              ></path>
            </svg>
            <span>Tiếng Việt</span>
          </div>
          <div className='item2'>
            <svg
              viewBox='0 0 24 24'
              className='manage-icon MuiSvgIcon-colorAction'
              focusable='false'
              aria-hidden='true'
            >
              <path
                stroke='currentColor'
                stroke-width='0.2'
                d='M21.7 4.5H2.3c-.2 0-.3.1-.3.3v9.7s0 0 0 0v0s0 0 0 0v0h0v0h0v0h0l18 4.1h.1c.2 0 .3-.1.3-.3v-1.8l.8.1h0c.2 0 .3-.1.3-.3v-1.6h.3c.2 0 .3-.1.3-.3V4.8c-.1-.2-.2-.3-.4-.3zm-19.1.6h2.1c-.2 1-1.1 1.9-2.1 2v-2zm0 9.1v-2.1c1.1.1 1.9 1 2.1 2.1H2.6zM19.8 18L7.1 15.3l12.6 1.3V18zm1.1-1.9l-13-1.3h13v1.3zm.5-1.9h0-2.1c.1-1.1 1-1.9 2.1-2.1v2.1zm0-2.6c-1.4.1-2.5 1.2-2.6 2.6H5.2c-.1-1.4-1.2-2.5-2.6-2.6V7.7C3.9 7.5 5 6.4 5.2 5.1h13.7c.1 1.4 1.2 2.5 2.6 2.6v3.9zm0-4.5c-1.1-.1-1.9-1-2.1-2.1h2.1v2.1zm-9.7 1.6c0 .2.1.4.7.6.3.1 1.1.4 1.1 1.2 0 .5-.4 1-.9 1.1v.1c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3v-.1c-.5-.1-.9-.6-.9-1.1 0-.2.1-.3.3-.3.2 0 .3.1.3.3 0 .3.3.6.6.6s.6-.3.6-.6c0-.2-.1-.4-.7-.6-.7-.2-1.1-.6-1.1-1.2 0-.5.4-1 .9-1.1v-.1c0-.2.1-.3.3-.3.2 0 .3.1.3.3v.1c.5.1.9.6.9 1.1 0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3 0-.3-.3-.6-.6-.6-.4 0-.6.3-.6.6zm3.6-1.2c.9 1.3.9 3 0 4.2-1.2 1.7-3.5 2.1-5.1.9-1.7-1.2-2.1-3.5-.9-5.1 1.2-1.7 3.5-2.1 5.1-.9.1.1.1.2.1.3-.1.1-.2.2-.4.1-1.1-.8-2.5-.8-3.6 0-1.4 1-1.8 3-.8 4.4 1 1.4 3 1.8 4.4.8s1.8-3 .8-4.4c0 0 0 0 0 0-.1-.1-.1-.3.1-.4 0 0 .2 0 .3.1z'
              ></path>
            </svg>
            <span>VND</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BottomNavbar = () => {
  const { theme } = useContext(ThemeContext);
  const [showManage, setShowManage] = useState(false);

  return (
    <div className={theme === 'dark' ? 'bottom-navbar dark' : 'bottom-navbar'}>
      <MenuManage showManage={showManage} setShowManage={setShowManage} />
      <ul className='bottom-nav-link'>
        <Link to='/'>
          <li className='bottom-nav-link__item'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              className='manage-icon'
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <g data-name='Group 28491'>
                <path
                  data-name='Rectangle 4527'
                  fill='none'
                  d='M0 0h24v24H0z'
                ></path>
                <g data-name='Group 28489'>
                  <path
                    data-name='Path 20400'
                    d='M17.968 21H6.033a1.624 1.624 0 01-1.615-1.63V9.931a.562.562 0 111.123 0v9.439a.494.494 0 00.491.5h11.936a.494.494 0 00.491-.5V9.931a.562.562 0 111.123 0v9.439A1.624 1.624 0 0117.968 21z'
                  ></path>
                  <path
                    data-name='Path 20401'
                    d='M20.438 11.783a.558.558 0 01-.4-.166l-7-7.052a1.47 1.47 0 00-2.088 0l-7 7.052a.559.559 0 01-.8 0 .57.57 0 010-.8l7-7.052a2.59 2.59 0 013.679 0l7 7.052a.57.57 0 010 .8.558.558 0 01-.4.166z'
                  ></path>
                  <path
                    data-name='Path 20402'
                    d='M14.265 21H9.729a.567.567 0 01-.567-.567v-5.032a1.774 1.774 0 011.772-1.772h2.131a1.774 1.774 0 011.772 1.772v5.032a.567.567 0 01-.572.567zm-3.969-1.134h3.4v-4.465a.639.639 0 00-.638-.638h-2.126a.639.639 0 00-.638.638z'
                  ></path>
                </g>
              </g>
            </svg>
          </li>
        </Link>
        <li className='bottom-nav-link__item'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            className='manage-icon'
            focusable='false'
            viewBox='0 0 24 24'
            aria-hidden='true'
            onClick={() => setShowManage(true)}
          >
            <g data-name='Group 28502'>
              <path
                data-name='Rectangle 4528'
                fill='none'
                d='M0 0h24v24H0z'
              ></path>
              <g data-name='Group 28501'>
                <g data-name='Group 28494'>
                  <g data-name='Group 28493'>
                    <path
                      data-name='Path 20407'
                      d='M9.41 3h-5.1A1.313 1.313 0 003 4.311v5.1a1.313 1.313 0 001.311 1.31h5.1a1.313 1.313 0 001.31-1.311v-5.1A1.313 1.313 0 009.41 3zm0 7.078h-5.1a.668.668 0 01-.667-.668v-5.1a.668.668 0 01.668-.667h5.1a.668.668 0 01.668.668v5.1h0a.668.668 0 01-.669.667z'
                      stroke='currentColor'
                      stroke-width='0.4'
                    ></path>
                  </g>
                </g>
                <g data-name='Group 28496'>
                  <g data-name='Group 28495'>
                    <path
                      data-name='Path 20408'
                      d='M19.689 3h-5.1a1.313 1.313 0 00-1.311 1.311v5.1a1.313 1.313 0 001.311 1.311h5.1A1.313 1.313 0 0021 9.411v-5.1A1.313 1.313 0 0019.689 3zm.668 6.41a.668.668 0 01-.668.668h-5.1a.668.668 0 01-.668-.668v-5.1a.668.668 0 01.668-.668h5.1a.668.668 0 01.668.668z'
                      stroke='currentColor'
                      stroke-width='0.4'
                    ></path>
                  </g>
                </g>
                <g data-name='Group 28498'>
                  <g data-name='Group 28497'>
                    <path
                      data-name='Path 20409'
                      d='M9.41 13.279h-5.1A1.313 1.313 0 003 14.59v5.1a1.313 1.313 0 001.311 1.311h5.1a1.313 1.313 0 001.311-1.311v-5.1a1.312 1.312 0 00-1.312-1.311zm0 7.078h-5.1a.668.668 0 01-.668-.668v-5.1a.668.668 0 01.668-.668h5.1a.668.668 0 01.668.668v5.1h0a.668.668 0 01-.668.663z'
                      stroke='currentColor'
                      stroke-width='0.4'
                    ></path>
                  </g>
                </g>
                <g data-name='Group 28500'>
                  <g data-name='Group 28499'>
                    <path
                      data-name='Path 20410'
                      d='M19.689 13.279h-5.1a1.313 1.313 0 00-1.311 1.311v5.1a1.313 1.313 0 001.311 1.311h5.1A1.313 1.313 0 0021 19.69v-5.1a1.313 1.313 0 00-1.311-1.311zm.668 6.41a.668.668 0 01-.668.668h-5.1a.668.668 0 01-.668-.668v-5.1a.668.668 0 01.668-.668h5.1a.668.668 0 01.668.668z'
                      stroke='currentColor'
                      stroke-width='0.4'
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavbar;
