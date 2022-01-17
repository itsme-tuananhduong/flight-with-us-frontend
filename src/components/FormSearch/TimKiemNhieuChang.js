import React, { Fragment, useState } from 'react';
import BoxPassenger from './ChildComponent/BoxPassenger';
import Provinces from './ChildComponent/Provinces/Provinces';
import DatePicker from 'react-datepicker';

function TimKiemNhieuChang() {
  const [tabProvinces, setTabProvinces] = useState(null);
  const [showBoxProvinder, setShowBoxProvinder] = useState(false);
  const [showBoxPassenger, setShowBoxPassenger] = useState(false);
  const [checkAddflight, setCheckAddflight] = useState(false);
  const [passenger, setPassenger] = useState({ adult: 1, child: 0, baby: 0 });
  const [checkHind, setCheckHind] = useState(false);
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [startDate3, setStartDate3] = useState(new Date());

  const [departure1, setDeparture1] = useState('');
  const [departure2, setDeparture2] = useState('');
  const [departure3, setDeparture3] = useState('');

  const [destination1, setDestination1] = useState('');
  const [destination2, setDestination2] = useState('');
  const [destination3, setDestination3] = useState('');

  const [timeTab1, setTimeTab1] = useState('');
  const [timeTab2, setTimeTab2] = useState('');
  const [timeTab3, setTimeTab3] = useState('');

  const handleOnchangeInput = (e) => {};
  const handleChuyenDoiTab1 = () => {
    const diem1 = departure1;
    const diem2 = destination1;
    setDeparture1(diem2);
    setDestination1(diem1);
  };
  const handleChuyenDoiTab2 = () => {
    const diem1 = departure2;
    const diem2 = destination2;
    setDeparture2(diem2);
    setDestination2(diem1);
  };
  const handleChuyenDoiTab3 = () => {
    const diem1 = departure3;
    const diem2 = destination3;
    setDeparture3(diem2);
    setDestination3(diem1);
  };

  // gửi dữ liệu
  const handleData = () => {
    const data = {
      one: { departure1, destination1, timeTab1 },
      two: { departure2, destination2, timeTab2 },
      three: { departure3, destination3, timeTab3 },
      passenger,
    };
  };
  return (
    <Fragment>
      <div className={'formSearch-main active'}>
        <div className="form-priamry1">
          <div className="part3">
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
                placeholder="Nhập địa điểm"
                onChange={handleOnchangeInput}
                onClick={() => (
                  setShowBoxProvinder((e) => !e), setTabProvinces(1)
                )}
                value={departure1}
              />
              <label htmlFor="name" className="form-label">
                Điểm khởi hành
              </label>
              <span className="message-error"></span>
              {tabProvinces === 1 ? (
                <Provinces
                  showBoxProvinder={showBoxProvinder}
                  setShowBoxProvinder={setShowBoxProvinder}
                  onKetqua={(e) =>
                    e != null
                      ? (setDeparture1(e), setTabProvinces(null))
                      : setTabProvinces(null)
                  }
                />
              ) : null}
            </div>
            <div className="chuyenhuong" onClick={handleChuyenDoiTab1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="chuyenhuong-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28551">
                  <path
                    data-name="Rectangle 4589"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g data-name="Group 25386">
                    <path
                      data-name="Path 18455"
                      d="M21.58 8.577L15.754 3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      data-name="Path 18456"
                      d="M2.833 7.946h18.334a.833.833 0 110 1.665H2.833a.833.833 0 110-1.665z"
                    ></path>
                  </g>
                  <g data-name="Group 25387">
                    <path
                      data-name="Path 18457"
                      d="M2.421 15.71l5.826 5.577"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      data-name="Path 18458"
                      d="M2.833 14.675h18.334a.833.833 0 01.833.832.833.833 0 01-.833.832H2.833A.833.833 0 012 15.507a.833.833 0 01.833-.832z"
                    ></path>
                  </g>
                </g>
              </svg>
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
                onChange={handleOnchangeInput}
                placeholder="Nhập địa điểm"
                onClick={() => (
                  setShowBoxProvinder((e) => !e), setTabProvinces(2)
                )}
                value={destination1}
              />
              <label htmlFor="name" className="form-label">
                Điểm đến
              </label>
              <span className="message-error"></span>
              {tabProvinces === 2 ? (
                <Provinces
                  showBoxProvinder={showBoxProvinder}
                  setShowBoxProvinder={setShowBoxProvinder}
                  onKetqua={(e) =>
                    e != null
                      ? (setDestination1(e), setTabProvinces(null))
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
              {/* handleDate */}
              <DatePicker
                selected={startDate1}
                onChange={(date) => setStartDate1(date)}
                className="form-input"
                minDate={new Date()}
              />
              <label htmlFor="name" className="form-label">
                Ngày đi
              </label>
            </div>
          </div>
          <div className="part3">
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
                placeholder="Nhập địa điểm"
                onChange={handleOnchangeInput}
                onClick={() => (
                  setShowBoxProvinder((e) => !e), setTabProvinces(3)
                )}
                value={departure2}
              />
              <label htmlFor="name" className="form-label">
                Điểm khởi hành
              </label>
              <span className="message-error"></span>
              {tabProvinces === 3 ? (
                <Provinces
                  showBoxProvinder={showBoxProvinder}
                  setShowBoxProvinder={setShowBoxProvinder}
                  onKetqua={(e) =>
                    e != null
                      ? (setDeparture2(e), setTabProvinces(null))
                      : setTabProvinces(null)
                  }
                />
              ) : null}
            </div>
            <div className="chuyenhuong" onClick={handleChuyenDoiTab2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="chuyenhuong-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g data-name="Group 28551">
                  <path
                    data-name="Rectangle 4589"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g data-name="Group 25386">
                    <path
                      data-name="Path 18455"
                      d="M21.58 8.577L15.754 3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      data-name="Path 18456"
                      d="M2.833 7.946h18.334a.833.833 0 110 1.665H2.833a.833.833 0 110-1.665z"
                    ></path>
                  </g>
                  <g data-name="Group 25387">
                    <path
                      data-name="Path 18457"
                      d="M2.421 15.71l5.826 5.577"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      data-name="Path 18458"
                      d="M2.833 14.675h18.334a.833.833 0 01.833.832.833.833 0 01-.833.832H2.833A.833.833 0 012 15.507a.833.833 0 01.833-.832z"
                    ></path>
                  </g>
                </g>
              </svg>
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
                placeholder="Nhập địa điểm"
                onChange={handleOnchangeInput}
                onClick={() => (
                  setShowBoxProvinder((e) => !e), setTabProvinces(4)
                )}
                value={destination2}
              />
              <label htmlFor="name" className="form-label">
                Điểm đến
              </label>
              <span className="message-error"></span>
              {tabProvinces === 4 ? (
                <Provinces
                  showBoxProvinder={showBoxProvinder}
                  setShowBoxProvinder={setShowBoxProvinder}
                  onKetqua={(e) =>
                    e != null
                      ? (setDestination2(e), setTabProvinces(null))
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
              {/* handleDate */}
              <DatePicker
                selected={startDate2}
                onChange={(date) => setStartDate2(date)}
                className="form-input"
                minDate={new Date()}
              />
              <label htmlFor="name" className="form-label">
                Ngày đi
              </label>
            </div>
          </div>
          {checkAddflight ? (
            <div className="part3">
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
                  placeholder="Nhập địa điểm"
                  onChange={handleOnchangeInput}
                  onClick={() => (
                    setShowBoxProvinder((e) => !e), setTabProvinces(5)
                  )}
                  value={departure3}
                />
                <label htmlFor="name" className="form-label">
                  Điểm khởi hành
                </label>
                <span className="message-error"></span>
                {tabProvinces === 5 ? (
                  <Provinces
                    showBoxProvinder={showBoxProvinder}
                    setShowBoxProvinder={setShowBoxProvinder}
                    onKetqua={(e) =>
                      e != null
                        ? (setDeparture3(e), setTabProvinces(null))
                        : setTabProvinces(null)
                    }
                  />
                ) : null}
              </div>
              <div className="chuyenhuong" onClick={handleChuyenDoiTab3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="chuyenhuong-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g data-name="Group 28551">
                    <path
                      data-name="Rectangle 4589"
                      fill="none"
                      d="M0 0h24v24H0z"
                    ></path>
                    <g data-name="Group 25386">
                      <path
                        data-name="Path 18455"
                        d="M21.58 8.577L15.754 3"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        data-name="Path 18456"
                        d="M2.833 7.946h18.334a.833.833 0 110 1.665H2.833a.833.833 0 110-1.665z"
                      ></path>
                    </g>
                    <g data-name="Group 25387">
                      <path
                        data-name="Path 18457"
                        d="M2.421 15.71l5.826 5.577"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        data-name="Path 18458"
                        d="M2.833 14.675h18.334a.833.833 0 01.833.832.833.833 0 01-.833.832H2.833A.833.833 0 012 15.507a.833.833 0 01.833-.832z"
                      ></path>
                    </g>
                  </g>
                </svg>
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
                  onChange={handleOnchangeInput}
                  placeholder="Nhập địa điểm"
                  onClick={() => (
                    setShowBoxProvinder((e) => !e), setTabProvinces(6)
                  )}
                  value={destination3}
                />
                <label htmlFor="name" className="form-label">
                  Điểm đến
                </label>
                <span className="message-error"></span>
                {tabProvinces === 6 ? (
                  <Provinces
                    showBoxProvinder={showBoxProvinder}
                    setShowBoxProvinder={setShowBoxProvinder}
                    onKetqua={(e) =>
                      e != null
                        ? (setDestination3(e), setTabProvinces(null))
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
                {/* handleDate */}
                <DatePicker
                  selected={startDate3}
                  onChange={(date) => setStartDate3(date)}
                  className="form-input"
                  minDate={new Date()}
                />
                <label htmlFor="name" className="form-label">
                  Ngày đi
                </label>
              </div>
            </div>
          ) : null}
          <div className="part4">
            <div className="part4-btn">
              <span
                className={
                  checkAddflight ? 'btn-part4-1' : 'btn-part4-1 active'
                }
                onClick={() => setCheckAddflight(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="btn-part4-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g data-name="Group 28338">
                    <path
                      data-name="Rectangle 4400"
                      fill="none"
                      d="M0 0h24v24H0z"
                    ></path>
                    <g data-name="Group 28328">
                      <g data-name="Group 28133">
                        <path
                          data-name="Path 20233"
                          d="M21.219 11.219h-8.438V2.781a.781.781 0 10-1.562 0v8.438H2.781a.781.781 0 100 1.562h8.438v8.438a.781.781 0 001.562 0v-8.438h8.438a.781.781 0 000-1.562z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                Thêm chuyến bay
              </span>
              <span
                className={
                  checkAddflight ? 'btn-part4-2 active' : 'btn-part4-2'
                }
                onClick={() => setCheckAddflight(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="btn-part4-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g data-name="Group 28553">
                    <path
                      data-name="Rectangle 4591"
                      fill="none"
                      d="M0 0h24v24H0z"
                    ></path>
                    <g data-name="Group 28538">
                      <g data-name="Group 28537">
                        <path
                          data-name="Path 20372"
                          d="M6.724 5.968a7.969 7.969 0 0110.364-.274l-2.373.09a.552.552 0 00.02 1.1h.02l3.643-.135a.55.55 0 00.531-.552v-.061l-.135-3.6a.552.552 0 10-1.1.041l.086 2.26a9.063 9.063 0 00-11.794.319 9.079 9.079 0 00-2.728 8.871.549.549 0 00.535.421.478.478 0 00.131-.016.552.552 0 00.4-.666 7.976 7.976 0 012.4-7.798z"
                        ></path>
                        <path
                          data-name="Path 20373"
                          d="M21.03 9.979a.551.551 0 10-1.07.262 7.966 7.966 0 01-12.827 8.013l2.4-.217a.552.552 0 00-.1-1.1l-3.63.327a.551.551 0 00-.5.6l.327 3.633a.55.55 0 00.547.5.2.2 0 00.049 0 .551.551 0 00.5-.6l-.2-2.211a9 9 0 005.239 2c.155.008.31.012.461.012a9.072 9.072 0 008.8-11.217z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                Thiết lập lại
              </span>
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
                <g data-name="Group 28297">
                  <path
                    data-name="Rectangle 4426"
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <g data-name="Group 12553">
                    <g data-name="Path 18204">
                      <path
                        data-name="Path 20201"
                        d="M9.112 11.943c-.077 0-.154 0-.232-.009a3.024 3.024 0 01-2.788-3.218V7.208a2.551 2.551 0 010-.414 3.022 3.022 0 016.027.455v1.485a2.53 2.53 0 010 .412 3.022 3.022 0 01-3.009 2.8zM9.104 5.09a1.929 1.929 0 00-1.92 1.783 2.011 2.011 0 000 .289V8.772a1.928 1.928 0 003.846.289 2.023 2.023 0 000-.289V7.204a1.946 1.946 0 00-.46-1.443A1.911 1.911 0 009.252 5.1c-.05-.004-.099-.01-.148-.01zM6.639 8.735z"
                      ></path>
                    </g>
                    <g data-name="Ellipse 822">
                      <path
                        data-name="Path 20202"
                        d="M15.743 9.805a2.652 2.652 0 01-2.6-2.692 2.605 2.605 0 115.208 0 2.652 2.652 0 01-2.608 2.692zm0-4.291a1.558 1.558 0 00-1.51 1.6 1.513 1.513 0 103.021 0 1.558 1.558 0 00-1.511-1.6z"
                      ></path>
                    </g>
                    <g data-name="Path 18205">
                      <path
                        data-name="Path 20203"
                        d="M16.594 17.914a.547.547 0 110-1.094h4.031a.3.3 0 00.276-.342 4.46 4.46 0 00-4.321-3.715 4.063 4.063 0 00-2.552.863.547.547 0 11-.664-.869 5.336 5.336 0 013.219-1.088h.007a5.556 5.556 0 015.39 4.623 1.383 1.383 0 01-1.12 1.6 1.414 1.414 0 01-.226.022z"
                      ></path>
                    </g>
                    <g data-name="Path 18206">
                      <path
                        data-name="Path 20204"
                        d="M3.378 20.185A1.4 1.4 0 012 18.747a1.26 1.26 0 01.016-.168 7.251 7.251 0 017.048-6.355h.019a7.255 7.255 0 017.049 6.374 1.372 1.372 0 01-.257 1.02 1.388 1.388 0 01-.916.552 1.673 1.673 0 01-.178.016zm5.7-6.868a6.159 6.159 0 00-5.978 5.41.338.338 0 00.079.27.308.308 0 00.214.1h11.374a.316.316 0 00.226-.122.3.3 0 00.055-.225 6.162 6.162 0 00-5.975-5.432z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <input
                value={
                  passenger.adult +
                  ' người lớn, ' +
                  passenger.child +
                  ' trẻ em, ' +
                  passenger.baby +
                  ' em bé '
                }
                onClick={() => setShowBoxPassenger((e) => !e)}
                type="text"
                className="form-input"
                placeholder=" "
                onChange={handleOnchangeInput}
              />
              <label htmlFor="name" className="form-label over">
                Số hành khách
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="hanhkhach-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                onMouseOver={() => setCheckHind(true)}
                onMouseOut={() => setCheckHind(false)}
              >
                <g data-name="Group 29249">
                  <g data-name="Group 29248">
                    <g data-name="Group 29032">
                      <path
                        data-name="Rectangle 4657"
                        fill="none"
                        d="M0 0h24v24H0z"
                      ></path>
                    </g>
                  </g>
                  <g
                    data-name="Component 7 \u2013 1"
                    transform="translate(3 3)"
                  >
                    <circle
                      data-name="Ellipse 1 copy 2"
                      cx="9"
                      cy="9"
                      r="9"
                    ></circle>
                    <text
                      data-name="?"
                      transform="translate(12.413 14)"
                      fill="#fff"
                      fontSize="15"
                      fontFamily="Roboto-Medium, Roboto"
                      fontWeight="500"
                    >
                      <tspan x="-7.295" y="0">
                        ?
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
              {checkHind ? (
                <div className="goiy">
                  <span>
                    Số em bé không được nhiều hơn số hành khách người lớn
                  </span>
                </div>
              ) : null}
              <BoxPassenger
                showBoxPassenger={showBoxPassenger}
                setShowBoxPassenger={setShowBoxPassenger}
                onKetqua={(e) => setPassenger(e)}
              />
            </div>
          </div>
        </div>
        <div className="submit-form">
          <span className="submit-form-btn" onClick={handleData}>
            Tìm kiếm
          </span>
        </div>
      </div>
    </Fragment>
  );
}

export default TimKiemNhieuChang;
