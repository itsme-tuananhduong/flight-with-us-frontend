import { useState, useContext, useRef } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import './FlightInfoBox.css';

const SideDrawer = ({ showDetail, setShowDetail }) => {
  const detailRef = useRef(null);
  const onCloseDetail = (e) => {
    if (detailRef.current === e.target) {
      setShowDetail(false);
    }
  };

  return (
    <div className={showDetail ? 'SideDrawer active' : 'SideDrawer'}>
      <div
        className='Side-overlay'
        ref={detailRef}
        onClick={onCloseDetail}
      ></div>
      <div className='SideDrawer-FlightInfo'>
        <div className='side-header'>
          <h4 className='side-header-title'>Chi tiết chuyến bay</h4>
          <div className='icon-close'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              className='MuiSvgIcon-root'
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
              onClick={() => setShowDetail(false)}
            >
              <g data-name='Group 28027' fill='none'>
                <path data-name='Rectangle 4499' d='M0 0h24v24H0z'></path>
                <g
                  data-name='Group 28346'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  strokeWidth='1.3'
                >
                  <path data-name='Line 22' d='M3 3l18 18'></path>
                  <path data-name='Line 23' d='M21 3L3 21'></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className='side-main'>
          <h4 className='side-main-title'>Chuyến bay</h4>
          <div className='side-main-content'>
            <div className='content-flightInfo'>
              <div className='flightInfo-row1'>
                <div className='row1-col1'>
                  <img
                    className='row1-col1-img'
                    src='https://media.hahalolo.com/other/flight/logo/QH.png'
                    alt=''
                  />
                  <div className='row1-col1-nameFlight'>
                    <b>Bamboo Airways Phổ thông (EconomySaver)</b>
                  </div>
                  <h5>QH297</h5>
                </div>
                <div className='row1-col2'>
                  <div className='row1-col2-part1'>
                    <span className='part1-date'>14/01/2022</span>
                    <span className='part1-time'>21:40</span>
                    <span className='part1-address'>Hà Nội (HAN)</span>
                    <span className='part1-airport'>
                      Sân bay quốc tế Nội Bài
                    </span>
                  </div>
                  <div className='row1-col2-part2'>
                    <span>2 giờ 10 phút</span>
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170.708' height='25.012' viewBox='0 0 170.708 25.012'%3E %3Cg id='direct-flight' transform='translate(-898 -859.84)'%3E %3Cpath id='Path_18192' data-name='Path 18192' d='M26.652.962,17.587,5.189,8.728,0,6.362,1.1,12.483,7.57,6.716,10.258,1.9,7.844,0,9.1l6.018,4.591,11.473-3.8,13.65-6.366a1.049,1.049,0,0,0,.348-1.658A4.228,4.228,0,0,0,26.652.962Z' transform='matrix(0.94, 0.342, -0.342, 0.94, 969.723, 860.481)' fill='none' stroke='%23ffa825' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E %3Cg id='Group_25361' data-name='Group 25361' transform='translate(898 858.405)'%3E %3Cpath id='Path_18449' data-name='Path 18449' d='M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z' transform='translate(38.517 14.585)' fill='%23ffa800' opacity='0.8'/%3E %3Ccircle id='Ellipse_917' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(50.582 12.259)' fill='%23ffa800'/%3E %3Ccircle id='Ellipse_919' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(27.862 15.361)' fill='%23ffa800' opacity='0.65'/%3E %3Ccircle id='Ellipse_920' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(17.843 16.136)' fill='%23ffa800' opacity='0.5'/%3E %3Ccircle id='Ellipse_921' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(8.53 16.912)' fill='%23ffa800' opacity='0.35'/%3E %3Ccircle id='Ellipse_922' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(0 17.687)' fill='%23ffa800' opacity='0.2'/%3E %3C/g%3E %3Cg id='Group_25362' data-name='Group 25362' transform='translate(1011 870.664)'%3E %3Cpath id='Path_18449-2' data-name='Path 18449' d='M2.5,0a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,2.5,0Z' transform='translate(14.183 2.326)' fill='%23ffa800' opacity='0.8'/%3E %3Ccircle id='Ellipse_917-2' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(0 0)' fill='%23ffa800'/%3E %3Ccircle id='Ellipse_919-2' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(26.318 3.102)' fill='%23ffa800' opacity='0.65'/%3E %3Ccircle id='Ellipse_920-2' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(36.973 3.877)' fill='%23ffa800' opacity='0.5'/%3E %3Ccircle id='Ellipse_921-2' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(46.992 4.653)' fill='%23ffa800' opacity='0.35'/%3E %3Ccircle id='Ellipse_922-2' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(56.297 5.428)' fill='%23ffa800' opacity='0.2'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"
                      alt=''
                    />
                    <span>Bay thẳng</span>
                  </div>
                  <div className='row1-col2-part1'>
                    <span>14/01/2022</span>
                    <span>21:40</span>
                    <span>Hà Nội (HAN)</span>
                    <span>Sân bay quốc tế Tân Sơn Nhất</span>
                  </div>
                </div>
              </div>
              <div className='flightInfo-row2'>
                <h4 className='row2-title'>Các gói dịch vụ:</h4>
                <div className='row2-content'>
                  <div className='row2-content-item'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      className='icon-themdv'
                      focusable='false'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <g data-name='Group 28548'>
                        <path
                          data-name='Rectangle 4586'
                          fill='none'
                          d='M0 0h24v24H0z'
                        ></path>
                        <g data-name='Group 28533'>
                          <g data-name='Group 28528'>
                            <path
                              data-name='Path 20363'
                              d='M18.563 20.364H4.273A2.274 2.274 0 012 18.093V9.01a2.274 2.274 0 012.273-2.271h15.454A2.274 2.274 0 0122 9.01v6.77a.455.455 0 01-.909 0V9.01a1.365 1.365 0 00-1.364-1.362H4.273A1.365 1.365 0 002.909 9.01v9.083a1.365 1.365 0 001.364 1.362h14.29a.454.454 0 110 .908z'
                            ></path>
                          </g>
                          <g data-name='Group 28529'>
                            <path
                              data-name='Path 20364'
                              d='M5.437 6.739h14.29A2.274 2.274 0 0122 9.01v9.083a2.274 2.274 0 01-2.273 2.271H4.273A2.274 2.274 0 012 18.093v-6.77a.455.455 0 01.909 0v6.77a1.365 1.365 0 001.364 1.362h15.454a1.365 1.365 0 001.364-1.362V9.01a1.365 1.365 0 00-1.364-1.362H5.437a.454.454 0 110-.908z'
                            ></path>
                          </g>
                          <g data-name='Group 28530'>
                            <path
                              data-name='Path 20365'
                              d='M15.195 7.652a.457.457 0 01-.456-.456V5.369a.457.457 0 00-.456-.456H9.715a.457.457 0 00-.456.456V7.2a.457.457 0 01-.913 0V5.369A1.371 1.371 0 019.715 4h4.565a1.371 1.371 0 011.369 1.369V7.2a.457.457 0 01-.454.452z'
                            ></path>
                          </g>
                          <g data-name='Group 28531'>
                            <path
                              data-name='Path 20366'
                              d='M5.636 7.126h.913v12.781h-.913z'
                            ></path>
                          </g>
                          <g data-name='Group 28532'>
                            <path
                              data-name='Path 20367'
                              d='M17.65 7.126h.913v12.781h-.913z'
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>Hành lý xách tay: 7kg</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      className='icon-check'
                      focusable='false'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <g data-name='Group 29030'>
                        <path
                          data-name='Rectangle 4400'
                          fill='none'
                          d='M0 0h24v24H0z'
                        ></path>
                        <g data-name='Group 29024'>
                          <path
                            data-name='Path 20141'
                            d='M12 3a9 9 0 109 9 9.01 9.01 0 00-9-9z'
                          ></path>
                          <path
                            data-name='Path 20142'
                            d='M16.543 10.1l-4.851 4.851a.746.746 0 01-1.055 0l-2.426-2.426a.746.746 0 011.055-1.055l1.9 1.9 4.324-4.324a.746.746 0 011.055 1.055z'
                            fill='#fafafa'
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className='row2-content-item'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      className='MuiSvgIcon-root'
                      focusable='false'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <g data-name='Group 28554'>
                        <path
                          data-name='Rectangle 4585'
                          fill='none'
                          d='M0 0h24v24H0z'
                        ></path>
                        <path
                          data-name='Path 20369'
                          d='M18.324 14.7h-1.113v-.484a1.2 1.2 0 00-1.2-1.2h-2.289a1.2 1.2 0 00-1.2 1.2v.484h-1.113a2.168 2.168 0 00-2.165 2.165v3.011H6.125a1.542 1.542 0 01-1.54-1.54V8.491a1.542 1.542 0 011.54-1.54h6.609a1.542 1.542 0 011.54 1.54v4.65a.293.293 0 00.585 0v-4.65a2.128 2.128 0 00-2.125-2.125h-1.45V3.992h.552a.56.56 0 00.56-.56V2.56a.56.56 0 00-.56-.56H7.023a.56.56 0 00-.56.56v.873a.56.56 0 00.56.56h.552v2.372h-1.45A2.128 2.128 0 004 8.49v9.843a2.129 2.129 0 001.553 2.046 1.226 1.226 0 102.346.079h1.438A2.169 2.169 0 0011.409 22h1.25a.293.293 0 000-.585h-1.25a1.582 1.582 0 01-1.58-1.58v-2.973a1.582 1.582 0 011.58-1.58h6.915a1.582 1.582 0 011.58 1.58v2.972a1.582 1.582 0 01-1.58 1.58h-6.09a.293.293 0 000 .585h6.091a2.168 2.168 0 002.165-2.165v-2.972a2.168 2.168 0 00-2.166-2.162zM7.049 2.585h4.761v.821H7.049zm1.112 1.407h2.538v2.373H8.161zm-.806 16.781a.641.641 0 11-1.2-.315h1.112a.636.636 0 01.087.316zm5.754-6.56a.615.615 0 01.614-.614h2.289a.615.615 0 01.614.614v.487h-3.518v-.484z'
                          stroke='currentColor'
                          strokeWidth='0.25'
                        ></path>
                      </g>
                    </svg>
                    <span>Hành lý ký gửi (có thể mua thêm): 20kg</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='content-note'>
              <h4 className='note-title'>Điều kiện giá vé:</h4>
              <ul className='list-note'>
                <li className='list-note-item'>Hành lý xách tay : 07 kg.</li>
                <li className='list-note-item'>Hành lý ký gửi : 20 kg.</li>
                <li className='list-note-item'>
                  Đổi ngày/giờ/chặng bay : Thu phí 270,000VNĐ + chênh lệch giá
                  vé (nếu có).
                </li>
                <li className='list-note-item'>
                  Đổi tên : Thu phí 350,000VNĐ.
                </li>
                <li className='list-note-item'>Hoàn vé : Không được phép.</li>
                <li className='list-note-item'>
                  Thời hạn thay đổi : Tất cả các thay đổi phải được thực hiện và
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

const FlightInfoBox = () => {
  const { theme } = useContext(ThemeContext);

  const [isShowMore, setIsShowMore] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const readMoreHandler = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className={theme === 'dark' ? 'flight-info dark' : 'flight-info'}>
      <SideDrawer showDetail={showDetail} setShowDetail={setShowDetail} />

      <div className='flight-info__heading'>
        <p>Thông tin chuyến bay</p>
      </div>
      <hr />
      <div className='flight-info__content'>
        <div className='airline'>
          <div className='airline-detail'>
            <p>Chuyến bay</p>
            <img
              src='https://flight.hahalolo.com/assets/image/flight/vn.gif'
              alt='airline'
            />
          </div>
          <div className='flight-detail'>
            <span onClick={() => setShowDetail(true)}>Chi tiết</span>
          </div>
        </div>
        <div className='depature-day'>
          <p>Chủ Nhật, 26/12/2021</p>
        </div>
        <div className='flight-passenger'>
          <p>
            Hành khách: <span>1 người lớn</span>
          </p>
        </div>
        <div className='time-group'>
          <div className='depature-time'>
            <p className='time'>09:10</p>
            <p className='place'>Hà Nội (HAN)</p>
          </div>
          <div className='flight-flying-time'>
            <span className='flying-time'>2 giờ 30 phút</span>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170.708' height='25.012' viewBox='0 0 170.708 25.012'%3E %3Cg id='direct-flight' transform='translate(-898 -859.84)'%3E %3Cpath id='Path_18192' data-name='Path 18192' d='M26.652.962,17.587,5.189,8.728,0,6.362,1.1,12.483,7.57,6.716,10.258,1.9,7.844,0,9.1l6.018,4.591,11.473-3.8,13.65-6.366a1.049,1.049,0,0,0,.348-1.658A4.228,4.228,0,0,0,26.652.962Z' transform='matrix(0.94, 0.342, -0.342, 0.94, 969.723, 860.481)' fill='none' stroke='%23ffa825' stroke-linecap='round' stroke-linejoin='round' strokeWidth='1'/%3E %3Cg id='Group_25361' data-name='Group 25361' transform='translate(898 858.405)'%3E %3Cpath id='Path_18449' data-name='Path 18449' d='M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z' transform='translate(38.517 14.585)' fill='%23ffa800' opacity='0.8'/%3E %3Ccircle id='Ellipse_917' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(50.582 12.259)' fill='%23ffa800'/%3E %3Ccircle id='Ellipse_919' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(27.862 15.361)' fill='%23ffa800' opacity='0.65'/%3E %3Ccircle id='Ellipse_920' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(17.843 16.136)' fill='%23ffa800' opacity='0.5'/%3E %3Ccircle id='Ellipse_921' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(8.53 16.912)' fill='%23ffa800' opacity='0.35'/%3E %3Ccircle id='Ellipse_922' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(0 17.687)' fill='%23ffa800' opacity='0.2'/%3E %3C/g%3E %3Cg id='Group_25362' data-name='Group 25362' transform='translate(1011 870.664)'%3E %3Cpath id='Path_18449-2' data-name='Path 18449' d='M2.5,0a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,2.5,0Z' transform='translate(14.183 2.326)' fill='%23ffa800' opacity='0.8'/%3E %3Ccircle id='Ellipse_917-2' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(0 0)' fill='%23ffa800'/%3E %3Ccircle id='Ellipse_919-2' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(26.318 3.102)' fill='%23ffa800' opacity='0.65'/%3E %3Ccircle id='Ellipse_920-2' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(36.973 3.877)' fill='%23ffa800' opacity='0.5'/%3E %3Ccircle id='Ellipse_921-2' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(46.992 4.653)' fill='%23ffa800' opacity='0.35'/%3E %3Ccircle id='Ellipse_922-2' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(56.297 5.428)' fill='%23ffa800' opacity='0.2'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"
              alt='airplane'
            />
            <span className='flying-type'>Bay thẳng</span>
          </div>
          <div className='landing-time'>
            <p className='time'>11:40</p>
            <p className='place'>Hồ Chí Minh (SGN)</p>
          </div>
        </div>
        <div className='flight-price'>
          <p>
            Giá: <span>997.000&nbsp;₫</span>
          </p>
          <div className='more' onClick={readMoreHandler}>
            <p>{isShowMore ? 'Ẩn' : 'Xem'}</p>
            <svg
              data-name='Group 29041'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              className='MuiSvgIcon-root'
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M12.24 15.238l5.66-5.66a.345.345 0 00-.03-.48.348.348 0 00-.45 0L12 14.518l-5.42-5.42a.344.344 0 00-.48 0 .349.349 0 00-.1.24.349.349 0 00.1.24l5.66 5.66a.344.344 0 00.48 0z'></path>
            </svg>
          </div>
        </div>
        <div
          className='price-detail'
          style={{ display: isShowMore ? 'block' : 'none' }}
        >
          <hr />
          <p>Chi tiết giá vé</p>
          <div className='price-item'>
            <span>
              Người lớn <b>x1</b>
            </span>
            <b>399.000&nbsp;₫</b>
          </div>
          <div className='price-item'>
            <span>Phí &amp; thuế</span>
            <b>598.000&nbsp;₫</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInfoBox;
