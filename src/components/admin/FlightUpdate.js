import React, { useRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import './FlightUpdate.css';

function FlightUpdate({ showFlightUpdate, setShowFlightUpdate, flightInfo }) {
  const [showUpdate, setShowUpdate] = useState(false);
  const [data, setdata] = useState({});
  const [hangHK, setHangHK] = useState(data.HangHK);
  const [maybay, setMayBay] = useState(data.SHMayBay);
  const [ddKhoiHanh, setDDKhoiHanh] = useState(data.DiaDiemKhoiHanh);
  const [ddHaCanh, setDDHaCanh] = useState(data.DiaDiemHaCanh);
  const [tgKhoiHanh, setTGKhoiHanh] = useState('');
  const [tgHaCanh, setTGHaCanh] = useState('');
  useEffect(() => {
    setdata(flightInfo);
  }, [flightInfo]);
  const convertDate = (str) => {
    if (str === undefined) return;
    let arr = str.split(' ');
    let date = [];
    arr[0].split('/').map((x) => date.push(x));
    arr[1].split(':').map((x) => date.push(x));

    var dateObject = new Date(
      date[2],
      date[1] - 1,
      date[0],
      date[3],
      date[4],
      date[5]
    );
    return dateObject;
  };
  useEffect(() => {
    setHangHK(() => data.HangHK);
    setMayBay(() => data.SHMayBay);
    setDDKhoiHanh(() => data.DiaDiemKhoiHanh);
    setDDHaCanh(() => data.DiaDiemHaCanh);
    setTGKhoiHanh(convertDate(data.ThoiGianKhoiHanh));
    setTGHaCanh(convertDate(data.ThoiGianHaCanh));
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
    const newdata = {
      hangHK,
      maybay,
      ddKhoiHanh,
      ddHaCanh,
      tgKhoiHanh,
      tgHaCanh,
    };
    console.log(newdata);
  };
  return showFlightUpdate ? (
    <div className='Flight-Update'>
      <div
        className='Flight-Update-overlay'
        ref={modalRef}
        onClick={closeModal}
      ></div>
      <div className='updateFlight'>
        {showUpdate ? (
          <h4>Thông Tin chuyến bay</h4>
        ) : (
          <h4>Sửa thông tin chuyến bay</h4>
        )}
        <span className='updateFlight-list-item code'>
          Mã Chuyến Bay : <span className='result'>{flightInfo.id} </span>
        </span>
        {showUpdate ? (
          <div className='Flight-information'>
            <div className='updateFlight-list'>
              <div className='form-field'>
                <input
                  type='text'
                  className='form-input'
                  placeholder=' '
                  autoFocus
                  value={hangHK}
                  onChange={(e) => setHangHK(e.target.value)}
                />
                <label htmlFor='name' className='form-label'>
                  Hãng Hàng Không
                  <span className='star'>*</span>
                </label>
                <span className='message-error'></span>
              </div>
              <div className='form-field'>
                <input
                  type='text'
                  className='form-input'
                  placeholder=' '
                  value={maybay}
                  onChange={(e) => setMayBay(e.target.value)}
                />
                <label htmlFor='name' className='form-label'>
                  Máy Bay
                  <span className='star'>*</span>
                </label>
                <span className='message-error'></span>
              </div>
            </div>
            <div className='updateFlight-list'>
              <div className='form-field'>
                <input
                  type='text'
                  className='form-input'
                  placeholder=' '
                  value={ddKhoiHanh}
                  onChange={(e) => setDDKhoiHanh(e.target.value)}
                />
                <label htmlFor='name' className='form-label'>
                  Địa Điểm Khởi Hành
                  <span className='star'>*</span>
                </label>
                <span className='message-error'></span>
              </div>
              <div className='form-field'>
                <input
                  type='text'
                  className='form-input'
                  placeholder=' '
                  value={ddHaCanh}
                  onChange={(e) => setDDHaCanh(e.target.value)}
                />
                <label htmlFor='name' className='form-label'>
                  Địa Điểm Hạ Cánh
                  <span className='star'>*</span>
                </label>
                <span className='message-error'></span>
              </div>
            </div>
            <div className='updateFlight-list'>
              <div className='form-field time'>
                <DatePicker
                  selected={tgKhoiHanh}
                  onChange={(date) => setTGKhoiHanh(date)}
                  className='form-input'
                  showTimeSelect
                  dateFormat='Pp'
                />
                <label htmlFor='name' className='form-label'>
                  Ngày Sinh
                  <span className='star'>*</span>
                </label>
                <span className='message-error'></span>
              </div>
              <div className='form-field time'>
                <DatePicker
                  selected={tgHaCanh}
                  onChange={(date) => setTGHaCanh(date)}
                  className='form-input'
                  showTimeSelect
                  dateFormat='Pp'
                />
                <label htmlFor='name' className='form-label'>
                  Ngày Sinh
                  <span className='star'>*</span>
                </label>
                <span className='message-error'></span>
              </div>
            </div>
          </div>
        ) : (
          <div className='Flight-information'>
            <div className='updateFlight-list'>
              <span className='updateFlight-list-item'>
                Hãng Hàng Không :{' '}
                <span className='result'>{flightInfo.HangHK} </span>
              </span>
              <span className='updateFlight-list-item'>
                Máy Bay : <span className='result'>{flightInfo.SHMayBay}</span>
              </span>
            </div>
            <div className='updateFlight-list'>
              <span className='updateFlight-list-item'>
                Đia Điểm Khởi hành :
                <span className='result'>{flightInfo.DiaDiemKhoiHanh}</span>
              </span>
              <span className='updateFlight-list-item'>
                Địa Điểm Hạ Cánh :
                <span className='result'>{flightInfo.DiaDiemHaCanh}</span>
              </span>
            </div>
            <div className='updateFlight-list'>
              <span className='updateFlight-list-item'>
                Thời Gian Khởi Hành :
                <span className='result'>{flightInfo.ThoiGianKhoiHanh}</span>
              </span>
              <span className='updateFlight-list-item'>
                Thời Gian Hạ Cánh :
                <span className='result'>{flightInfo.ThoiGianHaCanh} </span>
              </span>
            </div>
          </div>
        )}
        {/*button */}
        {showUpdate ? (
          <div className='btn-update-flight'>
            <span className='btn-success' onClick={handleGetData}>
              Xác Nhận
            </span>
            <span className='btn-delete' onClick={() => setShowUpdate(false)}>
              Hủy
            </span>
          </div>
        ) : (
          <div className='btn-update-flight'>
            <span className='btn-success' onClick={() => setShowUpdate(true)}>
              Sửa
            </span>
            <span
              className='btn-delete'
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
