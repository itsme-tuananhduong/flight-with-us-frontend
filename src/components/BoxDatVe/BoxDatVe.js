import { useState, useContext } from 'react';

import { ThemeContext } from '../../shared/context/ThemeProvider';

import BoxNguoiLienHe from '../BoxNguoiLienHe/BoxNguoiLienHe';
import BoxHanhKhach from '../BoxHanhKhach/BoxHanhKhach';
import HinhThucThanhToan from '../HinhThucThanhToan';
import BoxNguoiThanhToan from '../BoxNguoiThanhToan/BoxNguoiThanhToan';
import FlightInfoBox from '../FlightInfoBox';
import Modal from './ChildComponent/Modal';

import './BoxDatVe.css';

const BoxDatVe = () => {
  const { theme } = useContext(ThemeContext);

  const [showModal, setShowModal] = useState(false);

  const [step, setStep] = useState(0);

  const [HLKG, setHLKG] = useState('0kg - 0 ₫');

  const continueHandler = () => {
    setStep(1);
  };

  const changeHLKGHandler = (HLKG) => {
    setHLKG(HLKG);
  };

  const resetStepHandler = () => {
    setStep(0);
  };

  return (
    <div
      className={
        theme === 'dark' ? 'box-dat-ve-wrapper dark' : 'box-dat-ve-wrapper'
      }
    >
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="box-dat-ve-info">
        <div>
          <p>Thông tin đặt vé</p>
          <br />
          <div className="info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28011">
                <path
                  data-name="Rectangle 4480"
                  fill="none"
                  d="M0 0h24v24H0z"
                ></path>
                <g data-name="Vector Smart Object21">
                  <g
                    data-name="Group 21"
                    transform="translate(2 4)"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      data-name="Path 44"
                      d="M15.605 4.332a2.62 2.62 0 11-5.232 0V2.757a2.62 2.62 0 115.232 0z"
                    ></path>
                    <ellipse
                      data-name="Ellipse 9"
                      cx="2.18"
                      cy="2.216"
                      rx="2.18"
                      ry="2.216"
                      transform="translate(3.84 .443)"
                    ></ellipse>
                    <path
                      data-name="Path 45"
                      d="M8.805 10.302a5.085 5.085 0 00-3.653-1.45 5.261 5.261 0 00-5.136 4.3.872.872 0 00.863 1.019h5"
                    ></path>
                    <path
                      data-name="Path 46"
                      d="M12.984 9.734h0a7.015 7.015 0 00-6.907 6.082.886.886 0 00.871 1.007H19.02a.886.886 0 00.871-1.007 7.015 7.015 0 00-6.907-6.082z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span>1 người lớn</span>
          </div>
        </div>
        <button
          className="box-dat-ve-btn"
          onClick={() => setShowModal((e) => !e)}
        >
          Thay đổi tìm kiếm
        </button>
      </div>

      <div className="box-dat-ve__content">
        <div className="box-dat-ve__main">
          {step === 0 && <BoxNguoiLienHe step={0} />}
          {step === 1 && <BoxNguoiLienHe step={1} />}
          {step === 0 && (
            <BoxHanhKhach
              step={0}
              changeHLKGHandler={changeHLKGHandler}
              HLKG={HLKG}
              resetStepHandler={resetStepHandler}
            />
          )}
          {step === 1 && (
            <BoxHanhKhach
              step={1}
              changeHLKGHandler={changeHLKGHandler}
              HLKG={HLKG}
              resetStepHandler={resetStepHandler}
            />
          )}

          {step === 1 && (
            <div className="step-2">
              <BoxNguoiThanhToan />
              <HinhThucThanhToan />
            </div>
          )}
          {step === 0 && (
            <div className="box-btn">
              <button className="box-dat-ve-btn" onClick={continueHandler}>
                Tiếp tục
              </button>
            </div>
          )}
          {step === 0 && (
            <div className="box-dat-ve__footer">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  class="MuiSvgIcon-root MuiSvgIcon-colorError"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g data-name="Group 29023">
                    <path
                      data-name="Rectangle 4400"
                      fill="none"
                      d="M0 0h24v24H0z"
                    ></path>
                    <g
                      data-name="Group 13375"
                      transform="translate(-23.117 -635.564)"
                      stroke="currentColor"
                    >
                      <path
                        data-name="Path 759"
                        d="M36.8 639.557a1.925 1.925 0 00-3.369 0l-8.212 14.826a.963.963 0 00.861 1.394h18.072a.963.963 0 00.861-1.394z"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        data-name="Line 495"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M35.117 643.668v6.871"
                      ></path>
                      <circle
                        data-name="Ellipse 203"
                        cx="0.429"
                        cy="0.429"
                        r="0.429"
                        transform="translate(34.687 652.771)"
                        fill="#ff0406"
                      ></circle>
                    </g>
                  </g>
                </svg>
                <span>Lưu ý</span>
              </div>
              <ul>
                <li>
                  Đối với chuyến bay quốc tế hoặc quá cảnh quốc tế, hộ chiếu
                  phải còn hiệu lực ít nhất 06 tháng trước ngày khởi hành.
                </li>
                <li>
                  Vietnam Airlines và Bamboo Airways: Từ chối vận chuyển hành
                  khách mang thai từ 36 tuần trở lên. Vietjet Air và Vietravel
                  Airlines: Từ chối vận chuyển hành khách mang thai từ 32 tuần
                  trở lên.
                </li>
                <li>
                  Em bé từ 14 ngày đến dưới 02 tuổi cần đi cùng người lớn từ 18
                  tuổi trở lên.
                </li>
                <li>
                  Độ tuổi của trẻ em/em bé sẽ được tính từ ngày sinh đến ngày
                  khởi hành chuyến bay, căn cứ vào Giấy khai sinh/hộ chiếu của
                  trẻ.
                </li>
                <li>
                  Trường hợp trẻ em đi một mình vui lòng liên hệ trực tiếp đại
                  lý để được tư vấn dịch vụ trẻ em đi một mình trên chuyến bay.
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="box-dat-ve__side">
          <FlightInfoBox />
        </div>
      </div>
    </div>
  );
};

export default BoxDatVe;
