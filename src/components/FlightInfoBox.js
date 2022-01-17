import { useState, useContext, useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

import { ThemeContext } from '../shared/context/ThemeProvider';

import { moneyFormatter, timeDiffCalc } from '../shared/util/util-function';

import './FlightInfoBox.css';

const SideDrawer = ({ showDetail, setShowDetail, info }) => {
  const detailRef = useRef(null);
  const onCloseDetail = (e) => {
    if (detailRef.current === e.target) {
      setShowDetail(false);
    }
  };

  return (
    <div className={showDetail ? 'SideDrawer active' : 'SideDrawer'}>
      <div
        className="Side-overlay"
        ref={detailRef}
        onClick={onCloseDetail}
      ></div>
      <div className="SideDrawer-FlightInfo">
        <div className="side-header">
          <h4 className="side-header-title">Chi tiết chuyến bay</h4>
          <div className="icon-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              onClick={() => setShowDetail(false)}
            >
              <g data-name="Group 28027" fill="none">
                <path data-name="Rectangle 4499" d="M0 0h24v24H0z"></path>
                <g
                  data-name="Group 28346"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="1.3"
                >
                  <path data-name="Line 22" d="M3 3l18 18"></path>
                  <path data-name="Line 23" d="M21 3L3 21"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="side-main">
          <h4 className="side-main-title">Chuyến bay</h4>
          <div className="side-main-content">
            <div className="content-flightInfo">
              <div className="flightInfo-row1">
                <div className="row1-col1">
                  <img className="row1-col1-img" src={info.imgLink} alt="" />
                  <div className="row1-col1-nameFlight">
                    <b>
                      {info.HangHK} {info.LoaiVe}
                    </b>
                  </div>
                  <h5>{info.SHMayBay}</h5>
                </div>
                <div className="row1-col2">
                  <div className="row1-col2-part1">
                    <span className="part1-date">
                      {new Date(info.ThoiGianKhoiHanh).toString().substr(0, 15)}
                    </span>
                    <span className="part1-time">
                      {info.ThoiGianKhoiHanh.substr(16, 5)}
                    </span>
                    <span className="part1-address">
                      {info.DiaDiemKhoiHanh}
                    </span>
                    {/* <span className="part1-airport">
                      Sân bay quốc tế Nội Bài
                    </span> */}
                  </div>
                  <div className="row1-col2-part2">
                    <span>
                      {timeDiffCalc(
                        new Date(info.ThoiGianHaCanh),
                        new Date(info.ThoiGianKhoiHanh)
                      )}
                    </span>
                    <img src={info.flightTypeImg} alt="" />
                    <span>{info.LoaiHinhBay}</span>
                  </div>
                  <div className="row1-col2-part1">
                    <span className="part1-date">
                      {new Date(info.ThoiGianHaCanh).toString().substr(0, 15)}
                    </span>
                    <span className="part1-time">
                      {info.ThoiGianHaCanh.substr(16, 5)}
                    </span>
                    <span className="part1-address">{info.DiaDiemHaCanh}</span>
                    {/* <span>Sân bay quốc tế Tân Sơn Nhất</span> */}
                  </div>
                </div>
              </div>
              <div className="flightInfo-row2">
                <h4 className="row2-title">Các gói dịch vụ:</h4>
                <div className="row2-content">
                  <div className="row2-content-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="icon-themdv"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <g data-name="Group 28548">
                        <path
                          data-name="Rectangle 4586"
                          fill="none"
                          d="M0 0h24v24H0z"
                        ></path>
                        <g data-name="Group 28533">
                          <g data-name="Group 28528">
                            <path
                              data-name="Path 20363"
                              d="M18.563 20.364H4.273A2.274 2.274 0 012 18.093V9.01a2.274 2.274 0 012.273-2.271h15.454A2.274 2.274 0 0122 9.01v6.77a.455.455 0 01-.909 0V9.01a1.365 1.365 0 00-1.364-1.362H4.273A1.365 1.365 0 002.909 9.01v9.083a1.365 1.365 0 001.364 1.362h14.29a.454.454 0 110 .908z"
                            ></path>
                          </g>
                          <g data-name="Group 28529">
                            <path
                              data-name="Path 20364"
                              d="M5.437 6.739h14.29A2.274 2.274 0 0122 9.01v9.083a2.274 2.274 0 01-2.273 2.271H4.273A2.274 2.274 0 012 18.093v-6.77a.455.455 0 01.909 0v6.77a1.365 1.365 0 001.364 1.362h15.454a1.365 1.365 0 001.364-1.362V9.01a1.365 1.365 0 00-1.364-1.362H5.437a.454.454 0 110-.908z"
                            ></path>
                          </g>
                          <g data-name="Group 28530">
                            <path
                              data-name="Path 20365"
                              d="M15.195 7.652a.457.457 0 01-.456-.456V5.369a.457.457 0 00-.456-.456H9.715a.457.457 0 00-.456.456V7.2a.457.457 0 01-.913 0V5.369A1.371 1.371 0 019.715 4h4.565a1.371 1.371 0 011.369 1.369V7.2a.457.457 0 01-.454.452z"
                            ></path>
                          </g>
                          <g data-name="Group 28531">
                            <path
                              data-name="Path 20366"
                              d="M5.636 7.126h.913v12.781h-.913z"
                            ></path>
                          </g>
                          <g data-name="Group 28532">
                            <path
                              data-name="Path 20367"
                              d="M17.65 7.126h.913v12.781h-.913z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>Hành lý xách tay: 7kg</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="icon-check"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <g data-name="Group 29030">
                        <path
                          data-name="Rectangle 4400"
                          fill="none"
                          d="M0 0h24v24H0z"
                        ></path>
                        <g data-name="Group 29024">
                          <path
                            data-name="Path 20141"
                            d="M12 3a9 9 0 109 9 9.01 9.01 0 00-9-9z"
                          ></path>
                          <path
                            data-name="Path 20142"
                            d="M16.543 10.1l-4.851 4.851a.746.746 0 01-1.055 0l-2.426-2.426a.746.746 0 011.055-1.055l1.9 1.9 4.324-4.324a.746.746 0 011.055 1.055z"
                            fill="#fafafa"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="row2-content-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <g data-name="Group 28554">
                        <path
                          data-name="Rectangle 4585"
                          fill="none"
                          d="M0 0h24v24H0z"
                        ></path>
                        <path
                          data-name="Path 20369"
                          d="M18.324 14.7h-1.113v-.484a1.2 1.2 0 00-1.2-1.2h-2.289a1.2 1.2 0 00-1.2 1.2v.484h-1.113a2.168 2.168 0 00-2.165 2.165v3.011H6.125a1.542 1.542 0 01-1.54-1.54V8.491a1.542 1.542 0 011.54-1.54h6.609a1.542 1.542 0 011.54 1.54v4.65a.293.293 0 00.585 0v-4.65a2.128 2.128 0 00-2.125-2.125h-1.45V3.992h.552a.56.56 0 00.56-.56V2.56a.56.56 0 00-.56-.56H7.023a.56.56 0 00-.56.56v.873a.56.56 0 00.56.56h.552v2.372h-1.45A2.128 2.128 0 004 8.49v9.843a2.129 2.129 0 001.553 2.046 1.226 1.226 0 102.346.079h1.438A2.169 2.169 0 0011.409 22h1.25a.293.293 0 000-.585h-1.25a1.582 1.582 0 01-1.58-1.58v-2.973a1.582 1.582 0 011.58-1.58h6.915a1.582 1.582 0 011.58 1.58v2.972a1.582 1.582 0 01-1.58 1.58h-6.09a.293.293 0 000 .585h6.091a2.168 2.168 0 002.165-2.165v-2.972a2.168 2.168 0 00-2.166-2.162zM7.049 2.585h4.761v.821H7.049zm1.112 1.407h2.538v2.373H8.161zm-.806 16.781a.641.641 0 11-1.2-.315h1.112a.636.636 0 01.087.316zm5.754-6.56a.615.615 0 01.614-.614h2.289a.615.615 0 01.614.614v.487h-3.518v-.484z"
                          stroke="currentColor"
                          strokeWidth="0.25"
                        ></path>
                      </g>
                    </svg>
                    <span>Hành lý ký gửi (có thể mua thêm): 20kg</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-note">
              <h4 className="note-title">Điều kiện giá vé:</h4>
              <ul className="list-note">
                <li className="list-note-item">Hành lý xách tay: 07 kg.</li>
                <li className="list-note-item">Hành lý ký gửi: 20 kg.</li>
                <li className="list-note-item">
                  Đổi ngày/giờ/chặng bay: Thu phí 270,000VNĐ + chênh lệch giá vé
                  (nếu có).
                </li>
                <li className="list-note-item">Đổi tên: Thu phí 350,000VNĐ.</li>
                <li className="list-note-item">Hoàn vé: Không được phép.</li>
                <li className="list-note-item">
                  Thời hạn thay đổi: Tất cả các thay đổi phải được thực hiện và
                  hoàn tất tối thiểu 03 giờ trước giờ khởi hành chuyến bay.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlightInfoBox = ({
  IdVeMayBay,
  LoaiVe,
  GiaVe,
  HangHK,
  SHMayBay,
  ThoiGianKhoiHanh,
  ThoiGianHaCanh,
  DiaDiemKhoiHanh,
  DiaDiemHaCanh,
  LoaiHinhBay,
  passengers,
  Thue,
}) => {
  const { theme } = useContext(ThemeContext);

  const [isShowMore, setIsShowMore] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const readMoreHandler = () => {
    setIsShowMore(!isShowMore);
  };

  let flightTypeImg = '';

  if (LoaiHinhBay === 'Bay thẳng') {
    flightTypeImg =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170.708' height='25.012' viewBox='0 0 170.708 25.012'%3E %3Cg id='direct-flight' transform='translate(-898 -859.84)'%3E %3Cpath id='Path_18192' data-name='Path 18192' d='M26.652.962,17.587,5.189,8.728,0,6.362,1.1,12.483,7.57,6.716,10.258,1.9,7.844,0,9.1l6.018,4.591,11.473-3.8,13.65-6.366a1.049,1.049,0,0,0,.348-1.658A4.228,4.228,0,0,0,26.652.962Z' transform='matrix(0.94, 0.342, -0.342, 0.94, 969.723, 860.481)' fill='none' stroke='%23ffa825' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E %3Cg id='Group_25361' data-name='Group 25361' transform='translate(898 858.405)'%3E %3Cpath id='Path_18449' data-name='Path 18449' d='M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z' transform='translate(38.517 14.585)' fill='%23ffa800' opacity='0.8'/%3E %3Ccircle id='Ellipse_917' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(50.582 12.259)' fill='%23ffa800'/%3E %3Ccircle id='Ellipse_919' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(27.862 15.361)' fill='%23ffa800' opacity='0.65'/%3E %3Ccircle id='Ellipse_920' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(17.843 16.136)' fill='%23ffa800' opacity='0.5'/%3E %3Ccircle id='Ellipse_921' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(8.53 16.912)' fill='%23ffa800' opacity='0.35'/%3E %3Ccircle id='Ellipse_922' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(0 17.687)' fill='%23ffa800' opacity='0.2'/%3E %3C/g%3E %3Cg id='Group_25362' data-name='Group 25362' transform='translate(1011 870.664)'%3E %3Cpath id='Path_18449-2' data-name='Path 18449' d='M2.5,0a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,2.5,0Z' transform='translate(14.183 2.326)' fill='%23ffa800' opacity='0.8'/%3E %3Ccircle id='Ellipse_917-2' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(0 0)' fill='%23ffa800'/%3E %3Ccircle id='Ellipse_919-2' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(26.318 3.102)' fill='%23ffa800' opacity='0.65'/%3E %3Ccircle id='Ellipse_920-2' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(36.973 3.877)' fill='%23ffa800' opacity='0.5'/%3E %3Ccircle id='Ellipse_921-2' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(46.992 4.653)' fill='%23ffa800' opacity='0.35'/%3E %3Ccircle id='Ellipse_922-2' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(56.297 5.428)' fill='%23ffa800' opacity='0.2'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
  } else if (LoaiHinhBay === 'Quá cảnh') {
    flightTypeImg =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170.708' height='25.012' viewBox='0 0 170.708 25.012'%3E %3Cg id='direct-flight' transform='translate(-898 -859.84)'%3E %3Cpath id='Path_18192' data-name='Path 18192' d='M26.652.962,17.587,5.189,8.728,0,6.362,1.1,12.483,7.57,6.716,10.258,1.9,7.844,0,9.1l6.018,4.591,11.473-3.8,13.65-6.366a1.049,1.049,0,0,0,.348-1.658A4.228,4.228,0,0,0,26.652.962Z' transform='matrix(0.94, 0.342, -0.342, 0.94, 969.723, 860.481)' fill='none' stroke='%230ac46b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E %3Cg id='Group_25361' data-name='Group 25361' transform='translate(898 858.405)'%3E %3Cpath id='Path_18449' data-name='Path 18449' d='M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z' transform='translate(38.517 14.585)' fill='%230ac46b' opacity='0.8'/%3E %3Ccircle id='Ellipse_917' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(50.582 12.259)' fill='%230ac46b'/%3E %3Ccircle id='Ellipse_919' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(27.862 15.361)' fill='%230ac46b' opacity='0.65'/%3E %3Ccircle id='Ellipse_920' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(17.843 16.136)' fill='%230ac46b' opacity='0.5'/%3E %3Ccircle id='Ellipse_921' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(8.53 16.912)' fill='%230ac46b' opacity='0.35'/%3E %3Ccircle id='Ellipse_922' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(0 17.687)' fill='%230ac46b' opacity='0.2'/%3E %3C/g%3E %3Cg id='Group_25362' data-name='Group 25362' transform='translate(1011 870.664)'%3E %3Cpath id='Path_18449-2' data-name='Path 18449' d='M2.5,0a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,2.5,0Z' transform='translate(14.183 2.326)' fill='%230ac46b' opacity='0.8'/%3E %3Ccircle id='Ellipse_917-2' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(0 0)' fill='%230ac46b'/%3E %3Ccircle id='Ellipse_919-2' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(26.318 3.102)' fill='%230ac46b' opacity='0.65'/%3E %3Ccircle id='Ellipse_920-2' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(36.973 3.877)' fill='%230ac46b' opacity='0.5'/%3E %3Ccircle id='Ellipse_921-2' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(46.992 4.653)' fill='%230ac46b' opacity='0.35'/%3E %3Ccircle id='Ellipse_922-2' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(56.297 5.428)' fill='%230ac46b' opacity='0.2'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
  }

  let imgLink = '';

  if (HangHK === 'Vietnam Airlines')
    imgLink =
      'https://flight.hahalolo.com/e79fa58a4bf9d10176f38e36f1d157ce.svg';
  else if (HangHK === 'Vietravel Airlines')
    imgLink =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='125' height='34.472' viewBox='0 0 125 34.472'%3E %3Cg id='Group_29016' data-name='Group 29016' transform='translate(4135.175 -2548.468)'%3E %3Cpath id='Path_20840' data-name='Path 20840' d='M-4135.175,2584.749c.428-2.036.837-3.888,1.2-5.748q.948-4.822,1.846-9.653c.092-.492.282-.723.826-.692.805.046,1.615.012,2.528.012l-2.611,13.536a3.508,3.508,0,0,0,4.557-2.239c.748-1.873,1.4-3.786,2.087-5.683,1.044-2.871,2.076-5.746,3.145-8.607a.911.911,0,0,1,.632-.5c.892-.058,1.79-.023,2.825-.023-.442,1.24-.844,2.392-1.264,3.536-1.352,3.682-2.694,7.367-4.072,11.039-1.623,4.324-4.042,5.448-8.652,5.341C-4133.142,2585.042-4134.155,2584.859-4135.175,2584.749Z' transform='translate(0 -13.862)' fill='%230055a4'/%3E %3Cpath id='Path_20841' data-name='Path 20841' d='M-4008.7,2622.81c-.13.742-.218,1.4-.375,2.046a.74.74,0,0,1-.452.42,9.049,9.049,0,0,1-5.3.094,4.2,4.2,0,0,1-3.281-4.091,6.746,6.746,0,0,1,3.612-6.7c1.8-.893,5.228-.832,6.5.828a5.225,5.225,0,0,1,.757,4.392c-.131.76-.438.984-1.205.958-1.85-.063-3.7-.02-5.556-.02h-1.153a2.255,2.255,0,0,0,1.843,2.539,6.932,6.932,0,0,0,3.735-.2C-4009.314,2623-4009.056,2622.919-4008.7,2622.81Zm-1.286-3.952c.279-1.358.079-2.067-.65-2.453a3.04,3.04,0,0,0-4.248,2.453Z' transform='translate(-97.285 -54.458)' fill='%230055a4'/%3E %3Cpath id='Path_20842' data-name='Path 20842' d='M-3726.385,2620.634a2.308,2.308,0,0,0,1.893,2.541c1.313.3,2.1.233,4.578-.441-.128.715-.222,1.386-.384,2.04a.754.754,0,0,1-.466.406,8.656,8.656,0,0,1-5.056.154c-2.513-.723-3.58-2.234-3.49-4.857a6.535,6.535,0,0,1,3.48-5.937c1.981-1.08,5.1-.795,6.465.6,1.226,1.246,1.115,2.777.958,4.344-.1.95-.5,1.219-1.451,1.181C-3722.012,2620.575-3724.171,2620.634-3726.385,2620.634Zm.266-1.854c1.545,0,3.026.01,4.506-.013a.674.674,0,0,0,.512-.293,1.792,1.792,0,0,0-1.022-2.272A3.076,3.076,0,0,0-3726.119,2618.78Z' transform='translate(-337.31 -54.356)' fill='%230055a4'/%3E %3Cpath id='Path_20843' data-name='Path 20843' d='M-3852.853,2618.581c.579-1.26.178-2.392-1.094-2.521a21.35,21.35,0,0,0-3.812.24,4.491,4.491,0,0,0-.663.176c.138-.728.233-1.356.391-1.967a.715.715,0,0,1,.423-.44,9.494,9.494,0,0,1,5.632-.022,3.1,3.1,0,0,1,2.148,3.562c-.309,2.218-.646,4.432-1,6.644a.7.7,0,0,1-.4.452,12.578,12.578,0,0,1-6.552.451,2.867,2.867,0,0,1-2.515-2.388,3.27,3.27,0,0,1,1.589-3.613,7.4,7.4,0,0,1,4.8-.8C-3853.544,2618.4-3853.2,2618.5-3852.853,2618.581Zm-.707,4.73c.171-1.135.3-1.955.428-2.838a4.685,4.685,0,0,0-3.586.051,1.5,1.5,0,0,0-.9,1.648,1.289,1.289,0,0,0,1.292,1.118C-3855.4,2623.369-3854.455,2623.311-3853.56,2623.311Z' transform='translate(-228.404 -54.145)' fill='%230055a4'/%3E %3Cpath id='Path_20844' data-name='Path 20844' d='M-3791.4,2616.819h2.909l1.072,8.14.2.068c.531-1.012,1.068-2.022,1.593-3.038.784-1.519,1.571-3.038,2.335-4.567a1.078,1.078,0,0,1,1.113-.668c.806-.005,1.447.013,2.3.013-.2.407-.325.707-.483.99-1.764,3.158-3.547,6.307-5.289,9.477a1.427,1.427,0,0,1-1.474.77,15.025,15.025,0,0,1-2.016-.027c-.25-.024-.647-.294-.681-.5-.554-3.344-1.062-6.695-1.574-10.045A4.74,4.74,0,0,1-3791.4,2616.819Z' transform='translate(-285.699 -56.742)' fill='%230055a4'/%3E %3Cpath id='Path_20845' data-name='Path 20845' d='M-3942.969,2601.242h2.929a1,1,0,0,1,.042.175c-.182,2.089-.222,2.184-2.32,2.087-.938-.044-1.28.22-1.377,1.142-.117,1.112-.385,2.209-.613,3.308-.388,1.875.409,2.667,2.3,2.263.269-.057.532-.141.943-.251-.135.761-.232,1.435-.386,2.095a.626.626,0,0,1-.411.356,5.77,5.77,0,0,1-3.637-.125,2.793,2.793,0,0,1-1.812-3.183c.16-1.557.513-3.094.78-4.641.047-.271.085-.544.141-.9l-1.712-.088c.067-.39.13-.69.167-.992.117-.933.438-1.3,1.45-1.237.453.026.662-.13.72-.585a11.852,11.852,0,0,1,.335-1.818.866.866,0,0,1,.572-.538c.746-.065,1.5-.025,2.36-.025Z' transform='translate(-155.484 -41.382)' fill='%230055a4'/%3E %3Cpath id='Path_20846' data-name='Path 20846' d='M-3662.232,2606.5c.473-2.445.942-4.745,1.359-7.054.482-2.671.914-5.351,1.391-8.023.035-.194.129-.489.4-.5.889-.051,1.782-.024,2.747-.024-.364,1.929-.7,3.771-1.059,5.609-.593,3.055-1.214,6.1-1.78,9.164-.113.612-.256.849-.967.843C-3660.8,2606.5-3661.472,2606.5-3662.232,2606.5Z' transform='translate(-393.069 -35.243)' fill='%230055a4'/%3E %3Cpath id='Path_20847' data-name='Path 20847' d='M-3894.362,2615.984l-.495,2.256c-.964,0-1.856.005-2.748,0-.464,0-.659.17-.746.672-.437,2.534-.953,5.055-1.39,7.59-.1.593-.316.826-.918.785-.638-.043-1.281-.009-2.079-.009.236-1.3.46-2.489.668-3.685.374-2.148.726-4.3,1.122-6.445a.96.96,0,0,1,.489-.655A14.631,14.631,0,0,1-3894.362,2615.984Z' transform='translate(-193.18 -56.012)' fill='%230055a4'/%3E %3Cpath id='Path_20848' data-name='Path 20848' d='M-4048.514,2617.174h2.883c-.073.547-.117,1.087-.221,1.616-.59,3-1.208,5.989-1.78,8.99-.091.474-.277.593-.723.569-.669-.036-1.342-.009-2.209-.009C-4049.878,2624.606-4049.2,2620.924-4048.514,2617.174Z' transform='translate(-70.35 -57.093)' fill='%230055a4'/%3E %3Cpath id='Path_20849' data-name='Path 20849' d='M-4034.027,2588.706a1.258,1.258,0,0,1-1.409-1.384,1.79,1.79,0,0,1,1.825-1.786,1.31,1.31,0,0,1,1.48,1.255A1.858,1.858,0,0,1-4034.027,2588.706Z' transform='translate(-82.928 -30.807)' fill='%230055a4'/%3E %3Cpath id='Path_20850' data-name='Path 20850' d='M-3615.489,2565.606l36.715-17.138v32.294s-.176,1.146-1.627,0l-11.916-8.327-23.173-5.287S-3616.72,2566.575-3615.489,2565.606Z' transform='translate(-431.401)' fill='%23ffba00'/%3E %3Cpath id='Path_20851' data-name='Path 20851' d='M-3461.769,2548.468l-13.543,23.891,2.466,1.7Z' transform='translate(-548.406 0)' fill='%23ffe100'/%3E %3Cpath id='Path_20852' data-name='Path 20852' d='M-3739.937,2709.947h1.479l-1.055,5.521h-1.363Z' transform='translate(-327.71 -134.196)' fill='%230055a4'/%3E %3Cpath id='Path_20853' data-name='Path 20853' d='M-3598.715,2709.837l.165-1.055s-3.66-1.023-4.32,1.187c0,0-.66,1.748,1.945,1.979,0,0,1.22.1.66,1.055,0,0-1.022.857-3.1-.2l-.165,1.286a4.464,4.464,0,0,0,4.023-.264,1.58,1.58,0,0,0,.5-2.012,2.639,2.639,0,0,0-2.028-.89s-.957-.033-.478-.99C-3601.518,2709.936-3600.925,2709.375-3598.715,2709.837Z' transform='translate(-441.859 -133.031)' fill='%230055a4'/%3E %3Cpath id='Path_20854' data-name='Path 20854' d='M-3784.993,2694.294a2.863,2.863,0,0,0-2.968,1.715l-3.2,8.113h1.583l1.517-3.891h2.9l-.4,2.223h1.583l1.517-8.159Zm.182,4.647-2.787-.1s.66-3.166,2.275-3.331h1.155Z' transform='translate(-285.913 -121.182)' fill='%230055a4'/%3E %3Cpath id='Path_20855' data-name='Path 20855' d='M-3726.354,2709.639s.857-.691,3.1-.3l-.231,1.022h-1.649l-.792,4.5h-1.451Z' transform='translate(-338.929 -133.593)' fill='%230055a4'/%3E %3Cpath id='Path_20856' data-name='Path 20856' d='M-3703.426,2696.446h1.484l-1.484,7.8h-1.451Z' transform='translate(-357.629 -122.971)' fill='%230055a4'/%3E %3Cpath id='Path_20857' data-name='Path 20857' d='M-3673.562,2709.639a5.681,5.681,0,0,1,3.364-.3,1.8,1.8,0,0,1,1.352,2.009l-.594,3.512h-1.418l.56-2.981s.363-1.385-.9-1.583l-1.149.033-.89,4.531h-1.319Z' transform='translate(-382.831 -133.593)' fill='%230055a4'/%3E %3Cpath id='Path_20858' data-name='Path 20858' d='M-3630.908,2711.723s.791-2.52-1.154-3.156a3.852,3.852,0,0,0-3.2.551,3.464,3.464,0,0,0-.956,2.605s.066,2.17,1.979,2.487c0,0,1.913.25,2.507-.409v-1.022a2.965,2.965,0,0,1-2.177.363s-1.187-.363-.923-1.418Zm-2.243-2.374s1.418-.1,1.121,1.616h-2.77A1.906,1.906,0,0,1-3633.151,2709.349Z' transform='translate(-414.688 -132.939)' fill='%230055a4'/%3E %3Ccircle id='Ellipse_994' data-name='Ellipse 994' cx='0.78' cy='0.78' r='0.78' transform='translate(-4067.378 2573.096)' fill='%230055a4'/%3E %3Cpath id='Path_20859' data-name='Path 20859' d='M-3687.805,2709.947h1.324l-1.055,5.521h-1.363Z' transform='translate(-370.91 -134.196)' fill='%230055a4'/%3E %3Ccircle id='Ellipse_995' data-name='Ellipse 995' cx='0.78' cy='0.78' r='0.78' transform='translate(-4058.542 2573.096)' fill='%230055a4'/%3E %3C/g%3E %3C/svg%3E";
  else if (HangHK === 'Bamboo Airways')
    imgLink =
      'https://flight.hahalolo.com/bb8c9a3f56366b5c501f0db5574d0942.svg';
  else if (HangHK === 'Vietjet Air')
    imgLink =
      "data:image/svg+xml,%3Csvg id='Group_29014' data-name='Group 29014' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='124.996' height='29.606' viewBox='0 0 124.996 29.606'%3E %3Cdefs%3E %3CclipPath id='clip-path'%3E %3Crect id='Rectangle_4346' data-name='Rectangle 4346' width='20.248' height='22.797' fill='none'/%3E %3C/clipPath%3E %3C/defs%3E %3Cpath id='Path_19993' data-name='Path 19993' d='M0,11.629H5.068L5.932,27.2l7.23-15.571h5.315L6.921,34.306H2.349L0,11.629' transform='translate(0 -7.359)' fill='%23e5342c'/%3E %3Cpath id='Path_19994' data-name='Path 19994' d='M46.713,11.805h5.068L48.134,29.537H43.066l3.647-17.732' transform='translate(-27.495 -7.471)' fill='%23e5342c'/%3E %3Cpath id='Path_19995' data-name='Path 19995' d='M293.955,1.166h5.067L295.376,18.9h-5.068l3.647-17.732' transform='translate(-185.342 -0.679)' fill='%23e5342c'/%3E %3Cpath id='Path_19996' data-name='Path 19996' d='M77.739,18.2c.247-.65,1.386-4.634-1.668-4.634a3.967,3.967,0,0,0-3.823,2.559,20.351,20.351,0,0,0-.719,2.075Zm3.973,3.336H71.344c-.124.556-.418,3.954,3.583,3.954a8.325,8.325,0,0,0,4.635-.926l.555,2.966a11.478,11.478,0,0,1-5.066,1.36c-5.206,0-8.466-1.545-8.405-7.354.1-9.161,7.866-10.976,9.888-10.936,9.453.185,5.178,10.936,5.178,10.936' transform='translate(-42.549 -6.704)' fill='%23e5342c'/%3E %3Cpath id='Path_19997' data-name='Path 19997' d='M172.074,18.2c.249-.65,1.387-4.634-1.666-4.634a3.967,3.967,0,0,0-3.823,2.559,20,20,0,0,0-.719,2.075Zm3.974,3.336H165.68c-.123.556-.418,3.954,3.585,3.954a8.314,8.314,0,0,0,4.632-.926l.556,2.966a11.479,11.479,0,0,1-5.066,1.36c-5.206,0-8.466-1.545-8.4-7.354.1-9.161,7.866-10.976,9.887-10.936,9.455.185,5.179,10.936,5.179,10.936' transform='translate(-102.776 -6.704)' fill='%23e5342c'/%3E %3Cpath id='Path_19998' data-name='Path 19998' d='M115.52,1.589A4,4,0,0,1,117.93.221a6.825,6.825,0,0,1,3.13-.077L120.085,4.3H122.7l-.6,3.2-2.9.069L117.4,16.672c-.067.326-.533,2.874,2.665,1.993,0,0-1.367,4.148-5.284,3.338a3.552,3.552,0,0,1-2.685-4.1L115.52,1.589' transform='translate(-71.532 0.063)' fill='%23e5342c'/%3E %3Cpath id='Path_19999' data-name='Path 19999' d='M210.112,1.589A4,4,0,0,1,212.52.221a6.825,6.825,0,0,1,3.13-.077L214.677,4.3h2.617l-.6,3.2-2.9.069-1.808,9.105c-.066.326-.532,2.874,2.665,1.993,0,0-1.367,4.148-5.284,3.338a3.554,3.554,0,0,1-2.685-4.1l3.428-16.314' transform='translate(-131.922 0.063)' fill='%23e5342c'/%3E %3Cpath id='Path_20000' data-name='Path 20000' d='M122.686,11.746h4.9L124.2,28.758c-1.068,5.048-5.909,9.865-12.281,7.785a4.992,4.992,0,0,1-3.476-5.282,8.509,8.509,0,0,0,4.773,1.808c3.939.185,5.721-3.787,5.979-5.006l3.488-16.317' transform='translate(-69.208 -7.433)' fill='%23e5342c'/%3E %3Cg id='Group_27538' data-name='Group 27538' transform='translate(84.104 0.49)'%3E %3Cg id='Group_27537' data-name='Group 27537' clip-path='url(%23clip-path)'%3E %3Cg id='Group_27536' data-name='Group 27536' transform='translate(0.289 0.003)'%3E %3Cpath id='Path_20001' data-name='Path 20001' d='M248.222,15.664V6.358l-5.215,9.306Zm.016,3.244h-6.859l-3.027,5.068h-4.943L247.064,1.182h5.313l.864,22.794h-5V18.909' transform='translate(-233.409 -1.182)' fill='%23e5342c'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cpath id='Path_20002' data-name='Path 20002' d='M322.224,3.533a7.056,7.056,0,0,0-3.407,0L315.8,18.084h-5.028l3.476-16.707C317.172-.337,320.81-.36,323.406.01l-1.182,3.522' transform='translate(-198.41 0.182)' fill='%23e5342c'/%3E %3C/svg%3E";

  const info = {
    imgLink: imgLink,
    flightTypeImg: flightTypeImg,
    HangHK: HangHK,
    LoaiVe: LoaiVe,
    SHMayBay: SHMayBay,
    ThoiGianKhoiHanh: ThoiGianKhoiHanh,
    ThoiGianHaCanh: ThoiGianHaCanh,
    DiaDiemKhoiHanh: DiaDiemKhoiHanh,
    DiaDiemHaCanh: DiaDiemHaCanh,
    LoaiHinhBay: LoaiHinhBay,
  };

  return (
    <div className={theme === 'dark' ? 'flight-info dark' : 'flight-info'}>
      <SideDrawer
        showDetail={showDetail}
        setShowDetail={setShowDetail}
        info={info}
      />

      <div className="flight-info__heading">
        <p>Thông tin chuyến bay</p>
      </div>
      <hr />
      <div className="flight-info__content">
        <div className="airline">
          <div className="airline-detail">
            <p>Chuyến bay</p>
            <img src={imgLink} alt="airline" />
          </div>
          <div className="flight-detail">
            <span onClick={() => setShowDetail(true)}>Chi tiết</span>
          </div>
        </div>
        <div className="depature-day">
          <p>{new Date(ThoiGianKhoiHanh).toString().substr(0, 15)}</p>
        </div>
        <div className="flight-passenger">
          <p>
            Hành khách:{' '}
            <span>
              {passengers.adult !== 0 ? (
                <span>&nbsp;{passengers.adult} người lớn</span>
              ) : null}
              {passengers.child !== 0 ? (
                <span>,&nbsp;{passengers.child} trẻ em</span>
              ) : null}
              {passengers.baby !== 0 ? (
                <span>,&nbsp;{passengers.baby} em bé</span>
              ) : null}
            </span>
          </p>
        </div>
        <div className="time-group">
          <div className="depature-time">
            <p className="time">{ThoiGianKhoiHanh.substr(16, 5)}</p>
            <p className="place">{DiaDiemKhoiHanh}</p>
          </div>
          <div className="flight-flying-time">
            <span className="flying-time">
              {timeDiffCalc(
                new Date(ThoiGianHaCanh),
                new Date(ThoiGianKhoiHanh)
              )}
            </span>
            <img src={flightTypeImg} alt="airplane" />
            <span className="flying-type">{LoaiHinhBay}</span>
          </div>
          <div className="landing-time">
            <p className="time">{ThoiGianHaCanh.substr(16, 5)}</p>
            <p className="place">{DiaDiemHaCanh}</p>
          </div>
        </div>
        <div className="flight-price">
          <p>
            Giá:{' '}
            <span>
              {moneyFormatter.format(
                (passengers.adult + passengers.child + passengers.baby) *
                  (GiaVe + GiaVe * (Thue / 100))
              )}
            </span>
          </p>
          <div className="more" onClick={readMoreHandler}>
            <p>{isShowMore ? 'Ẩn' : 'Xem'}</p>
            <svg
              data-name="Group 29041"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.24 15.238l5.66-5.66a.345.345 0 00-.03-.48.348.348 0 00-.45 0L12 14.518l-5.42-5.42a.344.344 0 00-.48 0 .349.349 0 00-.1.24.349.349 0 00.1.24l5.66 5.66a.344.344 0 00.48 0z"></path>
            </svg>
          </div>
        </div>
        <div
          className="price-detail"
          style={{ display: isShowMore ? 'block' : 'none' }}
        >
          <hr />
          <p>Chi tiết giá vé</p>

          {passengers.adult !== 0 && (
            <div className="price-item">
              <span>
                Người lớn <b>x{passengers.adult}</b>
              </span>
              <b>{moneyFormatter.format(passengers.adult * GiaVe)}</b>
            </div>
          )}

          {passengers.child !== 0 && (
            <div className="price-item">
              <span>
                Trẻ em <b>x{passengers.child}</b>
              </span>
              <b>{moneyFormatter.format(passengers.child * GiaVe)}</b>
            </div>
          )}

          {passengers.baby !== 0 && (
            <div className="price-item">
              <span>
                Em bé <b>x{passengers.baby}</b>
              </span>
              <b>{moneyFormatter.format(passengers.baby * GiaVe)}</b>
            </div>
          )}

          <div className="price-item">
            <span>Phí &amp; thuế</span>
            <b>
              {moneyFormatter.format(
                (passengers.adult + passengers.child + passengers.baby) *
                  GiaVe *
                  (Thue / 100)
              )}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInfoBox;
