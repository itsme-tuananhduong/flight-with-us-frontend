import React, { useRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import './UpdatePassenger.css';

function UpdatePassenger({ showUpdate, setShowUpdate, passengerInfo }) {
  const [data, setdata] = useState({});
  const [name, setName] = useState('');
  const [gioitinh, setGioiTinh] = useState('');
  const [ngaysinh, setNgaySinh] = useState('');
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowUpdate(false);
    }
  };

  useEffect(() => {
    setdata(passengerInfo);
  }, [passengerInfo]);
  const convertDate = (e) => {
    if (e === undefined) return;
    let c = e.split('-');
    let a = new Date(c[2], c[1] - 1, c[0]);
    return a;
  };
  useEffect(() => {
    setName(data.name);
    setGioiTinh(data.GioiTinh);
    setNgaySinh(convertDate(data.NgaySinh));
  }, [data, showUpdate]);

  // call api
  const handleData = () => {
    const newdata = {
      name,
      gioitinh,
      ngaysinh,
    };
    console.log(newdata);
  };
  return showUpdate ? (
    <div className='Update__Passenger'>
      <div
        className='Passenger_overlay'
        ref={modalRef}
        onClick={closeModal}
      ></div>
      <div className='Passenger_main'>
        <h4>Sửa Thông Tin Hành Khách</h4>
        <span className='code-passenger'>
          Mã Hành Khách : <span className='result'>{data.id}</span>
        </span>
        <div className='updatePassenger-list'>
          <div className='form-field'>
            <input
              type='text'
              className='form-input'
              placeholder=' '
              autoFocus
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='name' className='form-label'>
              Họ Và Tên
              <span className='star'>*</span>
            </label>
            <span className='message-error'></span>
          </div>
          <div className='form-field'>
            <input
              type='text'
              className='form-input'
              placeholder=' '
              value={gioitinh || ''}
              onChange={(e) => setGioiTinh(e.target.value)}
            />
            <label htmlFor='name' className='form-label'>
              Giới Tính
              <span className='star'>*</span>
            </label>
            <span className='message-error'></span>
          </div>
        </div>
        <div className='updatePassenger-list time'>
          <div className='form-field time'>
            <DatePicker
              selected={ngaysinh}
              onChange={(date) => setNgaySinh(date)}
              className='form-input'
            />
            <label htmlFor='name' className='form-label'>
              Ngày Sinh
              <span className='star'>*</span>
            </label>
            <span className='message-error'></span>
          </div>
        </div>
        <div className='btn-update-flight'>
          <span className='btn-success' onClick={handleData}>
            Xác Nhận
          </span>
          <span className='btn-delete' onClick={() => setShowUpdate(false)}>
            Hủy
          </span>
        </div>
      </div>
    </div>
  ) : null;
}

export default UpdatePassenger;
