import React, { useState, useRef, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import Provinces from '../FormSearch/ChildComponent/Provinces/Provinces';

import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/ErrorModal';
import axios from 'axios';
import Modal from '../../shared/components/Modal';

import './AddFlight.css';

function AddFlight({ setIsLoading }) {
  const auth = useContext(AuthContext);

  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [timeLanding, setTimeLanding] = useState(new Date());
  const [departureTime, setDepartureTime] = useState(new Date());
  const [showBoxProvinder, setShowBoxProvinder] = useState(false);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [numOfTicker, setNumOfTicket] = useState('');
  const [planeCode, setPlaneCode] = useState('');
  const [tabProvinces, setTabProvinces] = useState(null);
  const [showChooseAirline, setShowChooseAirline] = useState(false);
  const [chooseAirline, setChooseAirline] = useState('');
  const [showFlyType, setShowFlyType] = useState(false);
  const [flyType, setFlyType] = useState('');
  const handleOnchangeInput = (e) => {};
  const handleTabProvinder1 = () => {
    setShowBoxProvinder((e) => !e);
    setTabProvinces(1);
  };
  const handleTabProvinder2 = () => {
    setShowBoxProvinder((e) => !e);
    setTabProvinces(2);
  };
  const chooseAirlineRef = useRef();
  const closeChooseAirlineOption = (e) => {
    if (chooseAirlineRef.current === e.target) {
      setShowChooseAirline(false);
    }
  };
  const handleChooseAirline = (e) => {
    setChooseAirline(e.target.innerText);
  };
  useEffect(() => {
    setShowChooseAirline(false);
  }, [chooseAirline]);
  const flyTypeRef = useRef();
  const closeFLyType = (e) => {
    if (flyTypeRef.current === e.target) {
      setShowFlyType(false);
    }
  };
  const handleFlyType = (e) => {
    setFlyType(e.target.innerText);
  };
  useEffect(() => {
    setShowFlyType(false);
  }, [flyType]);
  // call api

  const handleGetData = async () => {
    if (
      chooseAirline === '' ||
      planeCode === '' ||
      departureTime.toString() === '' ||
      timeLanding.toString() === '' ||
      departure === '' ||
      destination === '' ||
      flyType === '' ||
      numOfTicker === '' ||
      numOfTicker === ''
    ) {
      setError('Oops... Có vẻ bạn thiếu thông tin nào đó');
      return;
    } else {
      if (departure === destination) {
        setError(
          'Địa điểm khởi hành và địa điểm hạ cánh không được trùng nhau'
        );
        return;
      }
      if (departureTime.toString() === timeLanding.toString()) {
        setError(
          'Thời gian khởi hành và thời gian hạ cánh không được trùng nhau'
        );
        return;
      } else if (departureTime > timeLanding) {
        setError('Thời gian khởi hành không được muộn hơn thời gian hạ cánh');
        return;
      }
      if (numOfTicker <= 0) {
        setError('Số lượng vé không hợp lệ');
        return;
      }
    }
    setIsLoading(true);
    axios({
      method: 'post',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: '/flights',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        HangHK: chooseAirline,
        SHMayBay: planeCode,
        ThoiGianKhoiHanh: departureTime.toString(),
        ThoiGianHaCanh: timeLanding.toString(),
        DiaDiemKhoiHanh: departure,
        DiaDiemHaCanh: destination,
        LoaiHinhBay: flyType,
        TongSoVe: numOfTicker,
        SLVeConLai: numOfTicker,
      },
    })
      .then((res) => {
        setIsLoading(false);
        setShowModal(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
      });
  };
  const clearError = () => {
    setError(null);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="AddFlight">
      <Modal onCancel={closeModal} header="Thông báo" show={showModal}>
        <p>Thêm chuyến bay thành công</p>
      </Modal>
      <ErrorModal error={error} onClear={clearError} />
      <div className="fight-group1">
        <div className="form-field">
          <div
            className="arrow-btn-flight"
            onClick={() => setShowChooseAirline((pre) => !pre)}
          >
            <svg
              className="arrow-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="input-icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g data-name="Group 28272">
              <path
                data-name="Rectangle 4485"
                fill="none"
                d="M0 0h24v24H0z"
              ></path>
              <g data-name="Group 25252">
                <g data-name="Rectangle 4295">
                  <path
                    data-name="Path 20305"
                    d="M20.608 21H8.869a.39.39 0 01-.391-.391V3.391A.391.391 0 018.869 3h11.739a.391.391 0 01.391.391v17.217a.391.391 0 01-.391.392zM9.26 20.217h10.957V3.783H9.261z"
                  ></path>
                </g>
                <g data-name="Rectangle 4296">
                  <path
                    data-name="Path 20306"
                    d="M8.871 21h-5.48A.39.39 0 013 20.609V8.087a.391.391 0 01.391-.391h5.48a.391.391 0 01.391.391v12.522a.391.391 0 01-.391.391zm-5.087-.783h4.7V8.479h-4.7z"
                  ></path>
                </g>
                <g data-name="Rectangle 4297">
                  <path
                    data-name="Path 20307"
                    d="M8.87 13.173H5.739a.39.39 0 01-.391-.391v-2.348a.391.391 0 01.391-.391h3.13a.391.391 0 01.391.391v2.348a.391.391 0 01-.39.391zm-2.739-.783h2.348v-1.564H6.131z"
                  ></path>
                </g>
                <g data-name="Rectangle 4298">
                  <path
                    data-name="Path 20308"
                    d="M8.87 17.869H5.739a.39.39 0 01-.391-.391V15.13a.391.391 0 01.391-.391h3.13a.391.391 0 01.391.391v2.348a.391.391 0 01-.39.391zm-2.739-.783h2.348v-1.564H6.131z"
                  ></path>
                </g>
                <g data-name="Rectangle 4299">
                  <path
                    data-name="Path 20309"
                    d="M16.695 21h-3.913a.39.39 0 01-.391-.391v-1.561a1.958 1.958 0 011.956-1.956h.783a1.959 1.959 0 011.957 1.956v1.565a.391.391 0 01-.392.387zm-3.522-.783h3.13v-1.169a1.175 1.175 0 00-1.174-1.174h-.783a1.175 1.175 0 00-1.172 1.174z"
                  ></path>
                </g>
                <g data-name="Line 2175">
                  <path
                    data-name="Path 20310"
                    d="M11.997 6.131h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                  ></path>
                </g>
                <g data-name="Line 2177">
                  <path
                    data-name="Path 20311"
                    d="M18.258 6.131h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                  ></path>
                </g>
                <g data-name="Line 2178">
                  <path
                    data-name="Path 20312"
                    d="M11.997 8.479h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                  ></path>
                </g>
                <g data-name="Line 2180">
                  <path
                    data-name="Path 20313"
                    d="M18.258 8.479h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                  ></path>
                </g>
                <g data-name="Line 2181">
                  <path
                    data-name="Path 20314"
                    d="M11.997 10.826h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                  ></path>
                </g>
                <g data-name="Line 2183">
                  <path
                    data-name="Path 20315"
                    d="M18.258 10.826h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                  ></path>
                </g>
                <g data-name="Line 2184">
                  <path
                    data-name="Path 20316"
                    d="M11.997 13.174h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                  ></path>
                </g>
                <g data-name="Line 2186">
                  <path
                    data-name="Path 20317"
                    d="M18.258 13.174h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                  ></path>
                </g>
                <g data-name="Line 2187">
                  <path
                    data-name="Path 20318"
                    d="M11.997 15.522h-.78a.392.392 0 110-.783h.78a.392.392 0 010 .783z"
                  ></path>
                </g>
                <g data-name="Line 2176">
                  <path
                    data-name="Path 20319"
                    d="M15.128 6.131h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                  ></path>
                </g>
                <g data-name="Line 2179">
                  <path
                    data-name="Path 20320"
                    d="M15.128 8.479h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                  ></path>
                </g>
                <g data-name="Line 2182">
                  <path
                    data-name="Path 20321"
                    d="M15.128 10.826h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                  ></path>
                </g>
                <g data-name="Line 2185">
                  <path
                    data-name="Path 20322"
                    d="M15.128 13.174h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                  ></path>
                </g>
                <g data-name="Line 2188">
                  <path
                    data-name="Path 20323"
                    d="M15.128 15.522h-.783a.392.392 0 110-.783h.783a.392.392 0 110 .783z"
                  ></path>
                </g>
                <g data-name="Line 2189">
                  <path
                    data-name="Path 20324"
                    d="M18.258 15.522h-.78a.392.392 0 110-.783h.78a.392.392 0 110 .783z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <input
            type="text"
            className="form-input"
            placeholder=" "
            value={chooseAirline}
            onClick={() => setShowChooseAirline((pre) => !pre)}
            onChange={(e) => e}
          />
          <label htmlFor="name" className="form-label">
            Hãng hàng không
            <span className="star"> *</span>
          </label>

          {/* chooseAirline */}
          {showChooseAirline ? (
            <div className="chooseAirline-box">
              <div
                className="overlay"
                ref={chooseAirlineRef}
                onClick={closeChooseAirlineOption}
              ></div>
              <div className="chooseAirline">
                <div
                  className="chooseAirline-item"
                  onClick={handleChooseAirline}
                >
                  <div className="">
                    <span className="Airlines-name">Bamboo Airways</span>
                  </div>
                  <div className="airline-img">
                    <img
                      src="https://flight.hahalolo.com/assets/image/flight/qh.gif"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="chooseAirline-item"
                  onClick={handleChooseAirline}
                >
                  <div className="">
                    <span className="Airlines-name">Vietnam Airlines</span>
                  </div>
                  <div className="airline-img">
                    <img
                      src="https://flight.hahalolo.com/assets/image/flight/vn.gif"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="chooseAirline-item"
                  onClick={handleChooseAirline}
                >
                  <div className="">
                    <span className="Airlines-name">Vietjet Air</span>
                  </div>
                  <div className="airline-img">
                    <img
                      src="https://flight.hahalolo.com/assets/image/flight/vj.gif"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="chooseAirline-item"
                  onClick={handleChooseAirline}
                >
                  <div className="">
                    <span className="Airlines-name">Vietravel Airlines</span>
                  </div>
                  <div className="airline-img">
                    <img
                      src="https://flight.hahalolo.com/assets/image/flight/vu.gif"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="form-field">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="input-icon"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.00025"
                ></path>
                <path data-name="Line 2219" d="M2 19.299h14.891"></path>
              </g>
            </g>
          </svg>
          <input
            type="text"
            className="form-input"
            placeholder=" "
            value={planeCode}
            onChange={(e) => setPlaneCode(e.target.value)}
          />
          <label htmlFor="name" className="form-label">
            Số hiệu máy bay
          </label>
          <span className="message-error"></span>
        </div>
        <div className="form-field">
          <div
            className="arrow-btn-flight"
            onClick={() => setShowFlyType((e) => !e)}
          >
            <svg
              className="arrow-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="input-icon"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.00025"
                ></path>
                <path data-name="Line 2219" d="M2 19.299h14.891"></path>
              </g>
            </g>
          </svg>
          <input
            type="text"
            className="form-input"
            placeholder=" "
            onClick={() => setShowFlyType((e) => !e)}
            value={flyType}
            onChange={(e) => e}
          />
          <label htmlFor="name" className="form-label">
            Loại hình bay
            <span className="star"> *</span>
          </label>
          <span className="message-error"></span>
          {showFlyType ? (
            <div className="flyType">
              <div
                className="overlay"
                ref={flyTypeRef}
                onClick={closeFLyType}
              ></div>
              <div className="fly-option-lish">
                <span className="option-list-item" onClick={handleFlyType}>
                  Bay thẳng
                </span>
                <span className="option-list-item" onClick={handleFlyType}>
                  Quá cảnh
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="fight-group2">
        <div className="form-field">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="input-icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g data-name="Group 28552" fill="none">
              <path data-name="Rectangle 4592" d="M0 0h24v24H0z"></path>
              <g transform="translate(4 3)" stroke="currentColor">
                <rect
                  data-name="Rectangle 4333"
                  width="16"
                  height="16"
                  rx="1"
                  transform="translate(0 2)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></rect>
                <path
                  data-name="Line 2214"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M0 6h16"
                ></path>
                <path
                  data-name="Line 2215"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 0v3"
                ></path>
                <path
                  data-name="Line 2216"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 0v3"
                ></path>
                <g data-name="Group 25385" transform="translate(2.556 9.145)">
                  <circle
                    data-name="Ellipse 938"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                  ></circle>
                  <circle
                    data-name="Ellipse 939"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                    transform="translate(4.429)"
                  ></circle>
                  <circle
                    data-name="Ellipse 940"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                    transform="translate(9.102)"
                  ></circle>
                  <circle
                    data-name="Ellipse 941"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                    transform="translate(0 4.239)"
                  ></circle>
                  <circle
                    data-name="Ellipse 942"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                    transform="translate(4.429 4.239)"
                  ></circle>
                  <circle
                    data-name="Ellipse 943"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                    transform="translate(9.102 4.239)"
                  ></circle>
                </g>
              </g>
            </g>
          </svg>
          <DatePicker
            selected={Date.parse(departureTime)}
            onChange={(date) => setDepartureTime(date)}
            className="form-input time"
            minDate={new Date()}
            showTimeSelect
            dateFormat="MM/dd/yyyy h:mm aa"
          />
          <label htmlFor="name" className="form-label time">
            Thời gian khởi hành
            <span className="star"> *</span>
          </label>
        </div>
        <div className="form-field">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="input-icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g data-name="Group 28552" fill="none">
              <path data-name="Rectangle 4592" d="M0 0h24v24H0z"></path>
              <g transform="translate(4 3)" stroke="currentColor">
                <rect
                  data-name="Rectangle 4333"
                  width="16"
                  height="16"
                  rx="1"
                  transform="translate(0 2)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></rect>
                <path
                  data-name="Line 2214"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M0 6h16"
                ></path>
                <path
                  data-name="Line 2215"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 0v3"
                ></path>
                <path
                  data-name="Line 2216"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 0v3"
                ></path>
                <g data-name="Group 25385" transform="translate(2.556 9.145)">
                  <circle
                    data-name="Ellipse 938"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                  ></circle>
                  <circle
                    data-name="Ellipse 939"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                    transform="translate(4.429)"
                  ></circle>
                  <circle
                    data-name="Ellipse 940"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                    transform="translate(9.102)"
                  ></circle>
                  <circle
                    data-name="Ellipse 941"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                    transform="translate(0 4.239)"
                  ></circle>
                  <circle
                    data-name="Ellipse 942"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                    transform="translate(4.429 4.239)"
                  ></circle>
                  <circle
                    data-name="Ellipse 943"
                    cx="1.027"
                    cy="1.027"
                    r="1.027"
                    transform="translate(9.102 4.239)"
                  ></circle>
                </g>
              </g>
            </g>
          </svg>
          <DatePicker
            selected={Date.parse(timeLanding)}
            onChange={(date) => setTimeLanding(date)}
            className="form-input time"
            minDate={departureTime}
            showTimeSelect
            dateFormat="MM/dd/yyyy h:mm aa"
          />
          <label htmlFor="name" className="form-label time">
            Thời gian hạ cánh
            <span className="star"> *</span>
          </label>
        </div>
      </div>
      <div className="fight-group3">
        <div className="form-field">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="input-icon"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.00025"
                ></path>
                <path data-name="Line 2219" d="M2 19.299h14.891"></path>
              </g>
            </g>
          </svg>
          <input
            type="text"
            className="form-input"
            placeholder=" "
            onClick={handleTabProvinder1}
            onChange={handleOnchangeInput}
            value={departure}
          />
          <label htmlFor="name" className="form-label">
            Địa điểm khởi hành
            <span className="star"> *</span>
          </label>
          <span className="message-error"></span>
          {tabProvinces === 1 ? (
            <Provinces
              showBoxProvinder={showBoxProvinder}
              setShowBoxProvinder={setShowBoxProvinder}
              onKetqua={(e) =>
                e != null
                  ? (setDeparture(e), setTabProvinces(null))
                  : setTabProvinces(null)
              }
            />
          ) : null}
        </div>
        <div className="form-field">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="input-icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g data-name="Group 28549" fill="none">
              <path data-name="Rectangle 4603" d="M0 0h24v24H0z"></path>
              <g stroke="currentColor">
                <path
                  data-name="Path 18454"
                  d="M19.025 10.8l-5.768.501L9.46 6.728l-1.505.132 2.052 4.73-3.672.323-2.144-2.268-1.282.307 2.366 3.69 7 .205 8.684-.762a.607.607 0 00.516-.834 2.444 2.444 0 00-2.451-1.452z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path data-name="Line 2213" d="M5.847 18.958h13.187"></path>
              </g>
            </g>
          </svg>
          <input
            type="text"
            className="form-input"
            placeholder=" "
            onClick={handleTabProvinder2}
            onChange={handleOnchangeInput}
            value={destination}
          />
          <label htmlFor="name" className="form-label">
            Địa điểm hạ cánh
            <span className="star"> *</span>
          </label>
          <span className="message-error"></span>
          {tabProvinces === 2 ? (
            <Provinces
              showBoxProvinder={showBoxProvinder}
              setShowBoxProvinder={setShowBoxProvinder}
              onKetqua={(e) =>
                e != null
                  ? (setDestination(e), setTabProvinces(null))
                  : setTabProvinces(null)
              }
            />
          ) : null}
        </div>
      </div>
      <div className="fight-group4">
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
            value={numOfTicker}
            onChange={(e) => setNumOfTicket(e.target.value)}
          />
          <label htmlFor="name" className="form-label">
            Số lượng vé
            <span className="star"> *</span>
          </label>
          <span className="message-error"></span>
        </div>
      </div>
      <div className="btn-add">
        <span className="btn-addFight" onClick={handleGetData}>
          Thêm
        </span>
      </div>
    </div>
  );
}

export default AddFlight;
