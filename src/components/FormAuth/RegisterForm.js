import React, { Fragment, useContext, useRef } from 'react';
import { ThemeContext } from '../../shared/context/ThemeProvider';

import './FormAuth.css';

function RegisterForm(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const onUsernameChange = () => {
    props.onUsernameChange(
      firstNameRef.current.value,
      lastNameRef.current.value
    );
  };
  const onEmailChange = () => {
    props.onEmailChange(emailRef.current.value);
  };
  const onPasswordChange = () => {
    props.onPasswordChange(passwordRef.current.value);
  };
  const onConfirmPasswordChange = () => {
    props.onConfirmPasswordChange(confirmPasswordRef.current.value);
  };

  const onSubmitRegister = () => {
    props.authSubmitHandler();
  };

  return (
    <Fragment>
      <div
        className={
          theme === 'dark' ? 'container_main-form dark' : 'container_main-form'
        }
      >
        <div className="container_main-form-content">
          <h3 className="title">Đăng ký</h3>
          <div className="user">
            <div className="form-field">
              <input
                type="text"
                className="form-input"
                placeholder=" "
                onChange={onUsernameChange}
                ref={firstNameRef}
              />
              <label htmlFor="name" className="form-label">
                Tên <span className="star"> *</span>
              </label>
            </div>
            <div className="form-field">
              <input
                type="text"
                className="form-input"
                placeholder=" "
                onChange={onUsernameChange}
                ref={lastNameRef}
              />
              <label htmlFor="name" className="form-label">
                Họ <span className="star"> *</span>
              </label>
            </div>
          </div>
          <div className="form-field">
            <input
              type="email"
              className="form-input"
              placeholder=" "
              onChange={onEmailChange}
              ref={emailRef}
            />
            <label htmlFor="name" className="form-label">
              Số điện thoại hoặc Email <span className="star"> *</span>
            </label>
          </div>
          <div className="form-field">
            <input
              type="password"
              className="form-input"
              placeholder=" "
              onChange={onPasswordChange}
              ref={passwordRef}
            />
            <label htmlFor="name" className="form-label">
              Mật khẩu <span className="star"> *</span>
            </label>
          </div>
          <div className="form-field">
            <input
              type="password"
              className="form-input"
              placeholder=" "
              onChange={onConfirmPasswordChange}
              ref={confirmPasswordRef}
            />
            <label htmlFor="name" className="form-label">
              Nhập lại mật khẩu <span className="star">*</span>
            </label>
          </div>
          <button className="btn-login" onClick={onSubmitRegister}>
            Đăng ký
          </button>
          <p className="content-text">
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với{' '}
            <span className="content-text-span">Điều khoản dịch vụ</span>,{' '}
            <span className="content-text-span">Chính sách dữ liệu</span>,{' '}
            <span className="content-text-span">Chính sách cookie</span> và{' '}
            <span className="content-text-span">
              Tiêu chuẩn cộng đồng của chúng tôi{' '}
            </span>
          </p>
          <p className="content-text">
            Bạn đã có tài khoản?{' '}
            <span className="content-text-span" onClick={props.authModeToggler}>
              Đăng nhập
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterForm;
