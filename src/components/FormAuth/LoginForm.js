import React, { Fragment, useState, useContext, useRef } from 'react';
import { ThemeContext } from '../../shared/context/ThemeProvider';

import './FormAuth.css';

function LoginForm(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onEmailChange = () => {
    props.onEmailChange(emailRef.current.value);
  };
  const onPasswordChange = () => {
    props.onPasswordChange(passwordRef.current.value);
  };

  const onSubmitRegister = () => {
    props.authSubmitHandler();
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState(false);

  return (
    <Fragment>
      <div
        className={
          theme === 'dark' ? 'container_main-form dark' : 'container_main-form'
        }
      >
        <div className="container_main-form-content">
          <h3 className="title">Đăng nhập</h3>
          <div className="form-field">
            <input
              type="email"
              className="form-input"
              placeholder=" "
              // value={userName}
              // onChange={(e) => setUserName(e.target.value)}
              onChange={onEmailChange}
              ref={emailRef}
            />
            <label htmlFor="name" className="form-label">
              Email hoặc Số điện thoại
              <span className="star"> *</span>
            </label>
          </div>
          <div className="form-field">
            <input
              type={checkPass ? 'text' : 'password'}
              className="form-input"
              placeholder=" "
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={onPasswordChange}
              ref={passwordRef}
            />
            <label htmlFor="name" className="form-label">
              Mật khẩu <span className="star">*</span>
            </label>
            {password !== '' && !checkPass ? (
              <div className="showPassword" onClick={() => setCheckPass(true)}>
                <svg
                  className="showPassword-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                </svg>
              </div>
            ) : null}

            {password.length > 0 && checkPass ? (
              <div className="showPassword" onClick={() => setCheckPass(false)}>
                <svg
                  className="showPassword-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                </svg>
              </div>
            ) : null}
          </div>
          <button className="btn-login" onClick={onSubmitRegister}>
            Đăng nhập
          </button>
          <p className="content-tilte">Quên mật khẩu</p>
          <p className="content-text">
            Bạn chưa có tài khoản?{' '}
            <span className="content-text-span" onClick={props.authModeToggler}>
              {' '}
              Đăng ký ngay tại đây
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginForm;
