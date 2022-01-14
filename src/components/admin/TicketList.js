import React, { useRef, useState, useEffect } from 'react';

import './TicketList.css';

const Ticket = [
  {
    idve: '1',
    LoaiVe: 'Thương Gia',
    GiaVe: '656.789',
    MaCho: 'MC01',
  },
  {
    idve: '2',
    LoaiVe: 'Phổ Thông',
    GiaVe: '356.789',
    MaCho: 'MC01',
  },

  {
    idve: '3',
    LoaiVe: 'Phổ Thông',
    GiaVe: '356.789',
    MaCho: 'MC01',
  },

  {
    idve: '4',
    LoaiVe: 'Phổ Thông',
    GiaVe: '356.789',
    MaCho: 'MC01',
  },

  {
    idve: '5',
    LoaiVe: 'Thương Gia',
    GiaVe: '656.789',
    MaCho: 'MC01',
  },

  {
    idve: '6',
    LoaiVe: 'Thương Gia',
    GiaVe: '656.789',
    MaCho: 'MC01',
  },
];

function TicketList({ showTicketList, setShowTicketList, flightInfo }) {
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
    setdata(Ticket);
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleData = (ticket) => {
    setTabTicket(ticket.idve);
    setTypeTicket(ticket.LoaiVe);
    setSeatCode(ticket.MaCho);
    setTicketPrice(ticket.GiaVe);
  };
  const handleGetData = () => {
    const newdata = {
      tabTicket,
      typeTicket,
      ticketPrice,
      seatCode,
    };
    console.log(newdata);
  };
  return showTicketList ? (
    <div className='ticketList'>
      <div
        className='ticketList-overlay'
        ref={modalRef}
        onClick={closeModal}
      ></div>
      <div className='ticketList-container'>
        <div className='Flight-info'>
          <div className='ticketList-heading'>
            <h4 className='info-title'>Chuyến Bay</h4>

            <div
              className='ticket-close'
              onClick={() => setShowTicketList((e) => !e)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                className='close-icon'
                focusable='false'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <g data-name='Group 28027' fill='none'>
                  <path data-name='Rectangle 4499' d='M0 0h24v24H0z'></path>
                  <g
                    data-name='Group 28346'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.3'
                  >
                    <path data-name='Line 22' d='M5 5l14 14'></path>
                    <path data-name='Line 23' d='M19 5L5 19'></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className='info-content'>
            <div>
              <span className='info-item'>
                Hãng Hàng Không : <span>{flightInfo.HangHK}</span>
              </span>
              <span className='info-item'>
                Số Hiệu Máy Bay : <span>{flightInfo.SHMayBay}</span>
              </span>
            </div>
            <div>
              <span className='info-item'>
                Địa Điểm Khởi Hành : <span>{flightInfo.DiaDiemKhoiHanh}</span>
              </span>
              <span className='info-item'>
                Địa Điểm Hạ Cánh : <span>{flightInfo.DiaDiemHaCanh}</span>
              </span>
            </div>
            <div>
              <span className='info-item'>
                Thời Gian Khởi Hành : <span>{flightInfo.ThoiGianKhoiHanh}</span>
              </span>
              <span className='info-item'>
                Thời Gian Hạ Cánh : <span>{flightInfo.ThoiGianHaCanh}</span>
              </span>
            </div>
          </div>
        </div>
        {/*  */}
        <hr />
        <h4 className='ticketList-title'>Danh Sách Vé Máy Bay</h4>
        <div className='search-ticket'>
          <div className='select'>
            <label htmlFor='ticket-type'>Loại Vé : </label>

            <select
              name='ticket-type'
              id='ticket-type'
              className='ticket-option'
            >
              <option value='Tất cả'>Tất cả</option>
              <option value='Thương Gia'>Thương Gia</option>
              <option value='Phổ Thông'>Phổ Thông</option>
              <option value='Hạng Nhất'>Hạng Nhất</option>
            </select>
          </div>
          <div className='select'>
            <label htmlFor='ticket-price'>Giá Vé : </label>

            <select
              name='ticket-price'
              id='ticket-price'
              className='ticket-option'
            >
              <option value='Tất cả'>Tất cả</option>
              <option value='Từ Cao Xuống Thấp'>Từ Cao Xuống Thấp</option>
              <option value='Từ Thấp Đến Cao'>Từ Thấp Đến Cao</option>
            </select>
          </div>
        </div>
        <div className='ticket-list'>
          {data.map((ticket) =>
            tabTicket === ticket.idve ? (
              <div className='ticket-list-item update' key={ticket.idve}>
                <span className='stt-ticket'>{ticket.idve}</span>
                <div className='select'>
                  <select
                    name='ticket'
                    id='ticket'
                    className='ticket-option'
                    defaultValue={typeTicket}
                    onChange={(e) => setTypeTicket(e.target.value)}
                  >
                    <option value='Thương Gia'>Thương Gia</option>
                    <option value='Phổ Thông'>Phổ Thông</option>
                    <option value='Hạng Nhất'>Hạng Nhất</option>
                  </select>
                </div>
                <div className='form-field'>
                  <input
                    type='text'
                    className='form-input'
                    placeholder=' '
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                    autoFocus
                  />
                  <label htmlFor='name' className='form-label'>
                    Giá Vé
                    <span className='star'>*</span>
                  </label>
                  <span className='message-error'></span>
                </div>
                <div className='form-field'>
                  <input
                    type='text'
                    className='form-input'
                    placeholder=' '
                    value={seatCode}
                    onChange={(e) => setSeatCode(e.target.value)}
                  />
                  <label htmlFor='name' className='form-label'>
                    Mã Chỗ Ngồi
                    <span className='star'>*</span>
                  </label>
                  <span className='message-error'></span>
                </div>
                <div className='btn-up-de'>
                  <span className='btn-update' onClick={handleGetData}>
                    Xác Nhận
                  </span>
                  <span
                    className='btn-delete'
                    onClick={() => setTabTicket(null)}
                  >
                    Hủy
                  </span>
                </div>
              </div>
            ) : (
              <div className='ticket-list-item active' key={ticket.idve}>
                <span className='stt-ticket'>{ticket.idve}</span>
                <span className='item-content'>
                  Loại Vé : <span className='result'>{ticket.LoaiVe}</span>
                </span>
                <span className='item-content'>
                  Giá Vé : <span className='result'>{ticket.GiaVe} đ</span>
                </span>
                <span className='item-content'>
                  Mã Chỗ Ngồi : <span className='result'>{ticket.MaCho}</span>
                </span>
                <span className='btn-update' onClick={() => handleData(ticket)}>
                  Sửa
                </span>
                <span className='btn-delete'>Xóa</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  ) : null;
}

export default TicketList;
