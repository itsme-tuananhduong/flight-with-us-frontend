import React, { useRef, useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../shared/context/auth-context';
import axios from 'axios';

import './TicketList.css';

function TicketList({
  showTicketList,
  setShowTicketList,
  flightInfo,
  triggerLoading,
  setError,
  ticket,
}) {
  const auth = useContext(AuthContext);

  const [data, setdata] = useState({});
  const [typeTicket, setTypeTicket] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [seatCode, setSeatCode] = useState('');
  const [tabTicket, setTabTicket] = useState(null);

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowTicketList(false);
    }
  };
  useEffect(() => {
    setdata(ticket);
  }, [ticket]);
  useEffect(() => {}, [data]);
  const handleData = (ticket) => {
    setTabTicket(ticket.IdVeMayBay);
    setTypeTicket(ticket.LoaiVe);
    setSeatCode(ticket.MaChoNgoi);
    setTicketPrice(ticket.GiaVe);
  };
  const handleGetData = () => {
    if (typeTicket === '' || ticketPrice === '' || seatCode === '') {
      setShowTicketList(false);
      setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
      return;
    } else {
      if (ticketPrice <= 0) {
        setShowTicketList(false);
        setError('Giá vé không hợp lệ');
        return;
      }
    }
    axios({
      method: 'put',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/tickets/${tabTicket}`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        LoaiVe: typeTicket,
        GiaVe: ticketPrice,
        MaChoNgoi: seatCode,
      },
    })
      .then((res) => {
        triggerLoading();
        setShowTicketList(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        triggerLoading();
        setShowTicketList(false);
      });
  };
  const ticketDelete = (ticket) => {
    axios({
      method: 'delete',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/tickets/${ticket.IdVeMayBay}`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        triggerLoading();
        setShowTicketList(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        triggerLoading();
        setShowTicketList(false);
      });
  };
  return showTicketList ? (
    <div className="ticketList">
      <div
        className="ticketList-overlay"
        ref={modalRef}
        onClick={closeModal}
      ></div>
      <div className="ticketList-container">
        <div className="Flight-info">
          <div className="ticketList-heading">
            <h4 className="info-title">Chuyến bay</h4>

            <div
              className="ticket-close"
              onClick={() => setShowTicketList((e) => !e)}
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
        <hr />
        <h4 className="ticketList-title">Danh sách vé máy bay</h4>
        <div className="search-ticket">
          <div className="select">
            <label htmlFor="ticket-type">Loại vé: </label>

            <select
              name="ticket-type"
              id="ticket-type"
              className="ticket-option"
            >
              <option value="Tất cả">Tất cả</option>
              <option value="Thương Gia">Thương gia</option>
              <option value="Phổ Thông">Phổ thông</option>
              <option value="Hạng Nhất">Hạng nhất</option>
            </select>
          </div>
          <div className="select">
            <label htmlFor="ticket-price">Giá vé: </label>

            <select
              name="ticket-price"
              id="ticket-price"
              className="ticket-option"
            >
              <option value="Tất cả">Tất cả</option>
              <option value="Từ Cao Xuống Thấp">Từ cao xuống thấp</option>
              <option value="Từ Thấp Đến Cao">Từ thấp đến cao</option>
            </select>
          </div>
        </div>
        <div className="ticket-list">
          {data.map((ticket) =>
            tabTicket === ticket.IdVeMayBay ? (
              <div className="ticket-list-item" key={ticket.IdVeMayBay}>
                <span className="stt-ticket">{ticket.IdVeMayBay}</span>
                <div className="select">
                  <select
                    name="ticket"
                    id="ticket"
                    className="ticket-option"
                    defaultValue={typeTicket}
                    onChange={(e) => setTypeTicket(e.target.value)}
                  >
                    <option value="Thương gia">Thương gia</option>
                    <option value="Phổ thông">Phổ thông</option>
                    <option value="Hạng nhất">Hạng nhất</option>
                  </select>
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    className="form-input"
                    placeholder=" "
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                    autoFocus
                  />
                  <label htmlFor="name" className="form-label">
                    Giá vé
                    <span className="star"> *</span>
                  </label>
                  <span className="message-error"></span>
                </div>
                <div className="form-field">
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
                <div className="btn-up-de">
                  <span className="btn-update" onClick={handleGetData}>
                    Xác Nhận
                  </span>
                  <span
                    className="btn-delete"
                    onClick={() => setTabTicket(null)}
                  >
                    Hủy
                  </span>
                </div>
              </div>
            ) : (
              <div className="ticket-list-item active" key={ticket.IdVeMayBay}>
                <span className="stt-ticket">{ticket.IdVeMayBay}</span>
                <span className="item-content">
                  Loại vé: <span className="result">{ticket.LoaiVe}</span>
                </span>
                <span className="item-content">
                  Giá vé: <span className="result">{ticket.GiaVe} đ</span>
                </span>
                <span className="item-content">
                  Mã chỗ ngồi:{' '}
                  <span className="result">{ticket.MaChoNgoi}</span>
                </span>
                <span className="btn-update" onClick={() => handleData(ticket)}>
                  Sửa
                </span>
                <span
                  className="btn-delete"
                  onClick={() => ticketDelete(ticket)}
                >
                  Xóa
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  ) : null;
}

export default TicketList;
