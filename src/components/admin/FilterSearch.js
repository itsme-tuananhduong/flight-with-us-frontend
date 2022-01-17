import React, { useRef, useState } from 'react';

import axios from 'axios';

import './FilterSearch.css';
function FilterSearch({ showFilter, setShowFilter, filterData }) {
  // const Ariline = [
  //   {
  //     id: '1',
  //     name: ' Vietravel Airlines',
  //     image: 'https://flight.hahalolo.com/assets/image/flight/vu.gif',
  //     status: 'checked',
  //   },
  //   {
  //     id: '2',
  //     name: 'VietNam AriLine',
  //     image: 'https://flight.hahalolo.com/assets/image/flight/vn.gif',
  //     status: 'checked',
  //   },
  //   {
  //     id: '3',
  //     name: ' Bamboo Airways',
  //     image: 'https://flight.hahalolo.com/assets/image/flight/qh.gif',
  //     status: 'checked',
  //   },
  //   {
  //     id: '4',
  //     name: 'Vietjet Air',
  //     image: 'https://flight.hahalolo.com/assets/image/flight/vj.gif',
  //     status: 'checked',
  //   },
  // ];
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setbrand(null);
      setkgb(null);
      setlhb(null);
      setShowFilter(false);
    }
  };

  const ticketClose = (e) => {
    setbrand(null);
    setkgb(null);
    setlhb(null);
    setShowFilter((e) => !e);
  };

  const [brand, setbrand] = useState(null);

  const onBrandChange = (e) => {
    setbrand(e.target.value);
  };

  const [kgb, setkgb] = useState(null);

  const onKgbChange = (e) => {
    setkgb(e.target.value);
  };

  const [lhb, setlhb] = useState(null);

  const onLhbChange = (e) => {
    setlhb(e.target.value);
  };

  const filterHandler = () => {
    filterData(null, brand, kgb, lhb);
    setbrand(null);
    setkgb(null);
    setlhb(null);
  };

  return showFilter ? (
    <div className="FilterSearch">
      <div className="search-overlay" ref={modalRef} onClick={closeModal}></div>
      <div className="box-priamry">
        <div className="search-heading">
          <h4 className="head-title">Lọc Tìm Kiếm</h4>
          <div className="ticket-close" onClick={ticketClose}>
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
        <div className="search-main">
          <div className="main-Airline">
            <h4>Hãng Hàng Không</h4>

            <div className="Airline-list">
              <div className="Airline-list-item" key={1}>
                <div className="input-checkbox">
                  <input
                    type="radio"
                    id="brand1"
                    name="brand"
                    onClick={onBrandChange}
                    value="Vietravel Airlines"
                  />
                  <label htmlFor="brand1" className="label-radio">
                    Vietravel Airlines
                  </label>
                </div>
                <div className="Airline-list-item-img">
                  <img
                    src="https://flight.hahalolo.com/assets/image/flight/vu.gif"
                    alt=""
                  />
                </div>
              </div>
              <div className="Airline-list-item" key={2}>
                <div className="input-checkbox">
                  <input
                    type="radio"
                    id="brand2"
                    name="brand"
                    onClick={onBrandChange}
                    value="Vietnam Airlines"
                  />
                  <label htmlFor="brand2" className="label-radio">
                    Vietnam Airlines
                  </label>
                </div>
                <div className="Airline-list-item-img">
                  <img
                    src="https://flight.hahalolo.com/assets/image/flight/vn.gif"
                    alt=""
                  />
                </div>
              </div>
              <div className="Airline-list-item" key={3}>
                <div className="input-checkbox">
                  <input
                    type="radio"
                    id="brand3"
                    name="brand"
                    onClick={onBrandChange}
                    value="Bamboo Airways"
                  />
                  <label htmlFor="brand3" className="label-radio">
                    Bamboo Airways
                  </label>
                </div>
                <div className="Airline-list-item-img">
                  <img
                    src="https://flight.hahalolo.com/assets/image/flight/qh.gif"
                    alt=""
                  />
                </div>
              </div>
              <div className="Airline-list-item" key={4}>
                <div className="input-checkbox">
                  <input
                    type="radio"
                    id="brand4"
                    name="brand"
                    onClick={onBrandChange}
                    value="Vietjet Air"
                  />
                  <label htmlFor="brand4" className="label-radio">
                    Vietjet Air
                  </label>
                </div>
                <div className="Airline-list-item-img">
                  <img
                    src="https://flight.hahalolo.com/assets/image/flight/vj.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="main-TimeSlot">
            <h4>Khung Giờ Bay</h4>
            <div className="filter-time">
              <div className="filter-time-list">
                <div className="filter-time-list-item">
                  <div className="input-checkbox">
                    <input
                      type="radio"
                      id="time1"
                      name="time"
                      onClick={onKgbChange}
                      value="0, 6"
                    />
                    <label htmlFor="time1" className="label-radio">
                      {' '}
                      0:00 - 6:00
                    </label>
                  </div>
                </div>
                <div className="filter-time-list-item">
                  {' '}
                  <div className="input-checkbox">
                    <input
                      type="radio"
                      id="time2"
                      name="time"
                      onClick={onKgbChange}
                      value="6, 12"
                    />
                    <label htmlFor="time2" className="label-radio">
                      {' '}
                      6:01 - 12:00
                    </label>
                  </div>
                </div>
                <div className="filter-time-list-item">
                  {' '}
                  <div className="input-checkbox">
                    <input
                      type="radio"
                      id="time3"
                      name="time"
                      onClick={onKgbChange}
                      value="12, 18"
                    />
                    <label htmlFor="time3" className="label-radio">
                      {' '}
                      12:01 - 18:00
                    </label>
                  </div>
                </div>
                <div className="filter-time-list-item">
                  <div className="input-checkbox">
                    <input
                      type="radio"
                      id="time4"
                      name="time"
                      onClick={onKgbChange}
                      value="18, 24"
                    />
                    <label htmlFor="time4" className="label-radio">
                      {' '}
                      18:01 - 23:59
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="way-title">Số Điểm Dừng</h4>
            <div className="filter-way">
              <div className="filter-way-list">
                <div className="filter-way-list-item">
                  <div className="input-checkbox">
                    <input
                      type="radio"
                      id="way1"
                      name="way"
                      onClick={onLhbChange}
                      value="Bay thẳng"
                    />
                    <label htmlFor="way1" className="label-radio">
                      Bay thẳng
                    </label>
                  </div>
                </div>
                <div className="filter-way-list-item">
                  <div className="input-checkbox">
                    <input
                      type="radio"
                      id="way2"
                      name="way"
                      onClick={onLhbChange}
                      value="Quá cảnh"
                    />
                    <label htmlFor="way2" className="label-radio">
                      Quá cảnh
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-filter-flight">
          <span className="btn-filter-click" onClick={filterHandler}>
            Lọc
          </span>
        </div>
      </div>
    </div>
  ) : null;
}

export default FilterSearch;
