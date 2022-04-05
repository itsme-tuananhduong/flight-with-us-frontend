import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../shared/context/ThemeProvider';

import ErrorModal from '../shared/components/ErrorModal';
import LoadingSpinner from '../shared/components/LoadingSpinner';
import { AuthContext } from '../shared/context/auth-context';
import axios from 'axios';

import LoginForm from '../components/FormAuth/LoginForm';
import RegisterForm from '../components/FormAuth/RegisterForm';
import './Authentication.css';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onUsernameChange = (firstName, lastName) => {
    setUsername(`${firstName} ${lastName}`);
  };
  const onEmailChange = (email) => {
    setEmail(email);
  };
  const onPasswordChange = (password) => {
    setPassword(password);
  };
  const onConfirmPasswordChange = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
  };

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const auth = useContext(AuthContext);

  const { theme } = useContext(ThemeContext);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const authModeToggler = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setIsLoginMode(!isLoginMode);
  };

  const authSubmitHandler = async () => {
    if (!isLoginMode) {
      if (
        username === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === ''
      ) {
        setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
        return;
      } else if (!validateEmail(email)) {
        setError('Email không hợp lệ');
        return;
      } else if (password.length < 3 || password.length > 6) {
        setError('Độ dài password chưa hợp lệ');
        return;
      } else if (password !== confirmPassword) {
        setError('Confirm Password chưa chính xác');
        return;
      }
    } else {
      if (email === '' || password === '') {
        setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
        return;
      } else if (!validateEmail(email)) {
        setError('Email không hợp lệ');
        return;
      } else if (password.length < 3 || password.length > 6) {
        setError('Độ dài password chưa hợp lệ');
        return;
      }
    }

    if (isLoginMode) {
      setIsLoading(true);
      axios({
        method: 'post',
        baseURL: process.env.REACT_APP_BACKEND_URL,
        url: '/login',
        data: {
          Email: email.toString(),
          Password: password.toString(),
        },
      })
        .then((res) => {
          auth.login(
            res.data.user.id,
            res.data.user.IsAdmin,
            res.data.user.Username,
            res.data.token
          );
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.response.data.message);
        });
    } else {
      setIsLoading(true);
      axios({
        method: 'post',
        baseURL: process.env.REACT_APP_BACKEND_URL,
        url: '/register',
        data: {
          Email: email.toString(),
          Password: password.toString(),
          Password_confirmation: confirmPassword.toString(),
          Username: username.toString(),
          IsAdmin: '0',
          IdNhanVien: 0,
        },
      })
        .then((res) => {
          auth.login(
            res.data.user.id,
            res.data.user.IsAdmin,
            res.data.user.Username,
            res.data.token
          );
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.response.data.message);
        });
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <div
      className={
        theme === 'dark' ? 'authentication-page dark' : 'authentication-page'
      }
    >
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner />}
      <div className="svg-background"></div>
      <div className="wrapper">
        <div className="main-content">
          <div className="intro">
            <div className="heading">
              <div className="intro-icon">
                <Link to="/">
                  <svg
                    viewBox="0 0 24 24"
                    className="MuiSvgIcon-root jss312"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="M22 11.5c0-1-.2-1.9-.6-2.8-1.4-4.2-5.6-7-10-6.8h-.1c-1.7.2-3.4.7-4.9 1.8-4.6 3-5.8 9.2-2.8 13.9v.1c.2.2.3.6.6.8l.1.1c1.9 2.2 4.7 3.6 7.7 3.6h8.7c.8 0 1.3-.6 1.3-1.3v-9.4z"></path>
                    <path
                      fill="#FFF"
                      d="M16.9 16.8c-.7.9-1.7 1.4-2.8 1.5-.5 0-1-.1-1.4-.5-.3-.3-.5-.8-.4-1.2 0-.2 0-.4.1-.6 0-.2.1-.5.2-.8l1-3.8c-.2.3-.4.5-.6.8-.9 1.8-1.7 3.7-2.4 5.6 0 .1-.1.3-.2.4h-.1c-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-.3-.2-.4-.4-.5-.6-.1-.3-.2-.5-.2-.8s0-.5.1-.8l2.5-9.9c0-.1.1-.2.2-.2l1.7-.5h.1c.1 0 .1.1.1.2l-3.1 12v.2c0-.1.1-.2.2-.5l.3-.9c.2-.7.5-1.4.7-2s.5-1.3.8-1.9c.3-.6.6-1.1 1.1-1.6.1-.1.2-.2.3-.2v-.1s0-.1.1-.1v-.1h.2c.3 0 .5.1.7.3.2.3.2.6.2.9 0 .4-.1.8-.2 1.2l-.3 3.2c-.1.4-.1.8-.1 1.2.1.2.3.3.8.2.7-.2 1.3-.5 1.8-.9.1 0 .2.2.1.3z"
                    ></path>
                  </svg>
                </Link>
              </div>
              <h1>Hahalolo</h1>
            </div>
            <div className="intro-content">
              <h2>
                Bạn thích <br /> <span>đi du lịch?</span>
              </h2>
              <h2>Bạn muốn tìm hiểu thông tin về những điểm đến?</h2>
              <p>
                Chỉ với vài thao tác, hãy nhanh chóng đăng nhập để trải nghiệm
                và cảm nhận các tiện ích tuyệt vời của chúng tôi.
              </p>
            </div>
          </div>
          <div className="auth-form">
            {isLoginMode ? (
              <LoginForm
                authModeToggler={authModeToggler}
                onEmailChange={onEmailChange}
                onPasswordChange={onPasswordChange}
                authSubmitHandler={authSubmitHandler}
              />
            ) : (
              <RegisterForm
                authModeToggler={authModeToggler}
                onUsernameChange={onUsernameChange}
                onEmailChange={onEmailChange}
                onPasswordChange={onPasswordChange}
                onConfirmPasswordChange={onConfirmPasswordChange}
                authSubmitHandler={authSubmitHandler}
              />
            )}
          </div>
        </div>
        <div className="auth-footer">
          <div className="footer-options">
            <div className="download">
              <div className="download-item">
                <div className="download-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="MuiSvgIcon-root MuiSvgIcon-colorAction"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 29891">
                      <g data-name="Group 29887">
                        <path
                          data-name="Path 21430"
                          d="M12.813 17.97h-1.509c-.135 0-.107.107-.107.19v2c0 .242.005.484-.007.725a1.107 1.107 0 01-1.11 1.108A1.123 1.123 0 019 20.846c-.01-.884 0-1.768 0-2.651v-.227H7.688a.783.783 0 01-.805-.872v-1.507V8.97c0-.2.055-.24.229-.24q4.9.008 9.791 0h.211c0 .083.011.151.011.219v8.126a.785.785 0 01-.825.889c-.365 0-.731.006-1.1 0-.142 0-.2.036-.194.2q.011 1.24 0 2.48a2.016 2.016 0 01-.072.58 1.068 1.068 0 01-1.209.756 1.141 1.141 0 01-.912-1.142c-.005-.865 0-1.729 0-2.594z"
                        ></path>
                        <path
                          data-name="Path 21431"
                          d="M14.493 3.886a5.759 5.759 0 012.686 4.325H6.829a5.769 5.769 0 012.641-4.3l-.5-1.055-.242-.509c-.058-.122-.069-.239.065-.306s.2.032.248.14l.7 1.457c.013.028.028.055.052.1l.242-.1a4.745 4.745 0 013.941 0c.158.069.23.054.314-.115.222-.448.466-.884.7-1.324l.027-.049c.063-.116.145-.2.272-.114s.09.192.032.3l-.477.892zm-4.4 1.906a.426.426 0 10-.427.455.44.44 0 00.427-.455zm4.677-.014a.438.438 0 00-.434-.449.447.447 0 00-.417.47.427.427 0 10.851-.021z"
                        ></path>
                        <path
                          data-name="Path 21432"
                          d="M4.004 12.268V9.713a1.185 1.185 0 112.37 0q.008 2.593 0 5.186a1.187 1.187 0 01-1.165 1.176 1.172 1.172 0 01-1.2-1.152c-.017-.826 0-1.652 0-2.479z"
                        ></path>
                        <path
                          data-name="Path 21433"
                          d="M19.999 12.285v2.555a1.186 1.186 0 11-2.37.04c-.008-1.468 0-2.937 0-4.405 0-.273-.009-.547 0-.82a1.188 1.188 0 012.349-.21 1.22 1.22 0 01.021.246v2.593z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hahalolo.android.social&hl=vi&gl=US"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  <span>Google Play</span>
                </a>
              </div>
              <div className="download-item">
                <div className="download-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="MuiSvgIcon-root MuiSvgIcon-colorAction"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 29893">
                      <g data-name="Group 29892">
                        <g data-name="Group 29888">
                          <path
                            data-name="Path 21434"
                            d="M19.497 8.699c-.371.336-.742.625-1.057.969a4.118 4.118 0 00-1.024 3.191 4.343 4.343 0 002.445 3.708c.146.079.165.146.114.3a11.666 11.666 0 01-1.877 3.473 8.731 8.731 0 01-.793.9 2.314 2.314 0 01-2.436.616 6.063 6.063 0 01-.732-.262 4.066 4.066 0 00-3.475 0 7.828 7.828 0 01-.9.313 2.071 2.071 0 01-2.005-.444 7.579 7.579 0 01-1.242-1.372 12.682 12.682 0 01-2.288-5.167 9.011 9.011 0 01.02-4.12 5.246 5.246 0 012.675-3.518 4.066 4.066 0 013.534-.16c.46.183.933.333 1.4.5a.95.95 0 00.642-.02c.647-.227 1.284-.5 1.945-.667a4.526 4.526 0 014.871 1.519c.075.077.134.173.183.241z"
                          ></path>
                          <path
                            data-name="Path 21435"
                            d="M16.071 2a3.447 3.447 0 01-.128 1.489 4.717 4.717 0 01-2.774 3.051 4.977 4.977 0 01-1.076.192c-.146.024-.2-.043-.2-.191a4.136 4.136 0 01.848-2.634 4.649 4.649 0 012.989-1.871c.101-.021.21-.023.341-.036z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <a
                  href="https://apps.apple.com/vn/app/hahalolo/id1437417120?l=vi"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  <span>App Store</span>
                </a>
              </div>
            </div>
            <div className="languages">
              <span className="language">Deutsch</span>
              <span className="language">English</span>
              <span className="language active">Tiếng Việt</span>
              <span className="language last">中文 (简体)</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28560" fill="none">
                  <path data-name="Rectangle 4657" d="M0 0h24v24H0z"></path>
                  <g data-name="Group 28606" stroke="currentColor">
                    <g data-name="Ellipse 989" transform="translate(3 3)">
                      <circle cx="9" cy="9" r="9" stroke="none"></circle>
                      <circle cx="9" cy="9" r="8.5"></circle>
                    </g>
                    <g
                      data-name="Group 28559"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path data-name="Line 36" d="M12.5 8v8.382"></path>
                      <path data-name="Line 37" d="M17 12H8"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="copyright">
            &copy; 2021 Hahalolo. Đã đăng ký bản quyền.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
