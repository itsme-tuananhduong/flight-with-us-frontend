import React, { useRef, useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import './FlightUpdate.css';

import { AuthContext } from '../../shared/context/auth-context';
import axios from 'axios';

function FlightUpdate({
  showFlightUpdate,
  setShowFlightUpdate,
  flightInfo,
  triggerLoading,
  setError,
}) {
  const auth = useContext(AuthContext);

  const [showUpdate, setShowUpdate] = useState(false);
  const [data, setdata] = useState({});
  const [HangHK, setHangHK] = useState(data.HangHK);
  const [SHMayBay, setMayBay] = useState(data.SHMayBay);
  const [DiaDiemKhoiHanh, setDDKhoiHanh] = useState(data.DiaDiemKhoiHanh);
  const [DiaDiemHaCanh, setDDHaCanh] = useState(data.DiaDiemHaCanh);
  const [tgKhoiHanh, setTGKhoiHanh] = useState(data.ThoiGianKhoiHanh);
  const [tgHaCanh, setTGHaCanh] = useState(data.ThoiGianHaCanh);

  useEffect(() => {
    setdata(flightInfo);
  }, [flightInfo]);

  // const convertDate = (str) => {
  //   if (str === undefined) return;
  //   let arr = str.split(' ');
  //   let date = [];
  //   arr[0].split('/').map((x) => date.push(x));
  //   arr[1].split(':').map((x) => date.push(x));

  //   var dateObject = new Date(
  //     date[2],
  //     date[1] - 1,
  //     date[0],
  //     date[3],
  //     date[4],
  //     date[5]
  //   );
  //   return dateObject;
  // };

  useEffect(() => {
    setHangHK(() => data.HangHK);
    setMayBay(() => data.SHMayBay);
    setDDKhoiHanh(() => data.DiaDiemKhoiHanh);
    setDDHaCanh(() => data.DiaDiemHaCanh);
    setTGKhoiHanh(data.ThoiGianKhoiHanh);
    setTGHaCanh(data.ThoiGianHaCanh);
  }, [data, showUpdate]);

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowFlightUpdate(false);
      setShowUpdate(false);
    }
  };

  //call api
  const handleGetData = () => {
    if (
      HangHK === '' ||
      SHMayBay === '' ||
      tgKhoiHanh.toString() === '' ||
      tgHaCanh.toString() === '' ||
      DiaDiemKhoiHanh === '' ||
      DiaDiemHaCanh === ''
    ) {
      setShowFlightUpdate(false);
      setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
      return;
    } else {
      if (DiaDiemKhoiHanh === DiaDiemHaCanh) {
        setShowFlightUpdate(false);
        setError(
          'Địa điểm khởi hành và địa điểm hạ cánh không được trùng nhau'
        );
        return;
      }
      if (tgKhoiHanh.toString() === tgHaCanh.toString()) {
        setShowFlightUpdate(false);
        setError(
          'Thời gian khởi hành và thời gian hạ cánh không được trùng nhau'
        );
        return;
      } else if (tgKhoiHanh > tgHaCanh) {
        setShowFlightUpdate(false);
        setError('Thời gian khởi hành không được muộn hơn thời gian hạ cánh');
        return;
      }
    }
    axios({
      method: 'put',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/flights/${flightInfo.IdChuyenBay}`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        HangHK: HangHK,
        SHMayBay: SHMayBay,
        ThoiGianKhoiHanh: new Date(tgKhoiHanh).toString(),
        ThoiGianHaCanh: new Date(tgHaCanh).toString(),
        DiaDiemKhoiHanh: DiaDiemKhoiHanh,
        DiaDiemHaCanh: DiaDiemHaCanh,
        // LoaiHinhBay: flyType,
        // TongSoVe: numOfTicker,
        // SLVeConLai: numOfTicker,
      },
    })
      .then((res) => {
        triggerLoading();
      })
      .catch((err) => {
        setError(err.response.data.message);
        triggerLoading();
      });
  };

  return showFlightUpdate ? (
    <div className="Flight-Update">
      <div
        className="Flight-Update-overlay"
        ref={modalRef}
        onClick={closeModal}
      ></div>
      <div className="updateFlight">
        {showUpdate ? (
          <h4>Sửa thông tin chuyến bay</h4>
        ) : (
          <h4>Thông Tin chuyến bay</h4>
        )}
        <span className="updateFlight-list-item code">
          Mã chuyến bay:{' '}
          <span className="result">{flightInfo.IdChuyenBay} </span>
        </span>
        {showUpdate ? (
          <div className="Flight-information">
            <div className="updateFlight-list">
              <div className="form-field">
                <input
                  type="text"
                  className="form-input"
                  placeholder=" "
                  autoFocus
                  value={HangHK}
                  onChange={(e) => setHangHK(e.target.value)}
                />
                <label htmlFor="name" className="form-label">
                  Hãng hàng không
                  <span className="star"> *</span>
                </label>
                <span className="message-error"></span>
              </div>
              <div className="form-field">
                <input
                  type="text"
                  className="form-input"
                  placeholder=" "
                  value={SHMayBay}
                  onChange={(e) => setMayBay(e.target.value)}
                />
                <label htmlFor="name" className="form-label">
                  Số hiệu máy bay
                  <span className="star"> *</span>
                </label>
                <span className="message-error"></span>
              </div>
            </div>
            <div className="updateFlight-list">
              <div className="form-field">
                <input
                  type="text"
                  className="form-input"
                  placeholder=" "
                  value={DiaDiemKhoiHanh}
                  onChange={(e) => setDDKhoiHanh(e.target.value)}
                />
                <label htmlFor="name" className="form-label">
                  Địa điểm khởi hành
                  <span className="star"> *</span>
                </label>
                <span className="message-error"></span>
              </div>
              <div className="form-field">
                <input
                  type="text"
                  className="form-input"
                  placeholder=" "
                  value={DiaDiemHaCanh}
                  onChange={(e) => setDDHaCanh(e.target.value)}
                />
                <label htmlFor="name" className="form-label">
                  Địa điểm hạ cánh
                  <span className="star"> *</span>
                </label>
                <span className="message-error"></span>
              </div>
            </div>
            <div className="updateFlight-list">
              <div className="form-field time">
                <DatePicker
                  selected={Date.parse(tgKhoiHanh)}
                  onChange={(date) => setTGKhoiHanh(date)}
                  className="form-input"
                  showTimeSelect
                  dateFormat="MM/dd/yyyy h:mm aa"
                />
                <label htmlFor="name" className="form-label">
                  Thời gian khởi hành
                  <span className="star"> *</span>
                </label>
                <span className="message-error"></span>
              </div>
              <div className="form-field time">
                <DatePicker
                  selected={Date.parse(tgHaCanh)}
                  onChange={(date) => setTGHaCanh(date)}
                  className="form-input"
                  showTimeSelect
                  dateFormat="MM/dd/yyyy h:mm aa"
                />
                <label htmlFor="name" className="form-label">
                  Thời gian hạ cánh
                  <span className="star"> *</span>
                </label>
                <span className="message-error"></span>
              </div>
            </div>
          </div>
        ) : (
          <div className="Flight-information">
            <div className="updateFlight-list">
              <span className="updateFlight-list-item">
                Hãng hàng không:{' '}
                <span className="result">{flightInfo.HangHK} </span>
              </span>
              <span className="updateFlight-list-item">
                Số hiệu máy bay:{' '}
                <span className="result">{flightInfo.SHMayBay}</span>
              </span>
            </div>
            <div className="updateFlight-list">
              <span className="updateFlight-list-item">
                Đia điểm khởi hành:{' '}
                <span className="result">{flightInfo.DiaDiemKhoiHanh}</span>
              </span>
              <span className="updateFlight-list-item">
                Địa điểm hạ cánh:{' '}
                <span className="result">{flightInfo.DiaDiemHaCanh}</span>
              </span>
            </div>
            <div className="updateFlight-list">
              <span className="updateFlight-list-item">
                Thời gian khởi hành:{' '}
                <span className="result">{flightInfo.ThoiGianKhoiHanh}</span>
              </span>
              <span className="updateFlight-list-item">
                Thời gian hạ cánh:{' '}
                <span className="result">{flightInfo.ThoiGianHaCanh} </span>
              </span>
            </div>
          </div>
        )}
        {/*button */}
        {showUpdate ? (
          <div className="btn-update-flight">
            <span className="btn-success" onClick={handleGetData}>
              Xác nhận
            </span>
            <span className="btn-delete" onClick={() => setShowUpdate(false)}>
              Hủy
            </span>
          </div>
        ) : (
          <div className="btn-update-flight">
            <span className="btn-success" onClick={() => setShowUpdate(true)}>
              Sửa
            </span>
            <span
              className="btn-delete"
              onClick={() => setShowFlightUpdate(false)}
            >
              Thoát
            </span>
          </div>
        )}
      </div>
    </div>
  ) : null;
}

export default FlightUpdate;
