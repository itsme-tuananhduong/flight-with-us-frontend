import React, { useRef, useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';

import { AuthContext } from '../../shared/context/auth-context';
import axios from 'axios';

import './UpdatePassenger.css';

function UpdatePassenger({
  showUpdate,
  setShowUpdate,
  passengerInfo,
  triggerLoading,
  setError,
}) {
  const auth = useContext(AuthContext);

  const [data, setdata] = useState({});
  const [HoTen, setName] = useState('');
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

  // const convertDate = (e) => {
  //   if (e === undefined) return;
  //   let c = e.split('-');
  //   let a = new Date(c[2], c[1] - 1, c[0]);
  //   return a;
  // };

  useEffect(() => {
    setName(data.HoTen);
    setGioiTinh(data.GioiTinh);
    setNgaySinh(data.NgaySinh);
  }, [data, showUpdate]);

  // call api
  const handleData = () => {
    if (HoTen === '' || gioitinh === '' || ngaysinh === '') {
      setShowUpdate(false);
      setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
      return;
    }
    axios({
      method: 'put',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/passengers/${passengerInfo.IdHanhKhach}`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        HoTen: HoTen,
        GioiTinh: gioitinh,
        NgaySinh: new Date(ngaysinh).toString(),
      },
    })
      .then((res) => {
        setShowUpdate(false);
        triggerLoading();
      })
      .catch((err) => {
        setShowUpdate(false);
        setError(err.response.data.message);
        triggerLoading();
      });
  };
  return showUpdate ? (
    <div className="Update__Passenger">
      <div
        className="Passenger_overlay"
        ref={modalRef}
        onClick={closeModal}
      ></div>
      <div className="Passenger_main">
        <h4>Sửa Thông Tin Hành Khách</h4>
        <span className="code-passenger">
          Mã Hành Khách: <span className="result">{data.id}</span>
        </span>
        <div className="updatePassenger-list">
          <div className="form-field">
            <input
              type="text"
              className="form-input"
              placeholder=" "
              autoFocus
              value={HoTen || ''}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className="form-label">
              Họ Và Tên
              <span className="star">*</span>
            </label>
            <span className="message-error"></span>
          </div>
          <div className="form-field">
            <input
              type="text"
              className="form-input"
              placeholder=" "
              value={gioitinh || ''}
              onChange={(e) => setGioiTinh(e.target.value)}
            />
            <label htmlFor="name" className="form-label">
              Giới Tính
              <span className="star">*</span>
            </label>
            <span className="message-error"></span>
          </div>
        </div>
        <div className="updatePassenger-list time">
          <div className="form-field time">
            <DatePicker
              selected={Date.parse(ngaysinh)}
              onChange={(date) => setNgaySinh(date)}
              className="form-input"
              dateFormat="MM/dd/yyyy"
            />
            <label htmlFor="name" className="form-label">
              Ngày Sinh
              <span className="star">*</span>
            </label>
            <span className="message-error"></span>
          </div>
        </div>
        <div className="btn-update-flight">
          <span className="btn-success" onClick={handleData}>
            Xác Nhận
          </span>
          <span className="btn-delete" onClick={() => setShowUpdate(false)}>
            Hủy
          </span>
        </div>
      </div>
    </div>
  ) : null;
}

export default UpdatePassenger;
