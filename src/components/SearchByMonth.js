import React, { useState, useContext, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import useCalendar from '../shared/hooks/useCalendar';
import { ThemeContext } from '../shared/context/ThemeProvider';
import TicketBox from '../components/TicketBox';
import FlightInfoBox from '../components/FlightInfoBox';
import Modal from './BoxDatVe/ChildComponent/Modal';

import './SearchByMonth.css';
function SearchByMonth() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [showModal, setShowModal] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [showSort, setShowSort] = useState(false);
  const [showChooseAirline, setShowChooseAirline] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [displaySort, setDisplaySort] = useState(false);
  const [activeDay, setActiveDay] = useState(null);
  const [typeSort, setTypeSort] = useState('Mặc Định');
  const [chooseAirline, setChooseAirline] = useState('Tất Cả');

  // toggle boxSort & chooseAirline
  const sortRef = useRef();
  const closeSortOption = (e) => {
    if (sortRef.current === e.target) {
      setShowSort(false);
    }
  };
  const chooseAirlineRef = useRef();
  const closeChooseAirlineOption = (e) => {
    if (chooseAirlineRef.current === e.target) {
      setShowChooseAirline(false);
    }
  };
  // get value
  const handleChecked = () => {
    let airLine = '';
    if (checked1) {
      airLine += 'Vietraval Airlines ';
    }
    if (checked2) {
      airLine += 'VietNam Airlines ';
    }
    if (checked3) {
      airLine += 'Bamboo Airways ';
    }
    if (checked4) {
      airLine += 'Vietjet Air ';
    }
    if (airLine === '') {
      airLine = 'Tất Cả';
    }
    setChooseAirline(airLine);
  };
  useEffect(() => {
    setShowChooseAirline(false);
  }, [chooseAirline, setChooseAirline]);

  useEffect(() => {
    setChecked1(checkAll);
    setChecked2(checkAll);
    setChecked3(checkAll);
    setChecked4(checkAll);
  }, [checkAll]);

  useEffect(() => {
    setShowSort(false);
  }, [typeSort]);
  const handleTypeSort = (e) => {
    setTypeSort(e.target.innerHTML);
  };
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();
  const dateClickHandler = (date) => {
    setActiveDay(date);
    setDisplaySort(true);
  };
  function compare(dateTimeA, dateTimeB) {
    var momentA = moment(dateTimeA, 'DD/MM/YYYY');
    var momentB = moment(dateTimeB, 'DD/MM/YYYY');
    if (momentA > momentB) return 1;
    else if (momentA < momentB) return -1;
    else return 0;
  }
  const api = [
    {
      day: '1-1-2022',
      image: 'https://flight.hahalolo.com/assets/image/flight/qh.gif',
      price: '632.530',
    },
    {
      day: '2-1-2022',
      image: 'https://flight.hahalolo.com/assets/image/flight/vj.gif',
      price: '632.530',
    },
    {
      day: '3-1-2022',
      image: 'https://flight.hahalolo.com/assets/image/flight/vu.gif',
      price: '632.530',
    },
    {
      day: '4-1-2022',
      image: 'https://flight.hahalolo.com/assets/image/flight/vj.gif',
      price: '632.530',
    },
    {
      day: '29-12-2021',
      image: 'https://flight.hahalolo.com/assets/image/flight/qh.gif',
      price: '632.530',
    },
    {
      day: '6-1-2022',
      image: 'https://flight.hahalolo.com/assets/image/flight/vu.gif',
      price: '632.530',
    },
    {
      day: '31-12-2021',
      image: 'https://flight.hahalolo.com/assets/image/flight/qh.gif',
      price: '632.530',
    },
    {
      day: '8-1-2022',
      image: 'https://flight.hahalolo.com/assets/image/flight/vj.gif',
      price: '632.530',
    },
    {
      day: '9-1-2022',
      image: 'https://flight.hahalolo.com/assets/image/flight/vu.gif',
      price: '632.530',
    },
    {
      day: '10-1-2022',
      image: 'https://flight.hahalolo.com/assets/image/flight/vj.gif',
      price: '632.530',
    },
    {
      day: '11-1-2022',
      image: 'https://flight.hahalolo.com/assets/image/flight/qh.gif',
      price: '632.530',
    },
    {
      day: '12-1-2022',
      image: 'https://flight.hahalolo.com/assets/image/flight/vu.gif',
      price: '632.530',
    },
  ];
  const getValueDay = (x, y) => {
    return x.filter((x) => x.day === y);
  };
  return (
    <div
      className={
        theme === 'dark'
          ? 'SearchByMonth-container dark'
          : 'SearchByMonth-container'
      }
    >
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="SearchByMonth-header">
        <div className="header-content">
          <p>Kết quả tìm kiếm cho "chuyến bay một chiều"</p>
          <div className="header-user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              className="header-icon-user"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
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

        <div className="header-btn" onClick={() => setShowModal((e) => !e)}>
          <span>Thay đổi tìm kiếm</span>
        </div>
      </div>
      <div className="container-main">
        <div className="SearchByMonth-main">
          <div className="main-flight">
            <h4 className="main-flight-title">Chuyến bay</h4>
            <span className="main-flight-province">
              Đà Nẵng (DAD) - Hồ Chí Minh (SGN)
            </span>
            <p className="main-flight-time">Thứ Sáu, 31/12/2021</p>
          </div>
          <div className="main-search">
            <div className="inputInformation">
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
                      <path
                        data-name="Line 2213"
                        d="M5.847 18.958h13.187"
                      ></path>
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
                  Chọn hãng hàng không
                </label>
                <span className="message-error"></span>
                {/* choose airline */}
                {showChooseAirline ? (
                  <div className="chooseAirline-box">
                    <div
                      className="overlay"
                      ref={chooseAirlineRef}
                      onClick={closeChooseAirlineOption}
                    ></div>
                    <div className="chooseAirline">
                      <div className="checkAll">
                        {checkAll ? (
                          <span onClick={() => setCheckAll(false)}>
                            Hủy chọn tất cả
                          </span>
                        ) : (
                          <span onClick={() => setCheckAll(true)}>
                            chọn tất cả
                          </span>
                        )}
                      </div>
                      <div className="chooseAirline-item">
                        <div className="input-checkbox">
                          <input
                            type="checkbox"
                            id="check"
                            onChange={() => setChecked1((pre) => !pre)}
                            checked={checked1}
                          />
                          <label htmlFor="check" className="label-checkbox">
                            Vietravel Airlines
                          </label>
                        </div>
                        <div className="airline-img">
                          <img
                            src="https://flight.hahalolo.com/assets/image/flight/vu.gif"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="chooseAirline-item">
                        <div className="input-checkbox">
                          <input
                            type="checkbox"
                            id="check2"
                            onChange={() => setChecked2((pre) => !pre)}
                            checked={checked2}
                          />
                          <label className="label-checkbox" htmlFor="check2">
                            Vietnam Airlines
                          </label>
                        </div>
                        <div className="airline-img">
                          <img
                            src="https://flight.hahalolo.com/assets/image/flight/vn.gif"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="chooseAirline-item">
                        <div className="input-checkbox">
                          <input
                            type="checkbox"
                            id="check3"
                            onChange={() => setChecked3((pre) => !pre)}
                            checked={checked3}
                          />
                          <label className="label-checkbox" htmlFor="check3">
                            Bamboo Airways
                          </label>
                        </div>
                        <div className="airline-img">
                          <img
                            src="https://flight.hahalolo.com/assets/image/flight/qh.gif"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="chooseAirline-item">
                        <div className="input-checkbox">
                          <input
                            type="checkbox"
                            id="check4"
                            onChange={() => setChecked4((pre) => !pre)}
                            checked={checked4}
                          />
                          <label className="label-checkbox" htmlFor="check4">
                            Vietjet Air
                          </label>
                        </div>
                        <div className="airline-img">
                          <img
                            src="https://flight.hahalolo.com/assets/image/flight/vj.gif"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="btn-chooseAirline">
                        <span className="btn-filter" onClick={handleChecked}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            className="filter-icon"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <g data-name="Group 28546">
                              <path
                                data-name="Rectangle 4593"
                                fill="none"
                                d="M0 0h24v24H0z"
                              ></path>
                              <g data-name="Group 28534">
                                <path
                                  data-name="Path 20368"
                                  d="M10.125 21a.367.367 0 01-.185-.049.375.375 0 01-.191-.326v-7.576a1.124 1.124 0 00-.378-.841L3.628 7.106A1.878 1.878 0 013 5.7V4.125A1.126 1.126 0 014.125 3h15.75A1.126 1.126 0 0121 4.125V5.7a1.878 1.878 0 01-.629 1.406l-5.743 5.1a1.124 1.124 0 00-.378.84v4.9a1.13 1.13 0 01-.546.965l-3.387 2.035a.366.366 0 01-.192.054zm-6-17.25a.376.376 0 00-.375.375V5.7a1.126 1.126 0 00.376.844l5.744 5.1a1.878 1.878 0 01.63 1.4v6.914l2.819-1.69a.379.379 0 00.182-.322v-4.9a1.877 1.877 0 01.63-1.4l5.743-5.1a1.129 1.129 0 00.376-.846V4.125a.376.376 0 00-.375-.375z"
                                  stroke="currentColor"
                                  strokeWidth="0.3"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          Lọc
                        </span>
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
                      <g
                        data-name="Group 25385"
                        transform="translate(2.556 9.145)"
                      >
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
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="form-input"
                  minDate={new Date()}
                />
                <label htmlFor="name" className="form-label">
                  Chọn Tháng
                </label>
              </div>
              {displaySort ? (
                <div className="Sort">
                  <span className="Sort-text">Sắp xếp theo: </span>
                  <span
                    className="display-Sort"
                    onClick={() => setShowSort((pre) => !pre)}
                  >
                    {typeSort}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="sort-icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <g data-name="Group 28796">
                        <path
                          data-name="Rectangle 4596"
                          fill="none"
                          d="M0 0h24v24H0z"
                        ></path>
                        <g data-name="Group 28778">
                          <path
                            data-name="Path 20527"
                            d="M7 10l5 5 5-5z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  {/* sort option */}
                  {showSort ? (
                    <div className="BoxThoiGian">
                      <div
                        className="overlay"
                        ref={sortRef}
                        onClick={closeSortOption}
                      ></div>
                      <div className="option-lish-sort">
                        <span
                          className="option-lish-item"
                          onClick={handleTypeSort}
                        >
                          Giá tăng dần
                        </span>
                        <span
                          className="option-lish-item"
                          onClick={handleTypeSort}
                        >
                          Giá giảm dần
                        </span>
                        <span
                          className="option-lish-item"
                          onClick={handleTypeSort}
                        >
                          Giá khởi hành sớm nhất
                        </span>
                        <span
                          className="option-lish-item"
                          onClick={handleTypeSort}
                        >
                          Giá khởi hành muộn nhất
                        </span>
                        <span
                          className="option-lish-item"
                          onClick={handleTypeSort}
                        >
                          Giá hạ cánh sớm nhất
                        </span>
                        <span
                          className="option-lish-item"
                          onClick={handleTypeSort}
                        >
                          Giá hạ cánh muộn nhất
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
            {/* hiện thị các ngày trong tháng */}
            <div className="Calendar-container">
              <div className="calendar">
                <div className="calendar-heading">
                  <div className="calendar-button prev" onClick={getPrevMonth}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      className="button-icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <g data-name="Group 28852">
                        <path
                          data-name="Rectangle 4424"
                          fill="none"
                          d="M0 24V0h24v24z"
                        ></path>
                        <g data-name="Group 27961">
                          <path
                            data-name="Path 20155"
                            d="M9.098 11.761L14.759 6.1a.34.34 0 01.48.48L9.82 12l5.419 5.419a.338.338 0 010 .481.342.342 0 01-.239.1.331.331 0 01-.239-.1L9.1 12.239a.338.338 0 01-.002-.478z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="calendar-button next" onClick={getNextMonth}>
                    <svg
                      data-name="Group 28853"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      className="button-icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        data-name="Rectangle 4424"
                        fill="none"
                        d="M0 24V0h24v24z"
                      ></path>
                      <g data-name="Group 27961">
                        <path
                          data-name="Path 20155"
                          d="M15.241 11.761L9.58 6.1a.34.34 0 00-.48.48L14.519 12 9.1 17.419a.338.338 0 000 .48.342.342 0 00.239.1.331.331 0 00.239-.1l5.661-5.66a.338.338 0 00.002-.478z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="header-title">
                    {`${
                      monthNames[selectedDate.getMonth()]
                    } - ${selectedDate.getFullYear()}`}
                  </p>
                </div>
                <table className="calendar-table">
                  <thead className="table-head">
                    <tr>
                      {daysShort.map((day) => (
                        <th key={day}>{day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    {Object.values(calendarRows).map((cols) => {
                      return (
                        <tr key={cols[0].date}>
                          {cols.map((col) =>
                            compare(col.date, todayFormatted) >= 0 ? (
                              <td
                                key={col.date}
                                className={`${col.classes} td-active`}
                                onClick={() => dateClickHandler(col.date)}
                              >
                                {getValueDay(api, col.date)[0] ? (
                                  <div
                                    className={
                                      activeDay === col.date
                                        ? 'cell-choice active checked'
                                        : 'cell-choice active'
                                    }
                                  >
                                    <div className="cell-logo">
                                      <span>{col.value}</span>
                                      <img
                                        src={
                                          getValueDay(api, col.date)[0].image
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <span>
                                      {getValueDay(api, col.date)[0].price} ₫
                                    </span>
                                  </div>
                                ) : (
                                  <div className="cell-choice disable">
                                    {/* <div className='cell-logo'> */}
                                    <span>{col.value}</span>
                                    {/* </div> */}
                                  </div>
                                )}
                              </td>
                            ) : (
                              <td
                                key={col.date}
                                className={`${col.classes} non-cursor`}
                                // onClick={() => dateClickHandler(col.date)}
                              >
                                <div className="cell-choice">
                                  <span>{col.value}</span>
                                </div>
                              </td>
                            )
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Hop ve is here */}
            <div className="ticket-box-month">
              <TicketBox />
            </div>

            {/* footer */}
            <div className="main-final">
              <p className="final-title">Giá vé rẻ nhất bao gồm thuế và phí</p>
              <div className="final-note">
                <span className="final-note-text">Chú thích : </span>
                <div className="box-min">
                  <div className="box-color min"></div>
                  <span className="price-min">Giá thấp nhất</span>
                </div>
                <div className="box-max">
                  <div className="box-color max"></div>
                  <span className="price-max">Giá bạn chọn</span>
                </div>
              </div>
              <div className="final-suggest">
                (Sau khi chọn giá, quý khách vui lòng nhấn
                <span> Tiếp tục </span>để đặt vé)
              </div>
            </div>
          </div>
        </div>
        {/* infomation flight is here */}
        <div className="info-flight">
          <FlightInfoBox />
          <button className="search-month-continue">Tiếp tục</button>
        </div>
      </div>
    </div>
  );
}

export default SearchByMonth;
