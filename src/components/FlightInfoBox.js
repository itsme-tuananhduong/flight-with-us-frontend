import { useState, useContext } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import './FlightInfoBox.css';

const FlightInfoBox = () => {
  const { theme } = useContext(ThemeContext);

  const [isShowMore, setIsShowMore] = useState(false);

  const readMoreHandler = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className={theme === 'dark' ? 'flight-info dark' : 'flight-info'}>
      <div className="flight-info__heading">
        <p>Thông tin chuyến bay</p>
      </div>
      <hr />
      <div className="flight-info__content">
        <div className="airline">
          <div className="airline-detail">
            <p>Chuyến bay</p>
            <img
              src="https://flight.hahalolo.com/assets/image/flight/vn.gif"
              alt="airline"
            />
          </div>
          <div className="flight-detail">
            <span>Chi tiết</span>
          </div>
        </div>
        <div className="depature-day">
          <p>Chủ Nhật, 26/12/2021</p>
        </div>
        <div className="flight-passenger">
          <p>
            Hành khách: <span>1 người lớn</span>
          </p>
        </div>
        <div className="time-group">
          <div className="depature-time">
            <p className="time">09:10</p>
            <p className="place">Hà Nội (HAN)</p>
          </div>
          <div className="flight-flying-time">
            <span className="flying-time">2 giờ 30 phút</span>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170.708' height='25.012' viewBox='0 0 170.708 25.012'%3E %3Cg id='direct-flight' transform='translate(-898 -859.84)'%3E %3Cpath id='Path_18192' data-name='Path 18192' d='M26.652.962,17.587,5.189,8.728,0,6.362,1.1,12.483,7.57,6.716,10.258,1.9,7.844,0,9.1l6.018,4.591,11.473-3.8,13.65-6.366a1.049,1.049,0,0,0,.348-1.658A4.228,4.228,0,0,0,26.652.962Z' transform='matrix(0.94, 0.342, -0.342, 0.94, 969.723, 860.481)' fill='none' stroke='%23ffa825' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E %3Cg id='Group_25361' data-name='Group 25361' transform='translate(898 858.405)'%3E %3Cpath id='Path_18449' data-name='Path 18449' d='M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z' transform='translate(38.517 14.585)' fill='%23ffa800' opacity='0.8'/%3E %3Ccircle id='Ellipse_917' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(50.582 12.259)' fill='%23ffa800'/%3E %3Ccircle id='Ellipse_919' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(27.862 15.361)' fill='%23ffa800' opacity='0.65'/%3E %3Ccircle id='Ellipse_920' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(17.843 16.136)' fill='%23ffa800' opacity='0.5'/%3E %3Ccircle id='Ellipse_921' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(8.53 16.912)' fill='%23ffa800' opacity='0.35'/%3E %3Ccircle id='Ellipse_922' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(0 17.687)' fill='%23ffa800' opacity='0.2'/%3E %3C/g%3E %3Cg id='Group_25362' data-name='Group 25362' transform='translate(1011 870.664)'%3E %3Cpath id='Path_18449-2' data-name='Path 18449' d='M2.5,0a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,2.5,0Z' transform='translate(14.183 2.326)' fill='%23ffa800' opacity='0.8'/%3E %3Ccircle id='Ellipse_917-2' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(0 0)' fill='%23ffa800'/%3E %3Ccircle id='Ellipse_919-2' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(26.318 3.102)' fill='%23ffa800' opacity='0.65'/%3E %3Ccircle id='Ellipse_920-2' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(36.973 3.877)' fill='%23ffa800' opacity='0.5'/%3E %3Ccircle id='Ellipse_921-2' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(46.992 4.653)' fill='%23ffa800' opacity='0.35'/%3E %3Ccircle id='Ellipse_922-2' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(56.297 5.428)' fill='%23ffa800' opacity='0.2'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E"
              alt="airplane"
            />
            <span className="flying-type">Bay thẳng</span>
          </div>
          <div className="landing-time">
            <p className="time">11:40</p>
            <p className="place">Hồ Chí Minh (SGN)</p>
          </div>
        </div>
        <div className="flight-price">
          <p>
            Giá: <span>997.000&nbsp;₫</span>
          </p>
          <div className="more" onClick={readMoreHandler}>
            <p>{isShowMore ? 'Ẩn' : 'Xem'}</p>
            <svg
              data-name="Group 29041"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="MuiSvgIcon-root"
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
          <div className="price-item">
            <span>
              Người lớn <b>x1</b>
            </span>
            <b>399.000&nbsp;₫</b>
          </div>
          <div className="price-item">
            <span>Phí &amp; thuế</span>
            <b>598.000&nbsp;₫</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInfoBox;
