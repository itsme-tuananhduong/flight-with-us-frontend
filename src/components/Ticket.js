import { useState, useContext } from 'react';

import { ThemeContext } from '../shared/context/ThemeProvider';

import './Ticket.css';

const Ticket = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isShowMore, setIsShowMore] = useState(false);

  const showDetailHandler = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div
      className={theme === 'dark' ? 'ticket-wrapper dark' : 'ticket-wrapper'}
    >
      <div className="ticket">
        <div className="ticket-logo-img">
          <img
            src="https://flight.hahalolo.com/e79fa58a4bf9d10176f38e36f1d157ce.svg"
            alt="ticket-logo-img"
          />
        </div>
        <div className="ticket-body">
          <div className="ticket-body__box-1">
            <b>Vietnam Airlines</b>
            <span>Phổ thông tiết kiệm (A)</span>
          </div>
          <div className="ticket-body__box-2">
            <b>VN6001</b>
          </div>
          <div className="ticket-body__box-3">
            <div className="depature-time">
              <span className="time-span">08/01/2022</span>
              <p className="time">09:10</p>
              <span className="time-span">Hà Nội (HAN)</span>
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
              <span className="time-span">08/01/2022</span>
              <p className="time">11:40</p>
              <span className="time-span">Hồ Chí Minh (SGN)</span>
            </div>
          </div>
          <div className="ticket-body__box-4">
            <span onClick={showDetailHandler}>Chi tiết</span>
          </div>
          <div className="ticket-body__box-5">
            <b>997.000&nbsp;₫</b>
            <button className="select-btn">Chọn</button>
          </div>
        </div>
      </div>

      <div
        className="ticket-detail"
        style={{ display: isShowMore ? 'block' : 'none' }}
      >
        <div className="ticket-detail__main">
          <div className="flight-detail">
            <span className="heading">Chi tiết chuyến bay</span>
            <div className="flight-detail__box-1">
              <img
                src="https://flight.hahalolo.com/e79fa58a4bf9d10176f38e36f1d157ce.svg"
                alt="img"
              />
              <div className="flight-detail__box-1-1">
                <b>
                  Vietnam Airlines <span>VN6001</span>
                </b>
                <br />
                <p>Hạng vé: A | Airbus A320 320</p>
              </div>
            </div>
            <div className="flight-detail__box-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="MuiSvgIcon-root MuiSvgIcon-colorPrimary"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28550" fill="none">
                  <path data-name="Rectangle 4590" d="M0 0h24v24H0z"></path>
                  <g stroke="currentColor">
                    <path
                      data-name="Path 18459"
                      d="M17.864 5.05L13.19 8.315 7.7 6.284l-1.219.855 4.081 3.018-2.973 2.078-2.945-.876-.947.893 3.84 1.976 6.072-3.264 7.034-4.92a.6.6 0 00.033-.964 2.413 2.413 0 00-2.812-.03z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.00025"
                    ></path>
                    <path data-name="Line 2219" d="M2 19.299h14.891"></path>
                  </g>
                </g>
              </svg>
              <div className="flight-detail__box-2-1">
                <b>09:25</b>
                <br />
                <p>08/01/2022</p>
              </div>
              <div className="flight-detail__box-2-2">
                <b>Hà Nội (HAN)</b>
                <br />
                <p>Sân bay quốc tế Nội Bài</p>
              </div>
            </div>
            <div className="flight-detail__box-3">2 giờ 15 phút</div>
            <div className="flight-detail__box-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="MuiSvgIcon-root MuiSvgIcon-colorPrimary"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28550" fill="none">
                  <path data-name="Rectangle 4590" d="M0 0h24v24H0z"></path>
                  <g stroke="currentColor">
                    <path
                      data-name="Path 18459"
                      d="M17.864 5.05L13.19 8.315 7.7 6.284l-1.219.855 4.081 3.018-2.973 2.078-2.945-.876-.947.893 3.84 1.976 6.072-3.264 7.034-4.92a.6.6 0 00.033-.964 2.413 2.413 0 00-2.812-.03z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.00025"
                    ></path>
                    <path data-name="Line 2219" d="M2 19.299h14.891"></path>
                  </g>
                </g>
              </svg>
              <div className="flight-detail__box-2-1">
                <b>11:40</b>
                <br />
                <p>08/01/2022</p>
              </div>
              <div className="flight-detail__box-2-2">
                <b>Hồ Chí Minh (SGN)</b>
                <br />
                <p>Sân bay quốc tế Tân Sơn Nhất</p>
              </div>
            </div>
          </div>
          <div className="price-detail">
            <span className="heading">Chi tiết giá vé</span>
            <div className="price-detail__box-wrapper">
              <div className="price-detail__box-1">
                <span>Hành khách</span>
                <span>Số lượng</span>
                <span>Giá mỗi vé</span>
                <span>Thuế &amp; phí</span>
                <span>Tổng cộng</span>
              </div>
              <div className="passenger">
                <span>Người lớn</span>
                <span>1</span>
                <span>29.000&nbsp;₫</span>
                <span>573.000&nbsp;₫</span>
                <span>602.000&nbsp;₫</span>
              </div>
            </div>
            <div className="price-detail__box-2">
              <b>
                Tổng tiền: <span>598.000&nbsp;₫</span>
              </b>
            </div>
          </div>
        </div>

        <hr />

        <div className="ticket-detail__extra">
          <span className="heading">Điều kiện giá vé:</span>
          <ul>
            <li>
              Hành lý xách tay : 12 kg. Ngoại trừ: các chuyến bay do Pacific
              Airlines khai thác: 07 kg.
            </li>
            <li>
              Hành lý ký gửi : 01 kiện (23 kg). Ngoại trừ các chuyến bay giữa Hà
              Nội, HCM, Đà Nẵng, Nha Trang, Vân Đồn.
            </li>
            <li>Đổi ngày/giờ/chặng bay : Không được phép.</li>
            <li>Đổi tên : Không được phép.</li>
            <li>Hoàn vé : Không được phép.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
