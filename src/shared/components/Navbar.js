import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeProvider';

import { AuthContext } from '../context/auth-context';

import './Navbar.css';

const Navbar = () => {
  const auth = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(auth.isLoggedIn);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const logoutHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className={theme === 'dark' ? 'navbar dark' : 'navbar'}>
      <div className="brand-search">
        <Link to="/">
          <div className="brand">
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
          </div>
        </Link>
        {isLoggedIn && (
          <div className="search-box">
            <input placeholder="Tìm kiếm" />
            <div className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="MuiSvgIcon-root MuiSvgIcon-colorAction"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28003">
                  <path
                    data-name="Rectangle 4474"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g data-name="Group 28211">
                    <g data-name="4">
                      <g data-name="Group 28210">
                        <path
                          data-name="Path 20260"
                          d="M20.83 20.021l-4.647-4.573a7.351 7.351 0 001.965-5A7.514 7.514 0 0010.573 3 7.513 7.513 0 003 10.453a7.513 7.513 0 007.573 7.453 7.616 7.616 0 004.767-1.664l4.665 4.591a.589.589 0 00.824 0 .567.567 0 00.001-.812zm-10.257-3.262a6.358 6.358 0 01-6.408-6.306 6.358 6.358 0 016.408-6.306 6.358 6.358 0 016.408 6.306 6.358 6.358 0 01-6.408 6.306z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        )}
      </div>
      <ul className="nav-link">
        <li className="nav-link__item">
          <div className="icon">
            <svg
              viewBox="0 0 24 24"
              className="MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M10.2 6h7.1V5h-7.1v1zm0 7.2h7.1v-1h-7.1v1zm0-3.6h7.1v-1h-7.1v1zm11.1-6.3V19c0 1.6-1.2 2.9-2.9 3H5.2c-1.4 0-2.5-1.2-2.5-2.6v-7.9c0-.7.6-1.3 1.3-1.3h2.7V3.3C6.7 2.6 7.3 2 8 2h12c.7 0 1.3.6 1.3 1.3zM6.8 11.2H4c-.2 0-.3.2-.3.3v7.9c0 .9.7 1.6 1.5 1.6.9 0 1.5-.7 1.5-1.6v-8.2zm13.5-7.9c0-.2-.1-.3-.3-.3H8c-.1 0-.3.1-.3.3v16.1c0 .6-.2 1.2-.6 1.6h11.2c1.1 0 1.9-.9 1.9-2V3.3z"></path>
            </svg>
          </div>
          <p>Bảng tin</p>
        </li>
        <li className="nav-link__item">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28278">
                <path
                  data-name="Rectangle 4475"
                  fill="none"
                  d="M0 0h24v24H0z"
                ></path>
                <path
                  data-name="Path 20272"
                  d="M20.59 9.263A7.26 7.26 0 009.06 3.388a1.82 1.82 0 00-2.817-1.055A1.756 1.756 0 004.05 3.664a1.514 1.514 0 00.462 2.957H6.56a7.263 7.263 0 003.69 9.218l.328 1.865h-.363a.391.391 0 00-.381.475l.781 3.514a.391.391 0 00.381.306h4.669a.391.391 0 00.381-.306l.781-3.514a.391.391 0 00-.381-.475h-.366l.328-1.865a7.273 7.273 0 004.182-6.576zm-6.872 6.445V2.818A3.419 3.419 0 0115.874 4.6a9.274 9.274 0 011.14 4.66 9.274 9.274 0 01-1.14 4.66 3.419 3.419 0 01-2.157 1.785zm-.782-12.89v12.89a3.419 3.419 0 01-2.157-1.785 9.274 9.274 0 01-1.14-4.66A9.274 9.274 0 0110.78 4.6a3.419 3.419 0 012.156-1.782zm6.872 6.445a6.491 6.491 0 01-3.9 5.943 6.055 6.055 0 00.633-.884 10.06 10.06 0 001.249-5.059A10.06 10.06 0 0016.55 4.2a6.056 6.056 0 00-.633-.884 6.491 6.491 0 013.9 5.943zM4.514 5.84a.733.733 0 01-.07-1.462A.391.391 0 004.797 4a.979.979 0 01.973-.949.967.967 0 01.391.082.391.391 0 00.423-.072 1.038 1.038 0 011.746.76 1.048 1.048 0 01-.008.128.393.393 0 000 .059 7.307 7.307 0 00-1.4 1.833zM6.85 9.263a6.491 6.491 0 013.9-5.943 6.056 6.056 0 00-.633.884 10.061 10.061 0 00-1.249 5.059 10.06 10.06 0 001.249 5.059 6.058 6.058 0 00.633.884 6.491 6.491 0 01-3.9-5.943zm4.253 6.913a7.22 7.22 0 001.838.339V17.7h-1.574zm4.25 5.043h-4.047l-.608-2.733h5.258zm-.066-3.519h-1.569v-1.184a7.22 7.22 0 001.838-.339z"
                ></path>
              </g>
            </svg>
          </div>
          <p>Trải nghiệm</p>
        </li>
        <li className="nav-link__item">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28235">
                <g data-name="Group 28225">
                  <path
                    data-name="Rectangle 4477"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g data-name="Group 28223">
                    <g data-name="Group 28222">
                      <path
                        data-name="Path 9"
                        d="M19.855 8.806a9.721 9.721 0 001.144-3.191 2.624 2.624 0 00-5.247-.007v.007a9.737 9.737 0 001.144 3.191 1.828 1.828 0 00-1.1 1.152h-.039a.29.29 0 100 .58h.038a2.5 2.5 0 002.586 1.45c1.471 0 2.623-.763 2.623-1.74a1.68 1.68 0 00-1.149-1.442zm-3.52-3.191a2.041 2.041 0 014.081-.079v.079a13.124 13.124 0 01-1.8 4.209.3.3 0 01-.413.077.3.3 0 01-.077-.077 13.134 13.134 0 01-1.792-4.209zm2.041 5.8c-1.107 0-2.041-.535-2.041-1.16 0-.356.32-.706.831-.927.173.32.337.6.473.814a.875.875 0 001.2.268.886.886 0 00.27-.268c.135-.212.3-.5.473-.814.512.222.831.571.831.927 0 .624-.935 1.157-2.042 1.157z"
                      ></path>
                      <path
                        data-name="Path 10"
                        d="M19.688 5.691a1.457 1.457 0 10-1.457 1.447 1.453 1.453 0 001.457-1.447zm-2.333 0a.875.875 0 11.875.87.873.873 0 01-.874-.87z"
                      ></path>
                      <path
                        data-name="Path 11"
                        d="M9.121 12.068a2.332 2.332 0 10-2.333 2.321 2.327 2.327 0 002.333-2.321zm-4.081 0a1.749 1.749 0 111.749 1.74 1.745 1.745 0 01-1.749-1.74z"
                      ></path>
                      <path
                        data-name="Path 12"
                        d="M10.58 18.97h-.034c-.153-.622-.928-1.132-2.11-1.387.961-1.76 2.142-4.365 2.142-5.564a3.79 3.79 0 00-7.579 0c0 1.2 1.18 3.8 2.142 5.564-1.328.288-2.141.9-2.141 1.623 0 1.022 1.629 1.793 3.789 1.793 1.911 0 3.4-.6 3.724-1.45h.066a.29.29 0 100-.58zm-7-6.951a3.207 3.207 0 016.413-.1v.1c0 1.229-1.647 4.724-2.717 6.392a.582.582 0 01-.8.18.574.574 0 01-.181-.18c-1.064-1.668-2.712-5.164-2.712-6.392zm3.207 8.4c-1.835 0-3.207-.641-3.207-1.214 0-.376.642-.861 1.859-1.089.131.229.255.432.366.605a1.165 1.165 0 001.963 0c.111-.173.234-.382.366-.605 1.217.229 1.859.713 1.859 1.089 0 .573-1.372 1.214-3.207 1.214z"
                      ></path>
                      <path
                        data-name="Path 13"
                        d="M13.251 13.509a.29.29 0 00-.291-.29h-.3a1.055 1.055 0 01-.213-.022.29.29 0 10-.121.568 1.63 1.63 0 00.334.035h.3a.291.291 0 00.291-.29z"
                      ></path>
                      <path
                        data-name="Path 14"
                        d="M18.296 13.753a.289.289 0 00-.18-.367 3.155 3.155 0 00-.613-.141.29.29 0 10-.077.576 2.654 2.654 0 01.5.114.291.291 0 00.37-.182z"
                      ></path>
                      <path
                        data-name="Path 15"
                        d="M19.443 14.921a.289.289 0 00.249-.326.283.283 0 00-.059-.139 3.205 3.205 0 00-.432-.458.292.292 0 00-.411.039.289.289 0 00.027.4 2.667 2.667 0 01.354.373.292.292 0 00.272.111z"
                      ></path>
                      <path
                        data-name="Path 16"
                        d="M14.953 13.508a.29.29 0 00-.291-.29h-.574a.29.29 0 100 .58h.574a.291.291 0 00.291-.29z"
                      ></path>
                      <path
                        data-name="Path 17"
                        d="M20.191 15.563a.291.291 0 00-.562.153 2.6 2.6 0 01.084.505.291.291 0 00.291.271h.02a.29.29 0 00.271-.305 3.193 3.193 0 00-.104-.624z"
                      ></path>
                      <path
                        data-name="Path 18"
                        d="M19.95 17.037a.292.292 0 00-.37.18 2.626 2.626 0 01-.215.467.291.291 0 00.5.293 3.135 3.135 0 00.262-.57.289.289 0 00-.18-.368z"
                      ></path>
                      <path
                        data-name="Path 19"
                        d="M12.2 18.973h-.574a.29.29 0 100 .58h.574a.29.29 0 100-.58z"
                      ></path>
                      <path
                        data-name="Path 20"
                        d="M17.293 18.962h-.556a.29.29 0 100 .58h.393c.067 0 .132 0 .2-.006a.29.29 0 10-.036-.579z"
                      ></path>
                      <path
                        data-name="Path 21"
                        d="M16.656 13.508a.29.29 0 00-.291-.29h-.574a.29.29 0 100 .58h.574a.291.291 0 00.291-.29z"
                      ></path>
                      <path
                        data-name="Path 22"
                        d="M18.685 18.428a2.654 2.654 0 01-.438.27.29.29 0 10.258.52 3.207 3.207 0 00.536-.331.289.289 0 00.083-.4.292.292 0 00-.4-.083.246.246 0 00-.035.027z"
                      ></path>
                      <path
                        data-name="Path 23"
                        d="M13.908 18.973h-.575a.29.29 0 100 .58h.575a.29.29 0 100-.58z"
                      ></path>
                      <path
                        data-name="Path 24"
                        d="M15.613 18.973h-.575a.29.29 0 100 .581h.575a.29.29 0 100-.581z"
                      ></path>
                      <path
                        data-name="Path 25"
                        d="M11.779 11.551a.3.3 0 00.2-.076 1.03 1.03 0 01.383-.222.29.29 0 00-.177-.552 1.611 1.611 0 00-.6.349.289.289 0 00-.017.41.3.3 0 00.214.093z"
                      ></path>
                      <path
                        data-name="Path 26"
                        d="M13.656 10.485l.556-.139a.29.29 0 10-.14-.563l-.557.139a.29.29 0 00.14.563z"
                      ></path>
                      <path
                        data-name="Path 27"
                        d="M11.765 12.969a.29.29 0 00.007-.285 1.008 1.008 0 01-.116-.425.292.292 0 00-.583.029 1.572 1.572 0 00.184.668.292.292 0 00.394.122.287.287 0 00.113-.108z"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <p>Tour</p>
        </li>
        <li className="nav-link__item">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28272">
                <path
                  data-name="Rectangle 4485"
                  fill="none"
                  d="M0 0h24v24H0z"
                ></path>
                <g data-name="Group 25252">
                  <g data-name="Rectangle 4295">
                    <path
                      data-name="Path 20305"
                      d="M20.608 21H8.869a.39.39 0 01-.391-.391V3.391A.391.391 0 018.869 3h11.739a.391.391 0 01.391.391v17.217a.391.391 0 01-.391.392zM9.26 20.217h10.957V3.783H9.261z"
                    ></path>
                  </g>
                  <g data-name="Rectangle 4296">
                    <path
                      data-name="Path 20306"
                      d="M8.871 21h-5.48A.39.39 0 013 20.609V8.087a.391.391 0 01.391-.391h5.48a.391.391 0 01.391.391v12.522a.391.391 0 01-.391.391zm-5.087-.783h4.7V8.479h-4.7z"
                    ></path>
                  </g>
                  <g data-name="Rectangle 4297">
                    <path
                      data-name="Path 20307"
                      d="M8.87 13.173H5.739a.39.39 0 01-.391-.391v-2.348a.391.391 0 01.391-.391h3.13a.391.391 0 01.391.391v2.348a.391.391 0 01-.39.391zm-2.739-.783h2.348v-1.564H6.131z"
                    ></path>
                  </g>
                  <g data-name="Rectangle 4298">
                    <path
                      data-name="Path 20308"
                      d="M8.87 17.869H5.739a.39.39 0 01-.391-.391V15.13a.391.391 0 01.391-.391h3.13a.391.391 0 01.391.391v2.348a.391.391 0 01-.39.391zm-2.739-.783h2.348v-1.564H6.131z"
                    ></path>
                  </g>
                  <g data-name="Rectangle 4299">
                    <path
                      data-name="Path 20309"
                      d="M16.695 21h-3.913a.39.39 0 01-.391-.391v-1.561a1.958 1.958 0 011.956-1.956h.783a1.959 1.959 0 011.957 1.956v1.565a.391.391 0 01-.392.387zm-3.522-.783h3.13v-1.169a1.175 1.175 0 00-1.174-1.174h-.783a1.175 1.175 0 00-1.172 1.174z"
                    ></path>
                  </g>
                  <g data-name="Line 2175">
                    <path
                      data-name="Path 20310"
                      d="M11.997 6.131h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2177">
                    <path
                      data-name="Path 20311"
                      d="M18.258 6.131h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2178">
                    <path
                      data-name="Path 20312"
                      d="M11.997 8.479h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2180">
                    <path
                      data-name="Path 20313"
                      d="M18.258 8.479h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2181">
                    <path
                      data-name="Path 20314"
                      d="M11.997 10.826h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2183">
                    <path
                      data-name="Path 20315"
                      d="M18.258 10.826h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2184">
                    <path
                      data-name="Path 20316"
                      d="M11.997 13.174h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2186">
                    <path
                      data-name="Path 20317"
                      d="M18.258 13.174h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2187">
                    <path
                      data-name="Path 20318"
                      d="M11.997 15.522h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2176">
                    <path
                      data-name="Path 20319"
                      d="M15.128 6.131h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2179">
                    <path
                      data-name="Path 20320"
                      d="M15.128 8.479h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2182">
                    <path
                      data-name="Path 20321"
                      d="M15.128 10.826h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2185">
                    <path
                      data-name="Path 20322"
                      d="M15.128 13.174h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2188">
                    <path
                      data-name="Path 20323"
                      d="M15.128 15.522h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                    ></path>
                  </g>
                  <g data-name="Line 2189">
                    <path
                      data-name="Path 20324"
                      d="M18.258 15.522h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <p>Khách sạn</p>
        </li>
        <Link to="/">
          <li className="nav-link__item active">
            <div className="icon">
              <svg
                viewBox="0 0 24 24"
                className="MuiSvgIcon-root"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  d="M6.46 17.25a.59.59 0 01-.25-.07l-4-2.44a.47.47 0 01-.04-.74l1.09-.9a.45.45 0 01.47-.1l2.89 1.08 2.6-1.56-3.67-3.15A.48.48 0 015.38 9a.49.49 0 01.23-.37L7 7.77a.49.49 0 01.44 0L13 10.25l5-3.05a3.07 3.07 0 013.58.28 1.49 1.49 0 01.23.28 1.13 1.13 0 01-.4 1.54l-8 4.8-6.75 3.1a.46.46 0 01-.2.05zm-3.17-3l3.21 2 6.55-3L21 8.48a.18.18 0 000-.24A2.13 2.13 0 0018.53 8l-5.28 3.2a.46.46 0 01-.44 0L7.27 8.71l-.6.36 3.67 3.16a.44.44 0 01.16.4.46.46 0 01-.23.37l-3.36 2a.49.49 0 01-.41 0l-2.85-1z"
                  data-name="Group 12"
                ></path>
              </svg>
            </div>
            <p>Vé máy bay</p>
          </li>
        </Link>
        <li className="nav-link__item">
          <div className="icon">
            <svg
              viewBox="0 0 24 24"
              className="MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M21.3 12.6c.3.3.4.8.4 1.2v5.1c0 .7-.5 1.2-1.2 1.2h-.8c-.7 0-1.2-.5-1.2-1.2v-1.2H5.6v1.2c0 .7-.5 1.2-1.2 1.2h-.8c-.7 0-1.2-.5-1.2-1.2v-5.1c0-.4.1-.9.4-1.2l1.6-2.1H3.2C2.6 10.5 2 10 2 9.3S2.6 8 3.2 8h2.6l1-2.7c.3-.8 1-1.3 1.8-1.3 2.3-.2 4.6-.2 6.9 0 .8 0 1.5.5 1.8 1.3l1 2.7h2.4c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.2-1.2 1.2h-1l1.5 2.1zm-2.4-3.8l.4.9h1.4c.2 0 .4-.2.4-.4s-.2-.4-.4-.4h-1.8zM6 9.7h12.2l-1.5-4c-.2-.5-.6-.8-1.2-.8-1.1-.1-2.3-.2-3.4-.2s-2.3 0-3.4.1c-.5 0-1 .3-1.2.8L6 9.7zm-1.3 0l.4-.9H3.2c-.2 0-.4.2-.4.5 0 .2.2.4.4.4h1.5zM21 13.8c0-.3-.1-.5-.3-.7l-2-2.6H5.5l-2 2.6c-.2.2-.3.5-.3.7v5.1c0 .2.2.4.4.4h.8c.2 0 .4-.2.4-.4v-1.6c0-.2.2-.4.4-.4h13.7c.2 0 .4.2.4.4v1.6c0 .2.2.4.4.4h.8c.2 0 .4-.2.4-.4v-5.1zm-2.2-1c-.2 0-.4.2-.4.4v1c0 .2-.1.3-.3.3h-1.8c-.2 0-.4.2-.4.4s.2.4.4.4h1.8c.6 0 1.1-.5 1.1-1.1v-1c0-.2-.2-.4-.4-.4zM7.9 14.5H6.1c-.2 0-.3-.1-.3-.3v-1c0-.2-.2-.4-.4-.4s-.4.2-.4.4v1c0 .6.5 1.1 1.1 1.1h1.8c.2 0 .4-.2.4-.4s-.2-.4-.4-.4z"></path>
            </svg>
          </div>
          <p>Cho thuê xe</p>
        </li>
        <li className="nav-link__item">
          <div className="icon">
            <svg
              viewBox="0 0 24 24"
              className="MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M20 20.6c0 .7-.5 1.3-1.2 1.4H5.3c-.7 0-1.3-.6-1.3-1.3l.8-13.1c.1-.7.6-1.3 1.3-1.2h2.5v-1c0-.9.4-1.8 1-2.4.7-.6 1.5-1 2.4-1 .9 0 1.8.3 2.4 1 .7.6 1 1.5 1 2.4v1h2.5c.7 0 1.3.5 1.3 1.2l.8 13zM9.5 6.4h5v-1C14.5 4 13.4 3 12 3c-.7 0-1.3.3-1.8.7-.4.4-.7 1.1-.7 1.7v1zM19 20.7l-.7-13c0-.2-.2-.3-.4-.3h-2.5v1c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-1h-5v1c0 .3-.2.5-.5.5s-.4-.3-.4-.6v-1H6.1c-.2 0-.3.1-.4.3L5 20.7c0 .2.1.3.3.3h13.4c.1 0 .2 0 .2-.1.1 0 .1-.1.1-.2z"></path>
            </svg>
          </div>
          <p>Mua sắm</p>
        </li>
      </ul>
      <div className="user-control">
        <div className="control">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g data-name="Group 28284">
              <path
                data-name="Rectangle 4481"
                fill="none"
                d="M0 0h24v24H0z"
              ></path>
              <g data-name="Vector Smart Object14">
                <g
                  data-name="Group 20"
                  transform="translate(2 3.001)"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                >
                  <path
                    data-name="Path 42"
                    d="M5.746 10.195h11.808a.861.861 0 00.849-.694l1.6-7.8H3.154"
                  ></path>
                  <ellipse
                    data-name="Ellipse 7"
                    cx="1.728"
                    cy="1.699"
                    rx="1.728"
                    ry="1.699"
                    transform="translate(5.225 14.56)"
                    strokeLinecap="round"
                  ></ellipse>
                  <ellipse
                    data-name="Ellipse 8"
                    cx="1.728"
                    cy="1.699"
                    rx="1.728"
                    ry="1.699"
                    transform="translate(14.817 14.56)"
                    strokeLinecap="round"
                  ></ellipse>
                  <path
                    data-name="Path 43"
                    d="M0 0h1.942a.868.868 0 01.841.63l2.964 10.852a1.734 1.734 0 001.682 1.262h10.844"
                    strokeLinecap="round"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div className="tooltip tooltip-1">Giỏ hàng</div>
        </div>
        <div className="control">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="MuiSvgIcon-root MuiSvgIcon-colorAction"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g data-name="Group 28285">
              <path
                data-name="Rectangle 4482"
                fill="none"
                d="M0 0h24v24H0z"
              ></path>
              <g data-name="Vector Smart Object15">
                <g
                  data-name="Group 19"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    data-name="Path 34"
                    d="M21.143 14.964v4.132a.852.852 0 01-.871.826H3.715"
                  ></path>
                  <path
                    data-name="Path 35"
                    d="M3.715 7.369h16.556a.852.852 0 01.871.826V11.5"
                  ></path>
                  <path data-name="Path 36" d="M2 7.528V18.27"></path>
                  <path
                    data-name="Path 37"
                    d="M3.715 4a1.654 1.654 0 100 3.305"
                  ></path>
                  <path data-name="Line 14" d="M2 8.132V5.653"></path>
                  <path
                    data-name="Path 38"
                    d="M18.295 7.306V4.827a.843.843 0 00-.857-.826H3.715"
                  ></path>
                  <path
                    data-name="Path 39"
                    d="M2 18.269a1.69 1.69 0 001.715 1.653"
                  ></path>
                  <path
                    data-name="Path 40"
                    d="M15.905 14.875a1.654 1.654 0 110-3.305"
                  ></path>
                  <path
                    data-name="Path 41"
                    d="M15.998 14.875h5.145a.843.843 0 00.857-.826v-1.653a.843.843 0 00-.857-.826h-5.145"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div className="tooltip tooltip-2">Tài khoản thanh toán</div>
        </div>
        <div className="control messenger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="MuiSvgIcon-root MuiSvgIcon-colorPrimary"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g data-name="Group 28281">
              <path
                data-name="Rectangle 4485"
                fill="none"
                d="M0 0h24v24H0z"
              ></path>
              <g data-name="Group 28280">
                <g data-name="Layer 4">
                  <path
                    data-name="Path 20325"
                    d="M12.02 22a10.092 10.092 0 01-2.166-.236 10 10 0 117.537-1.344l-.16-.251.16.251A9.938 9.938 0 0112.02 22zm-.035-19.406a9.4 9.4 0 107.94 4.334 9.354 9.354 0 00-7.94-4.334z"
                    stroke="currentColor"
                    strokeWidth="0.2"
                  ></path>
                </g>
                <g data-name="Layer 5">
                  <g data-name="Group 28275">
                    <g data-name="h logo">
                      <g data-name="Group 8970">
                        <path data-name="Path 14262" d="M13.847 10.246"></path>
                      </g>
                      <g data-name="Group 8971">
                        <path
                          data-name="Path 14263"
                          d="M14.284 12.983l-.066-.051-3.844-3.693-.091-.047a1.218 1.218 0 00-.22.037l-1.089.336a.253.253 0 00-.152.278c.008.03.021.034.049.064l3.84 3.815a1.525 1.525 0 00.4.331.839.839 0 00.55.126.817.817 0 00.5-.171.863.863 0 00.329-.392.523.523 0 00-.131-.541z"
                        ></path>
                      </g>
                    </g>
                    <g data-name="h logo">
                      <g data-name="h1">
                        <g data-name="Group 8970">
                          <path
                            data-name="Path 14262"
                            d="M12.351 11.732"
                          ></path>
                        </g>
                      </g>
                      <g data-name="h">
                        <g data-name="Group 8971">
                          <path
                            data-name="Path 14263"
                            d="M12.769 14.618l-.066-.051-5.789-5.856-.091-.046a1.224 1.224 0 00-.223.051l-1.106.411a.289.289 0 00-.156.3c.008.031.021.036.049.066l5.784 5.985a1.439 1.439 0 00.407.332.793.793 0 00.557.107.846.846 0 00.513-.206.983.983 0 00.337-.433.563.563 0 00-.129-.568z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g data-name="Group 28274">
                      <path
                        data-name="Path 20326"
                        d="M16.888 9.609c.738-.462 1.79-.527 2.047.552-.641-.382-1.486.409-1.97.922l-1.767 1.873-2.452-2.314c1.777-1.078 3.6-1.843 4.142-1.034"
                        fillRule="evenodd"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div className="tooltip tooltip-3">Messenger</div>
        </div>
        <div className="control user">
          <svg
            className="MuiSvgIcon-root MuiAvatar-fallback"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
          </svg>
          <input type="checkbox" />
          <div className="dropbox">
            {auth.username && (
              <Link to={`/user/${auth.userId}`}>
                <div className="dropbox-item user">
                  <div className="nav-user-icon">
                    <svg
                      className="MuiSvgIcon-root MuiAvatar-fallback"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    </svg>
                  </div>
                  <p>
                    {auth.username} <br />
                    <span>Xem hồ sơ của bạn</span>
                  </p>
                </div>
              </Link>
            )}
            <Link to={auth.userId ? `/user/${auth.userId}` : '/user/@guest'}>
              <div className="dropbox-item">
                <svg
                  viewBox="0 0 24 24"
                  className="MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M18.7 3.3H18c0-.7-.5-1.3-1.2-1.3s-1.3.6-1.3 1.3h-9c-.7 0-1.3.6-1.3 1.3v1.3h-.4c-.2 0-.3.1-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v1.3h-.3c-.2 0-.3.2-.3.3 0 .2.1.3.3.3h.3v.6c0 .7.6 1.3 1.3 1.3h12.3c.7 0 1.3-.6 1.3-1.3V4.6c0-.7-.6-1.3-1.3-1.3zm-2.6 0c0-.4.3-.6.6-.6s.6.3.6.6v1H16v-1zm0 1.6h1.3v8.7h-1.3V4.9zm0 9.4h1.3v.2l-.6 1.3-.6-1.3-.1-.2zm-9.7 7.1c-.4 0-.6-.3-.6-.6v-.6h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3v-1.3h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3v-1.3h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3v-1.3h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3v-1.3h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3v-1.3h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3V8.5h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3V6.5h.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3h-.3V4.6c0-.4.3-.6.6-.6H7v17.4h-.6zm12.9-.7c0 .4-.3.6-.6.6h-11V3.9h7.7v1.9h-.3v-.6c0-.2-.1-.3-.3-.3-.2 0-.3.1-.3.3v3.9c0 .2.1.3.3.3.2 0 .3-.1.3-.3V6.5h.3v8.2l1 1.9c.1.2.3.2.4.1.1 0 .1-.1.1-.1l1-1.9V3.9h.6c.4 0 .6.3.6.6v16.2z"></path>
                </svg>
                <p>{isLoggedIn ? 'Sổ tay' : 'Quản lý đơn hàng'}</p>
              </div>
            </Link>
            <div className="dropbox-item" onClick={toggleTheme}>
              {theme === 'dark' ? (
                <svg
                  data-name="Capa 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M20.57 13.24a.62.62 0 00-.52.11 6.79 6.79 0 01-2.05 1.2 6.34 6.34 0 01-2.33.41A6.74 6.74 0 018.91 8.2 7.09 7.09 0 019.28 6a6.19 6.19 0 011.1-2 .58.58 0 00-.09-.83.63.63 0 00-.53-.11 9.27 9.27 0 00-4.87 3.26A9.1 9.1 0 0012.11 21 9.12 9.12 0 0021 14a.55.55 0 00-.43-.76zm-3.51 4.81a7.93 7.93 0 01-12.82-6.21A7.75 7.75 0 015.88 7a7.93 7.93 0 012.64-2.18c-.11.25-.23.51-.32.78a7.63 7.63 0 00-.44 2.62 7.94 7.94 0 007.94 7.94 7.82 7.82 0 002.74-.48c.29-.12.59-.23.87-.37a8.4 8.4 0 01-2.25 2.74z"></path>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M17.1 12c0 2.8-2.3 5.1-5.1 5.1S6.9 14.8 6.9 12 9.2 6.9 12 6.9s5.1 2.3 5.1 5.1zm-1.2 0c0-2.2-1.8-3.9-3.9-3.9S8.1 9.8 8.1 12s1.8 3.9 3.9 3.9 3.9-1.7 3.9-3.9zM12 5.8c.3 0 .6-.3.6-.6V3.6c0-.3-.3-.6-.6-.6s-.6.3-.6.6v1.7c0 .3.3.5.6.5zm0 12.4c-.3 0-.6.3-.6.6v1.7c0 .3.3.6.6.6s.6-.3.6-.6v-1.7c0-.4-.3-.6-.6-.6zm8.4-6.8h-1.7c-.3 0-.6.3-.6.6s.3.6.6.6h1.7c.3 0 .6-.3.6-.6s-.3-.6-.6-.6zM5.8 12c0-.3-.3-.6-.6-.6H3.6c-.3 0-.6.3-.6.6s.3.6.6.6h1.7c.3 0 .5-.3.5-.6zm11-4.2c.1 0 .3-.1.4-.2l1.2-1.2c.2-.2.2-.6 0-.8-.2-.2-.6-.2-.8 0l-1.2 1.2c-.4.4-.1 1 .4 1zm-10 8.6l-1.2 1.2c-.4.4-.1 1 .4 1 .1 0 .3-.1.4-.2l1.2-1.2c.2-.2.2-.6 0-.8-.2-.2-.6-.2-.8 0zm10.4 0c-.2-.2-.6-.2-.8 0-.2.2-.2.6 0 .8l1.2 1.2c.1.1.3.2.4.2.5 0 .8-.6.4-1l-1.2-1.2zM6.8 7.6c.1.1.3.2.4.2.5 0 .8-.6.4-1L6.4 5.6c-.2-.2-.6-.2-.8 0-.2.2-.2.6 0 .8l1.2 1.2z"></path>
                </svg>
              )}
              <p>
                Chế độ tối ({theme === 'dark' ? 'Tắt' : 'Bật'}) <br />
                <span>
                  Điều chỉnh giao diện để giảm độ chói và cho đôi mắt được nghỉ
                  ngơi.
                </span>
              </p>
            </div>
            {auth.isAdmin && auth.isAdmin !== '0' && (
              <Link to="/admin/dashboard">
                <div className="dropbox-item">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="cog"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-cog fa-w-16 fa-3x"
                  >
                    <path
                      fill="currentColor"
                      d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
                      className=""
                    ></path>
                  </svg>
                  <p>Admin Dashboard</p>
                </div>
              </Link>
            )}
            <Link to="/authentication">
              <div className="dropbox-item" onClick={logoutHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g data-name="Group 29031">
                    <g data-name="Group 28715">
                      <path
                        data-name="Rectangle 4595"
                        fill="none"
                        d="M0 0h24v24H0z"
                      ></path>
                      <g data-name="Group 28574">
                        <g data-name="Group 28570">
                          <path
                            data-name="Path 20399"
                            d="M5.879 21h8.266a1.879 1.879 0 001.879-1.875v-3.75a.376.376 0 00-.751 0v3.75a1.127 1.127 0 01-1.127 1.125H5.88a1.127 1.127 0 01-1.127-1.125V4.875A1.127 1.127 0 015.879 3.75h8.266a1.127 1.127 0 011.127 1.125v3.75a.376.376 0 00.751 0v-3.75A1.879 1.879 0 0014.144 3H5.878a1.879 1.879 0 00-1.879 1.875v14.25A1.879 1.879 0 005.879 21z"
                            stroke="#000"
                            strokeWidth="0.25"
                          ></path>
                        </g>
                        <g data-name="Group 28571">
                          <path
                            data-name="Path 20400"
                            d="M9.353 12.375h11.271a.376.376 0 100-.751H9.353a.376.376 0 000 .751z"
                            stroke="#000"
                            strokeWidth="0.25"
                          ></path>
                        </g>
                        <g data-name="Group 28572">
                          <path
                            data-name="Path 20401"
                            d="M12.359 15.381a.375.375 0 00.266-.641L9.885 12l2.74-2.74a.376.376 0 10-.531-.531l-3.006 3.006a.376.376 0 000 .531l3.006 3.006a.377.377 0 00.265.109z"
                            stroke="#000"
                            strokeWidth="0.25"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                {isLoggedIn && <p onClick={auth.logout}>Đăng xuất</p>}
                {!isLoggedIn && <p>Đăng nhập</p>}
              </div>
            </Link>
            <hr />
            <div className="dropbox-item options">
              <div className="dropbox-item__option">
                <svg
                  viewBox="0 0 24 24"
                  className="MuiSvgIcon-root MuiSvgIcon-colorAction"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="0.25"
                    d="M12.5 3.5c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm-2.6 1C8.8 5.5 8 6.8 7.5 8.2L5 8.7c1-2 2.8-3.5 4.9-4.2zM4.7 9.3l2.6-.4c-.3 1.1-.5 2.2-.5 3.3H4.1c0-1 .2-1.9.6-2.9zm-.6 3.5h2.7c0 1.1.2 2.2.5 3.3l-2.6-.4c-.4-1-.6-1.9-.6-2.9zm.9 3.5l2.5.4c.4 1.4 1.3 2.7 2.4 3.7-2.1-.6-3.9-2.1-4.9-4.1zm7.2 4.6c-1.7-.2-3.2-1.7-4.1-4l.8.1c1.1.2 2.2.3 3.3.3v3.6zm0-4.2c-1.1 0-2.2-.1-3.2-.3l-1.1-.2c-.3-1.1-.5-2.3-.5-3.4h4.8v3.9zm0-4.5H7.4c0-1.2.2-2.3.5-3.4L9 8.6c1.1-.2 2.1-.3 3.2-.3v3.9zm0-4.5c-1.1 0-2.2.1-3.3.3l-.8.1c.8-2.3 2.3-3.9 4.1-4v3.6zm8.7 4.5h-2.7c0-1.1-.2-2.2-.5-3.3l2.6.4c.4 1 .6 1.9.6 2.9zM20 8.7l-2.5-.4c-.4-1.4-1.3-2.7-2.4-3.7 2.1.6 3.9 2.1 4.9 4.1zm-7.2-4.6c1.7.2 3.2 1.7 4.1 4l-.8-.1c-1.1-.2-2.2-.3-3.3-.3V4.1zm0 4.2c1.1 0 2.2.1 3.2.3l1.1.2c.3 1.1.5 2.3.5 3.4h-4.8V8.3zm0 4.5h4.8c0 1.2-.2 2.3-.5 3.4l-1.1.2c-1.1.2-2.1.3-3.2.3v-3.9zm0 4.5c1.1 0 2.2-.1 3.3-.3l.7-.1c-.8 2.3-2.3 3.9-4.1 4v-3.6zm2.3 3.2h0c1.1-1 1.9-2.3 2.4-3.7l2.5-.4c-1 1.9-2.8 3.4-4.9 4.1zm2.6-4.4c.3-1.1.5-2.2.5-3.3h2.7c0 1-.2 1.9-.6 2.9l-2.6.4z"
                  ></path>
                </svg>
                <p>Tiếng Việt</p>
              </div>
              <div className="dropbox-item__option">
                <svg
                  viewBox="0 0 24 24"
                  className="MuiSvgIcon-root MuiSvgIcon-colorAction"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="0.2"
                    d="M21.7 4.5H2.3c-.2 0-.3.1-.3.3v9.7s0 0 0 0v0s0 0 0 0v0h0v0h0v0h0l18 4.1h.1c.2 0 .3-.1.3-.3v-1.8l.8.1h0c.2 0 .3-.1.3-.3v-1.6h.3c.2 0 .3-.1.3-.3V4.8c-.1-.2-.2-.3-.4-.3zm-19.1.6h2.1c-.2 1-1.1 1.9-2.1 2v-2zm0 9.1v-2.1c1.1.1 1.9 1 2.1 2.1H2.6zM19.8 18L7.1 15.3l12.6 1.3V18zm1.1-1.9l-13-1.3h13v1.3zm.5-1.9h0-2.1c.1-1.1 1-1.9 2.1-2.1v2.1zm0-2.6c-1.4.1-2.5 1.2-2.6 2.6H5.2c-.1-1.4-1.2-2.5-2.6-2.6V7.7C3.9 7.5 5 6.4 5.2 5.1h13.7c.1 1.4 1.2 2.5 2.6 2.6v3.9zm0-4.5c-1.1-.1-1.9-1-2.1-2.1h2.1v2.1zm-9.7 1.6c0 .2.1.4.7.6.3.1 1.1.4 1.1 1.2 0 .5-.4 1-.9 1.1v.1c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3v-.1c-.5-.1-.9-.6-.9-1.1 0-.2.1-.3.3-.3.2 0 .3.1.3.3 0 .3.3.6.6.6s.6-.3.6-.6c0-.2-.1-.4-.7-.6-.7-.2-1.1-.6-1.1-1.2 0-.5.4-1 .9-1.1v-.1c0-.2.1-.3.3-.3.2 0 .3.1.3.3v.1c.5.1.9.6.9 1.1 0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3 0-.3-.3-.6-.6-.6-.4 0-.6.3-.6.6zm3.6-1.2c.9 1.3.9 3 0 4.2-1.2 1.7-3.5 2.1-5.1.9-1.7-1.2-2.1-3.5-.9-5.1 1.2-1.7 3.5-2.1 5.1-.9.1.1.1.2.1.3-.1.1-.2.2-.4.1-1.1-.8-2.5-.8-3.6 0-1.4 1-1.8 3-.8 4.4 1 1.4 3 1.8 4.4.8s1.8-3 .8-4.4c0 0 0 0 0 0-.1-.1-.1-.3.1-.4 0 0 .2 0 .3.1z"
                  ></path>
                </svg>
                <p>VND</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
