import React, { useState, useContext, useEffect } from 'react';
import BoxAnhBia from './ChildComponent/BoxAnhBia';
import BoxAnhDaiDien from './ChildComponent/BoxAnhDaiDien';
import BoxLoaiHinh from './ChildComponent/BoxLoaiHinh';
import BoxTuyChon from './ChildComponent/BoxTuyChon';
import BoxThoiGian from './ChildComponent/BoxThoiGian';
import BoxContentTabMain from './ChildComponent/BoxContentTabMain';
import { ThemeContext } from '../../shared/context/ThemeProvider';
import { AuthContext } from '../../shared/context/auth-context';

import Cart from '../Cart';

import './UserInfo.css';

function UserInfo() {
  const auth = useContext(AuthContext);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const [showBoxThoiGian, setShowBoxThoiGian] = useState(false);
  const [showBoxTuyChon, setShowTuyChon] = useState(false);
  const [showBoxAnhDaiDien, setShowBoxAnhDaiDien] = useState(false);
  const [showBoxAnhBia, setShowBoxAnhBia] = useState(false);
  const [showBoxLoaiHinh, setShowBoxLoaiHinh] = useState(false);
  //
  const [tabMain, setTabMain] = useState(1);
  const [tabHeader, setTabHeader] = useState(6);
  const [thoiGian, setThoiGian] = useState(0);

  const storedFlightData = JSON.parse(localStorage.getItem('flightData'));

  const [status, setStatus] = useState(storedFlightData ? true : false);

  return (
    <div
      className={theme === 'dark' ? 'user-container dark' : 'user-container'}
    >
      <div className="persinal-page">
        <div className="coverImage">
          <img
            src="https://www.hahalolo.com/0722b1d21f6bed6d7196936bdfb98cec.jpg"
            alt=""
          />
        </div>
        <div
          className="btn-thaydoianhbia"
          onClick={() => setShowBoxAnhBia((pre) => !pre)}
        >
          <div className="thaydoianhbia">
            <svg
              className="camera-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="24"
              height="24"
            >
              <g
                id="Group_28342"
                data-name="Group 28342"
                transform="translate(12663 11726)"
              >
                <rect
                  id="Rectangle_4494"
                  data-name="Rectangle 4494"
                  width="24"
                  height="24"
                  transform="translate(-12663 -11726)"
                  fill="none"
                ></rect>
                <g
                  id="Group_28109"
                  data-name="Group 28109"
                  transform="translate(-12661 -11766.8)"
                >
                  <g
                    id="Group_28108"
                    data-name="Group 28108"
                    transform="translate(0 44.8)"
                  >
                    <g
                      id="Group_28107"
                      data-name="Group 28107"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_20212"
                        data-name="Path 20212"
                        d="M19.333,47.252a2.15,2.15,0,0,0-1.578-.665H14.6v-.038a1.707,1.707,0,0,0-.513-1.236,1.739,1.739,0,0,0-1.236-.513h-5.7A1.753,1.753,0,0,0,5.38,46.549v.038H2.243a2.15,2.15,0,0,0-1.578.665A2.26,2.26,0,0,0,0,48.83V58.3a2.15,2.15,0,0,0,.665,1.578,2.26,2.26,0,0,0,1.578.665H17.755a2.15,2.15,0,0,0,1.578-.665A2.26,2.26,0,0,0,20,58.3V48.83A2.15,2.15,0,0,0,19.333,47.252ZM19.01,58.3h-.019a1.233,1.233,0,0,1-1.236,1.236H2.243A1.233,1.233,0,0,1,1.008,58.3V48.83a1.233,1.233,0,0,1,1.236-1.236H5.912a.511.511,0,0,0,.513-.513V46.53a.716.716,0,0,1,.741-.741h5.684a.716.716,0,0,1,.741.741v.551a.511.511,0,0,0,.513.513h3.669A1.233,1.233,0,0,1,19.01,48.83Z"
                        transform="translate(0 -44.8)"
                      ></path>
                      <path
                        id="Path_20213"
                        data-name="Path 20213"
                        d="M116.676,130.8a4.673,4.673,0,1,0,3.308,1.369A4.685,4.685,0,0,0,116.676,130.8Zm2.585,7.281a3.672,3.672,0,0,1-5.171,0,3.634,3.634,0,0,1-1.065-2.585,3.715,3.715,0,0,1,1.065-2.585,3.634,3.634,0,0,1,2.585-1.065,3.715,3.715,0,0,1,2.585,1.065,3.634,3.634,0,0,1,1.065,2.585A3.557,3.557,0,0,1,119.262,138.081Z"
                        transform="translate(-106.677 -126.713)"
                      ></path>
                      <circle
                        id="Ellipse_858"
                        data-name="Ellipse 858"
                        cx="0.931"
                        cy="0.931"
                        r="0.931"
                        transform="translate(15.835 4.068)"
                      ></circle>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <p>Thay đổi ảnh bìa</p>
        </div>
        <BoxAnhBia
          showBoxAnhBia={showBoxAnhBia}
          setShowBoxAnhBia={setShowBoxAnhBia}
        />
        <div className="avatar">
          <svg
            className="avatar-icon MuiAvatar-fallback"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
          </svg>
          {auth.username && <span className="nameUser">{auth.username}</span>}
          {!auth.username && <span className="nameUser">@GUEST</span>}
          <div
            className="camera"
            onClick={() => setShowBoxAnhDaiDien((pre) => !pre)}
          >
            <svg
              className="camera-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="24"
              height="24"
            >
              <g
                id="Group_28342"
                data-name="Group 28342"
                transform="translate(12663 11726)"
              >
                <rect
                  id="Rectangle_4494"
                  data-name="Rectangle 4494"
                  width="24"
                  height="24"
                  transform="translate(-12663 -11726)"
                  fill="none"
                ></rect>
                <g
                  id="Group_28109"
                  data-name="Group 28109"
                  transform="translate(-12661 -11766.8)"
                >
                  <g
                    id="Group_28108"
                    data-name="Group 28108"
                    transform="translate(0 44.8)"
                  >
                    <g
                      id="Group_28107"
                      data-name="Group 28107"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_20212"
                        data-name="Path 20212"
                        d="M19.333,47.252a2.15,2.15,0,0,0-1.578-.665H14.6v-.038a1.707,1.707,0,0,0-.513-1.236,1.739,1.739,0,0,0-1.236-.513h-5.7A1.753,1.753,0,0,0,5.38,46.549v.038H2.243a2.15,2.15,0,0,0-1.578.665A2.26,2.26,0,0,0,0,48.83V58.3a2.15,2.15,0,0,0,.665,1.578,2.26,2.26,0,0,0,1.578.665H17.755a2.15,2.15,0,0,0,1.578-.665A2.26,2.26,0,0,0,20,58.3V48.83A2.15,2.15,0,0,0,19.333,47.252ZM19.01,58.3h-.019a1.233,1.233,0,0,1-1.236,1.236H2.243A1.233,1.233,0,0,1,1.008,58.3V48.83a1.233,1.233,0,0,1,1.236-1.236H5.912a.511.511,0,0,0,.513-.513V46.53a.716.716,0,0,1,.741-.741h5.684a.716.716,0,0,1,.741.741v.551a.511.511,0,0,0,.513.513h3.669A1.233,1.233,0,0,1,19.01,48.83Z"
                        transform="translate(0 -44.8)"
                      ></path>
                      <path
                        id="Path_20213"
                        data-name="Path 20213"
                        d="M116.676,130.8a4.673,4.673,0,1,0,3.308,1.369A4.685,4.685,0,0,0,116.676,130.8Zm2.585,7.281a3.672,3.672,0,0,1-5.171,0,3.634,3.634,0,0,1-1.065-2.585,3.715,3.715,0,0,1,1.065-2.585,3.634,3.634,0,0,1,2.585-1.065,3.715,3.715,0,0,1,2.585,1.065,3.634,3.634,0,0,1,1.065,2.585A3.557,3.557,0,0,1,119.262,138.081Z"
                        transform="translate(-106.677 -126.713)"
                      ></path>
                      <circle
                        id="Ellipse_858"
                        data-name="Ellipse 858"
                        cx="0.931"
                        cy="0.931"
                        r="0.931"
                        transform="translate(15.835 4.068)"
                      ></circle>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <BoxAnhDaiDien
          showBoxAnhDaiDien={showBoxAnhDaiDien}
          setShowBoxAnhDaiDien={setShowBoxAnhDaiDien}
        />
        <div className="tuychon">
          <div className="tuychon-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="tuychon-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28304">
                <path
                  data-name="Rectangle 4426"
                  fill="none"
                  d="M0 0h24v24H0z"
                ></path>
                <g
                  data-name="Group 28102"
                  transform="translate(12637.522 11688.142)"
                >
                  <circle
                    data-name="Ellipse 551"
                    cx="2"
                    cy="2"
                    r="2"
                    transform="translate(-12635.521 -11678.028)"
                  ></circle>
                  <circle
                    data-name="Ellipse 551 copy"
                    cx="2.057"
                    cy="2.057"
                    r="2.057"
                    transform="translate(-12627.58 -11678.143)"
                  ></circle>
                  <circle
                    data-name="Ellipse 551 copy 2"
                    cx="2.057"
                    cy="2.057"
                    r="2.057"
                    transform="translate(-12619.636 -11678.143)"
                  ></circle>
                </g>
              </g>
            </svg>
          </div>
          <p>Thêm</p>
        </div>
        <div className="tabcontrol">
          <div
            onClick={() => setTabHeader(1)}
            className={tabHeader === 1 ? 'tabItem active' : 'tabItem'}
          >
            <svg
              className="tab-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g
                id="Group_27930"
                data-name="Group 27930"
                transform="translate(12863 11725)"
              >
                <rect
                  id="Rectangle_4407"
                  data-name="Rectangle 4407"
                  width="24"
                  height="24"
                  transform="translate(-12863 -11725)"
                  fill="none"
                ></rect>
                <g
                  id="Group_27920"
                  data-name="Group 27920"
                  transform="translate(-12923.913 -11732.193)"
                >
                  <rect
                    id="Rectangle_4414"
                    data-name="Rectangle 4414"
                    width="5.52"
                    height="3.154"
                    transform="translate(75.741 21.071)"
                    fill="none"
                  ></rect>
                  <path
                    id="Path_20136"
                    data-name="Path 20136"
                    d="M74.952,20.283v4.731h7.1V20.283Zm6.308,3.942H75.741V21.071H81.26Z"
                  ></path>
                  <rect
                    id="Rectangle_4415"
                    data-name="Rectangle 4415"
                    width="5.52"
                    height="3.154"
                    transform="translate(64.702 14.763)"
                    fill="none"
                  ></rect>
                  <path
                    id="Path_20137"
                    data-name="Path 20137"
                    d="M63.913,18.706h7.1V13.975h-7.1Zm.789-3.943h5.519v3.154H64.7Z"
                  ></path>
                  <rect
                    id="Rectangle_4416"
                    data-name="Rectangle 4416"
                    width="0.789"
                    height="5.527"
                    transform="translate(72.593 10.193)"
                  ></rect>
                  <rect
                    id="Rectangle_4417"
                    data-name="Rectangle 4417"
                    width="0.789"
                    height="2.764"
                    transform="translate(72.593 17.75)"
                  ></rect>
                  <rect
                    id="Rectangle_4418"
                    data-name="Rectangle 4418"
                    width="0.789"
                    height="0.789"
                    transform="translate(72.593 16.34)"
                  ></rect>
                  <rect
                    id="Rectangle_4419"
                    data-name="Rectangle 4419"
                    width="0.789"
                    height="5.527"
                    transform="translate(72.593 22.629)"
                  ></rect>
                  <rect
                    id="Rectangle_4420"
                    data-name="Rectangle 4420"
                    width="0.789"
                    height="0.789"
                    transform="translate(72.593 21.22)"
                  ></rect>
                </g>
              </g>
            </svg>
            <span>Dòng Thời Gian</span>
          </div>
          <div
            onClick={() => setTabHeader(2)}
            className={tabHeader === 2 ? 'tabItem active' : 'tabItem'}
          >
            <svg
              className="tab-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g
                id="Group_27955"
                data-name="Group 27955"
                transform="translate(12862 11691)"
              >
                <g
                  id="Group_27941"
                  data-name="Group 27941"
                  transform="translate(-300 34)"
                >
                  <rect
                    id="Rectangle_4399"
                    data-name="Rectangle 4399"
                    width="24"
                    height="24"
                    transform="translate(-12562 -11725)"
                    fill="none"
                  ></rect>
                </g>
                <g
                  id="Group_27952"
                  data-name="Group 27952"
                  transform="translate(-12859.031 -11688)"
                >
                  <g
                    id="Group_27948"
                    data-name="Group 27948"
                    transform="translate(9.788 9.758)"
                  >
                    <g id="Group_27947" data-name="Group 27947">
                      <path
                        id="Path_20144"
                        data-name="Path 20144"
                        d="M285.494,278.979l-1.5-1.5a.375.375,0,0,0-.53,0l-6,6a.377.377,0,0,0-.109.265v1.5a.375.375,0,0,0,.375.375h1.5a.372.372,0,0,0,.265-.11l4.495-4.495h0v0l1.5-1.5A.375.375,0,0,0,285.494,278.979Zm-6.416,5.886h-.969V283.9l4.122-4.122.969.969Zm4.652-4.652-.969-.969.969-.969.969.969Z"
                        transform="translate(-277.36 -277.37)"
                      ></path>
                    </g>
                  </g>
                  <g
                    id="Group_27950"
                    data-name="Group 27950"
                    transform="translate(0.032 0)"
                  >
                    <g
                      id="Group_27949"
                      data-name="Group 27949"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_20145"
                        data-name="Path 20145"
                        d="M17.277,8.561,15.777.31a.376.376,0,0,0-.431-.3l-4.7.784L1.188,0A.355.355,0,0,0,.911.093.374.374,0,0,0,.782.356l-.75,13.5a.374.374,0,0,0,.332.394l3.277.365.146.828a.374.374,0,0,0,.368.31.3.3,0,0,0,.052,0L9.459,15a.375.375,0,1,0-.1-.743l-4.891.7L2.342,2.935,15.105.808,16.539,8.7a.375.375,0,0,0,.738-.134ZM1.845,2.257a.375.375,0,0,0-.308.435L3.506,13.845l-2.7-.3L1.51.782l6.122.51Z"
                        transform="translate(-0.032 0)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span>Giới Thiệu</span>
          </div>
          <div
            onClick={() => setTabHeader(3)}
            className={tabHeader === 3 ? 'tabItem active' : 'tabItem'}
          >
            <svg
              className="tab-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g
                id="Group_28071"
                data-name="Group 28071"
                transform="translate(12712 11687)"
              >
                <rect
                  id="Rectangle_4426"
                  data-name="Rectangle 4426"
                  width="24"
                  height="24"
                  transform="translate(-12712 -11687)"
                  fill="none"
                ></rect>
                <g
                  id="Group_12553"
                  data-name="Group 12553"
                  transform="translate(-12709 -11682.01)"
                >
                  <g
                    id="Path_18204"
                    data-name="Path 18204"
                    transform="translate(3.684 0.01)"
                  >
                    <path
                      id="Path_20201"
                      data-name="Path 20201"
                      d="M7.4,7.122c-.069,0-.138,0-.207-.008a2.707,2.707,0,0,1-2.5-2.882V2.883a2.284,2.284,0,0,1,0-.371,2.706,2.706,0,0,1,5.4.408l0,1.33a2.265,2.265,0,0,1,0,.369A2.706,2.706,0,0,1,7.4,7.122ZM7.391.99a1.727,1.727,0,0,0-1.719,1.6,1.8,1.8,0,0,0,0,.258l0,1.405c0,.012,0,.025,0,.037a1.727,1.727,0,0,0,3.444.259,1.811,1.811,0,0,0,0-.259l0-1.4A1.743,1.743,0,0,0,8.7,1.591a1.711,1.711,0,0,0-1.179-.6C7.479.991,7.435.99,7.391.99ZM5.184,4.25h0Z"
                      transform="translate(-4.687 -0.01)"
                    ></path>
                  </g>
                  <g
                    id="Ellipse_822"
                    data-name="Ellipse 822"
                    transform="translate(10.043 0.386)"
                  >
                    <path
                      id="Path_20202"
                      data-name="Path 20202"
                      d="M15.122,5.318A2.375,2.375,0,0,1,12.79,2.907a2.333,2.333,0,1,1,4.663,0A2.374,2.374,0,0,1,15.122,5.318Zm0-3.842a1.4,1.4,0,0,0-1.352,1.431,1.355,1.355,0,1,0,2.7,0A1.4,1.4,0,0,0,15.122,1.475Z"
                      transform="translate(-12.79 -0.496)"
                    ></path>
                  </g>
                  <g
                    id="Path_18205"
                    data-name="Path 18205"
                    transform="translate(10.078 6.951)"
                  >
                    <path
                      id="Path_20203"
                      data-name="Path 20203"
                      d="M15.854,14.369a.49.49,0,1,1,0-.979h3.609a.268.268,0,0,0,.248-.306,3.994,3.994,0,0,0-3.865-3.327,3.638,3.638,0,0,0-2.285.773.49.49,0,1,1-.594-.778,4.777,4.777,0,0,1,2.883-.974h.006a4.975,4.975,0,0,1,4.821,4.137,1.238,1.238,0,0,1-1,1.435,1.267,1.267,0,0,1-.2.02Z"
                      transform="translate(-12.773 -8.777)"
                    ></path>
                  </g>
                  <g
                    id="Path_18206"
                    data-name="Path 18206"
                    transform="translate(0 7.448)"
                  >
                    <path
                      id="Path_20204"
                      data-name="Path 20204"
                      d="M1.234,16.548A1.255,1.255,0,0,1,0,15.26a1.128,1.128,0,0,1,.014-.151,6.492,6.492,0,0,1,6.31-5.69h.017a6.5,6.5,0,0,1,6.312,5.707,1.228,1.228,0,0,1-.231.913,1.243,1.243,0,0,1-.82.494,1.5,1.5,0,0,1-.159.014Zm5.1-6.149A5.514,5.514,0,0,0,.984,15.242a.3.3,0,0,0,.071.241.276.276,0,0,0,.192.085H11.432a.283.283,0,0,0,.2-.109.271.271,0,0,0,.05-.2A5.518,5.518,0,0,0,6.333,10.4Z"
                      transform="translate(0 -9.419)"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span>Bạn Bè</span>
          </div>
          <div
            onClick={() => setTabHeader(4)}
            className={tabHeader === 4 ? 'tabItem active' : 'tabItem'}
          >
            <svg
              className="tab-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g
                id="Group_27934"
                data-name="Group 27934"
                transform="translate(12727 11725)"
              >
                <rect
                  id="Rectangle_4411"
                  data-name="Rectangle 4411"
                  width="24"
                  height="24"
                  transform="translate(-12727 -11725)"
                  fill="none"
                ></rect>
                <g
                  id="Vector_Smart_Object"
                  data-name="Vector Smart Object"
                  transform="translate(-12724.201 -11720)"
                >
                  <g
                    id="Group_27068"
                    data-name="Group 27068"
                    transform="translate(0.201)"
                  >
                    <g
                      id="Rectangle_191"
                      data-name="Rectangle 191"
                      transform="translate(0)"
                    >
                      <path
                        id="Path_20126"
                        data-name="Path 20126"
                        d="M16.4,13.492H2a1.8,1.8,0,0,1-1.8-1.8V1.8A1.8,1.8,0,0,1,2,0H16.4a1.8,1.8,0,0,1,1.8,1.8v9.892A1.8,1.8,0,0,1,16.4,13.492ZM2,.72A1.081,1.081,0,0,0,.921,1.8v9.892A1.081,1.081,0,0,0,2,12.772H16.4a1.081,1.081,0,0,0,1.08-1.08V1.8A1.081,1.081,0,0,0,16.4.72Z"
                        transform="translate(-0.201)"
                      ></path>
                    </g>
                    <g
                      id="Ellipse_50"
                      data-name="Ellipse 50"
                      transform="translate(12.865 1.273)"
                    >
                      <path
                        id="Path_20127"
                        data-name="Path 20127"
                        d="M19.961,5.387a1.819,1.819,0,1,1,1.819-1.819A1.821,1.821,0,0,1,19.961,5.387Zm0-2.91a1.091,1.091,0,1,0,1.091,1.091A1.092,1.092,0,0,0,19.961,2.477Z"
                        transform="translate(-18.142 -1.75)"
                      ></path>
                    </g>
                    <g
                      id="Line_87"
                      data-name="Line 87"
                      transform="translate(0 2.879)"
                    >
                      <path
                        id="Path_20128"
                        data-name="Path 20128"
                        d="M.565,9.91a.363.363,0,0,1-.289-.584L4.213,4.173a.364.364,0,0,1,.578.442L.854,9.767A.364.364,0,0,1,.565,9.91Z"
                        transform="translate(-0.201 -4.03)"
                      ></path>
                    </g>
                    <g
                      id="Line_88"
                      data-name="Line 88"
                      transform="translate(3.849 3.127)"
                    >
                      <path
                        id="Path_20129"
                        data-name="Path 20129"
                        d="M15.134,14.855a.36.36,0,0,1-.263-.113L5.714,5.1a.364.364,0,1,1,.527-.5L15.4,14.241a.363.363,0,0,1-.263.614Z"
                        transform="translate(-5.614 -4.489)"
                      ></path>
                    </g>
                    <g
                      id="Line_89"
                      data-name="Line 89"
                      transform="translate(8.162 4.974)"
                    >
                      <path
                        id="Path_20130"
                        data-name="Path 20130"
                        d="M11.922,9.715a.364.364,0,0,1-.263-.615L13.627,7.04a.363.363,0,1,1,.526.5L12.185,9.6A.364.364,0,0,1,11.922,9.715Z"
                        transform="translate(-11.558 -6.927)"
                      ></path>
                    </g>
                    <g
                      id="Line_90"
                      data-name="Line 90"
                      transform="translate(10.384 5.187)"
                    >
                      <path
                        id="Path_20131"
                        data-name="Path 20131"
                        d="M21,15.263a.362.362,0,0,1-.282-.133l-5.9-7.214a.364.364,0,1,1,.562-.461l5.9,7.214a.363.363,0,0,1-.281.594Z"
                        transform="translate(-14.731 -7.322)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span>Hình ảnh</span>
          </div>
          <div
            onClick={() => setTabHeader(5)}
            className={tabHeader === 5 ? 'tabItem active' : 'tabItem'}
          >
            <svg
              className="tab-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g
                id="Group_27936"
                data-name="Group 27936"
                transform="translate(12659 11725)"
              >
                <rect
                  id="Rectangle_4413"
                  data-name="Rectangle 4413"
                  width="24"
                  height="24"
                  transform="translate(-12659 -11725)"
                  fill="none"
                ></rect>
                <g
                  id="Vector_Smart_Object"
                  data-name="Vector Smart Object"
                  transform="translate(-12656 -11721.204)"
                >
                  <g
                    id="Group_27069"
                    data-name="Group 27069"
                    transform="translate(0 0.204)"
                  >
                    <g
                      id="Rectangle_192"
                      data-name="Rectangle 192"
                      transform="translate(0 3.443)"
                    >
                      <path
                        id="Path_20122"
                        data-name="Path 20122"
                        d="M13.171,17.348H1.1a1.1,1.1,0,0,1-1.1-1.1V6.158a1.1,1.1,0,0,1,1.1-1.1H13.171a1.1,1.1,0,0,1,1.1,1.1V16.251A1.1,1.1,0,0,1,13.171,17.348ZM1.1,5.792a.366.366,0,0,0-.366.366V16.251a.366.366,0,0,0,.366.366H13.171a.367.367,0,0,0,.366-.366V6.158a.367.367,0,0,0-.366-.366Z"
                        transform="translate(0 -5.061)"
                      ></path>
                    </g>
                    <g
                      id="Path_19387"
                      data-name="Path 19387"
                      transform="translate(13.51 4.983)"
                    >
                      <path
                        id="Path_20123"
                        data-name="Path 20123"
                        d="M22.922,16.4a.368.368,0,0,1-.139-.027l-3.759-1.541a.366.366,0,0,1-.226-.338V9.1a.366.366,0,0,1,.226-.338l3.759-1.541a.366.366,0,0,1,.5.338v8.475a.365.365,0,0,1-.162.3A.371.371,0,0,1,22.922,16.4Zm-3.393-2.152,3.027,1.242V8.1l-3.027,1.24Z"
                        transform="translate(-18.798 -7.191)"
                      ></path>
                    </g>
                    <g
                      id="Line_91"
                      data-name="Line 91"
                      transform="translate(0.756 0.004)"
                    >
                      <path
                        id="Path_20124"
                        data-name="Path 20124"
                        d="M8.176.933H1.407a.361.361,0,0,1,0-.723H8.176a.361.361,0,0,1,0,.723Z"
                        transform="translate(-1.046 -0.21)"
                      ></path>
                    </g>
                    <g
                      id="Line_92"
                      data-name="Line 92"
                      transform="translate(7.505)"
                    >
                      <path
                        id="Path_20125"
                        data-name="Path 20125"
                        d="M15.324,4.4a.362.362,0,0,1-.223-.076L10.589.86a.365.365,0,1,1,.445-.58l4.513,3.466a.366.366,0,0,1-.223.656Z"
                        transform="translate(-10.446 -0.204)"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span>Video</span>
          </div>
          <div
            onClick={() => setTabHeader(6)}
            className={tabHeader === 6 ? 'tabItem active' : 'tabItem'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="tab-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28598">
                <path
                  data-name="Rectangle 4587"
                  fill="none"
                  d="M0 0h24v24H0z"
                ></path>
                <path
                  data-name="Path 18214"
                  d="M18.694 3.29h-.645a1.29 1.29 0 00-2.581 0H6.435a1.292 1.292 0 00-1.29 1.29v1.29h-.323a.323.323 0 000 .645h.323v1.29h-.323a.323.323 0 000 .645h.323v1.29h-.323a.323.323 0 000 .645h.323v1.29h-.323a.323.323 0 000 .645h.323v1.29h-.323a.323.323 0 000 .645h.323v1.29h-.323a.323.323 0 000 .645h.323v1.29h-.323a.323.323 0 000 .645h.323v1.29h-.323a.323.323 0 000 .645h.323v.645A1.292 1.292 0 006.435 22h12.259a1.292 1.292 0 001.29-1.29V4.581a1.292 1.292 0 00-1.29-1.291zm-2.581 0a.645.645 0 111.29 0v.968h-1.29zm0 1.613H17.4v8.71h-1.29zm0 9.355H17.4v.242l-.645 1.29-.645-1.29zm-9.032 7.1h-.645a.646.646 0 01-.645-.645v-.645h.323a.323.323 0 100-.645H5.79v-1.29h.323a.323.323 0 100-.645H5.79v-1.29h.323a.323.323 0 100-.645H5.79v-1.29h.323a.323.323 0 100-.645H5.79v-1.29h.323a.323.323 0 100-.645H5.79v-1.29h.323a.323.323 0 100-.645H5.79v-1.29h.323a.323.323 0 100-.645H5.79v-1.29h.323a.323.323 0 100-.645H5.79v-1.29a.646.646 0 01.645-.645h.645zm12.258-.645a.646.646 0 01-.645.645H7.726V3.935h7.742V5.87h-.323v-.645a.323.323 0 10-.645 0V9.1a.323.323 0 10.645 0V6.516h.323v8.065a.326.326 0 00.034.144l.968 1.935a.323.323 0 00.577 0l.968-1.935a.326.326 0 00.034-.144V3.935h.645a.646.646 0 01.645.645z"
                  stroke="currentColor"
                  strokeWidth="0.15"
                ></path>
              </g>
            </svg>
            <span>Sổ Tay</span>
          </div>
          <div
            className="tabItem"
            onClick={() => setShowTuyChon((pre) => !pre)}
          >
            <svg
              className="tab-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="24"
              height="24"
            >
              <g
                id="Group_28344"
                data-name="Group 28344"
                transform="translate(12664 11724)"
              >
                <rect
                  id="Rectangle_4500"
                  data-name="Rectangle 4500"
                  width="24"
                  height="24"
                  transform="translate(-12664 -11724)"
                  fill="none"
                ></rect>
                <g
                  id="Group_28102"
                  data-name="Group 28102"
                  transform="translate(-12649.827 -11722) rotate(90)"
                >
                  <circle
                    id="Ellipse_551"
                    data-name="Ellipse 551"
                    cx="2.086"
                    cy="2.086"
                    r="2.086"
                  ></circle>
                  <circle
                    id="Ellipse_551_copy"
                    data-name="Ellipse 551 copy"
                    cx="2.086"
                    cy="2.086"
                    r="2.086"
                    transform="translate(7.913)"
                  ></circle>
                  <circle
                    id="Ellipse_551_copy_2"
                    data-name="Ellipse 551 copy 2"
                    cx="2.086"
                    cy="2.086"
                    r="2.086"
                    transform="translate(15.828)"
                  ></circle>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <BoxTuyChon
          showBoxTuyChon={showBoxTuyChon}
          setShowTuyChon={setShowTuyChon}
        />
      </div>

      {status && <Cart storedFlightData={storedFlightData} />}

      {!status && (
        <div className="tab-page">
          <div className="tab-page-hearder">
            <h3 className="tab-page-title">Quản lý đơn hàng</h3>
            <div>
              <div
                className="hearder-option"
                onClick={() => setShowBoxLoaiHinh((pre) => !pre)}
              >
                <span className="header-option-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="icon-option-header"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28237">
                      <g data-name="Group 28227">
                        <path
                          data-name="Rectangle 4479"
                          fill="none"
                          d="M0 0h24v24H0z"
                        ></path>
                        <g data-name="Group 12">
                          <path
                            data-name="Path 30"
                            d="M18.603 7.394l-5.547 3.345-6.055-2.745-1.449.873 4.38 3.761-3.53 2.126-3.263-1.231L2 14.464l4.187 2.556 7.126-3.236 8.355-5.039a.682.682 0 00.243-.932.665.665 0 00-.135-.165 2.73 2.73 0 00-3.173-.254z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeinejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  Vé Máy Bay
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="icon-option-header"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28796">
                      <path
                        data-name="Rectangle 4596"
                        fill="none"
                        d="M0 0h24v24H0z"
                      ></path>
                      <g data-name="Group 28778">
                        <path data-name="Path 20527" d="M7 10l5 5 5-5z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
              <BoxLoaiHinh
                showBoxLoaiHinh={showBoxLoaiHinh}
                setShowBoxLoaiHinh={setShowBoxLoaiHinh}
              />
            </div>
          </div>
          <div className="tab-page-main">
            <div className="page-main-tab">
              <span
                className={
                  tabMain === 1 ? 'main-tab-item active' : 'main-tab-item'
                }
                onClick={() => setTabMain(1)}
              >
                Tất cả
              </span>
              <span
                className={
                  tabMain === 2 ? 'main-tab-item active' : 'main-tab-item'
                }
                onClick={() => setTabMain(2)}
              >
                Đang chờ phục vụ
              </span>
              <span
                className={
                  tabMain === 3 ? 'main-tab-item active' : 'main-tab-item'
                }
                onClick={() => setTabMain(3)}
              >
                Đang phục vụ
              </span>
              <span
                className={
                  tabMain === 4 ? 'main-tab-item active' : 'main-tab-item'
                }
                onClick={() => setTabMain(4)}
              >
                Hoàn thành
              </span>
              <span
                className={
                  tabMain === 5 ? 'main-tab-item active' : 'main-tab-item'
                }
                onClick={() => setTabMain(5)}
              >
                Chờ xử lý huỷ
              </span>
            </div>
            <div className="main-option">
              <div
                className="form-field-main"
                onClick={() => setShowBoxThoiGian((pre) => !pre)}
              >
                <input
                  type="text"
                  className="form-input-main"
                  placeholder=" "
                  value={thoiGian === 0 ? 'Tất cả' : thoiGian + ' ngày trước'}
                  onChange={(e) => e}
                />
                <label htmlFor="name" className="form-label-main">
                  Thời Gian
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="option-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g data-name="Group 28796">
                    <path
                      data-name="Rectangle 4596"
                      fill="none"
                      d="M0 0h24v24H0z"
                    ></path>
                    <g data-name="Group 28778">
                      <path data-name="Path 20527" d="M7 10l5 5 5-5z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <BoxThoiGian
                showBoxThoiGian={showBoxThoiGian}
                setShowBoxThoiGian={setShowBoxThoiGian}
                ketqua={(e) => setThoiGian(e)}
              />
            </div>

            <BoxContentTabMain thoiGian={thoiGian} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
