import React, { useRef, useState, useContext } from 'react';

import { AuthContext } from '../../shared/context/auth-context';
import axios from 'axios';
import ErrorModal from '../../shared/components/ErrorModal';

import './ModalAddTicket.css';

function FormInsertSticker({
  showTicket,
  setShowTicket,
  flightInfo,
  triggerLoading,
  setError,
}) {
  const auth = useContext(AuthContext);

  // const [error, setError] = useState(null);
  const [typeTicket, setTypeTicket] = useState('Thương Gia');
  const [ticketPrice, setTicketPrice] = useState('');
  const [seatCode, setSeatCode] = useState('');
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowTicket(false);
    }
  };
  //call api
  const handleGetData = () => {
    if (typeTicket === '' || ticketPrice === '' || seatCode === '') {
      setShowTicket(false);
      setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
      return;
    } else {
      if (ticketPrice <= 0) {
        setShowTicket(false);
        setError('Giá vé không hợp lệ');
        return;
      }
    }
    axios({
      method: 'post',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/tickets`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        LoaiVe: typeTicket,
        GiaVe: ticketPrice,
        MaChoNgoi: seatCode,
        TrangThai: 'Chưa bán',
        IdChuyenBay: flightInfo.IdChuyenBay,
      },
    })
      .then((res) => {
        triggerLoading();
        setShowTicket(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        triggerLoading();
        setShowTicket(false);
      });
  };

  return showTicket ? (
    <div className="ticket">
      <div className="ticket-overlay" ref={modalRef} onClick={closeModal}></div>
      <div className="ticket-container">
        <div className="Flight-info">
          <div className="ticket-heading">
            <h4 className="info-title">Chuyến bay</h4>

            <div
              className="ticket-close"
              onClick={() => setShowTicket((e) => !e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="close-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28027" fill="none">
                  <path data-name="Rectangle 4499" d="M0 0h24v24H0z"></path>
                  <g
                    data-name="Group 28346"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.3"
                  >
                    <path data-name="Line 22" d="M5 5l14 14"></path>
                    <path data-name="Line 23" d="M19 5L5 19"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="info-content">
            <div>
              <span className="info-item">
                Hãng hàng không: <span>{flightInfo.HangHK}</span>
              </span>
              <span className="info-item">
                Số hiệu máy bay: <span>{flightInfo.SHMayBay}</span>
              </span>
            </div>
            <div>
              <span className="info-item">
                Địa điểm khởi hành: <span>{flightInfo.DiaDiemKhoiHanh}</span>
              </span>
              <span className="info-item">
                Địa điểm hạ cánh: <span>{flightInfo.DiaDiemHaCanh}</span>
              </span>
            </div>
            <div>
              <span className="info-item">
                Thời gian khởi hành: <span>{flightInfo.ThoiGianKhoiHanh}</span>
              </span>
              <span className="info-item">
                Thời gian hạ cánh: <span>{flightInfo.ThoiGianHaCanh}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="Add-Ticket">
          <h4 className="info-title info-ticket">Thêm vé máy bay</h4>
          <div className="content-ticket">
            <div className="select">
              <label htmlFor="ticket">Loại vé: </label>
              <select
                name="ticket"
                id="ticket"
                className="ticket-option"
                onChange={(e) => setTypeTicket(e.target.value)}
              >
                <option value="Thương Gia">Thương gia</option>
                <option value="Phổ Thông">Phổ thông</option>
                <option value="Hạng Nhất">Hạng nhất</option>
              </select>
            </div>

            <div className="group">
              <div className="form-field">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  className="input-icon"
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
                <input
                  type="text"
                  className="form-input"
                  placeholder=" "
                  value={ticketPrice}
                  onChange={(e) => setTicketPrice(e.target.value)}
                />
                <label htmlFor="name" className="form-label">
                  Giá vé
                  <span className="star"> *</span>
                </label>
                <span className="message-error"></span>
              </div>
              <div className="form-field">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  className="input-icon"
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
                <input
                  type="text"
                  className="form-input"
                  placeholder=" "
                  value={seatCode}
                  onChange={(e) => setSeatCode(e.target.value)}
                />
                <label htmlFor="name" className="form-label">
                  Mã chỗ ngồi
                  <span className="star"> *</span>
                </label>
                <span className="message-error"></span>
              </div>
            </div>
          </div>
          <div className="ticket-btn">
            <span onClick={handleGetData}>Thêm</span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default FormInsertSticker;
