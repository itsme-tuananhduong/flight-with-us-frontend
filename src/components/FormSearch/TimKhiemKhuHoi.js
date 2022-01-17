import React, { Fragment, useState } from 'react';
import BoxPassenger from './ChildComponent/BoxPassenger';
import Provinces from './ChildComponent/Provinces/Provinces';
import DatePicker from 'react-datepicker';

function TimKhiemKhuHoi() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const [tabProvinces, setTabProvinces] = useState(null);
  const [showBoxProvinder, setShowBoxProvinder] = useState(false);
  const [showBoxPassenger, setShowBoxPassenger] = useState(false);
  const [checkHind, setCheckHind] = useState(false);

  const [passenger, setPassenger] = useState({ adult: 1, child: 0, baby: 0 });
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [timeTab, setTimeTab] = useState('');

  const handleCheckInDate = (e) => {
    setCheckInDate(e);
  };
  const handleCheckOutDate = (e) => {
    setCheckOutDate(e);
  };

  const handleOnchangeInput = (e) => {};
  const handleChuyenDoi = () => {
    const diem1 = departure;
    const diem2 = destination;
    setDeparture(diem2);
    setDestination(diem1);
  };

  const handleData = () => {};
  return (
    <Fragment>
      <div className={'formSearch-main active'}>
        <div className="form-priamry">
          <div className="part1">
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
                value={departure}
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
                      ? (setDeparture(e), setTabProvinces(null))
                      : setTabProvinces(null)
                  }
                />
              ) : null}
            </div>
            <div className="chuyenhuong" onClick={handleChuyenDoi}>
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
                  setShowBoxProvinder((e) => !e), setTabProvinces(2)
                )}
                value={destination}
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
                      ? (setDestination(e), setTabProvinces(null))
                      : setTabProvinces(null)
                  }
                />
              ) : null}
            </div>
          </div>
          <div className="part2">
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
              <div style={{ display: 'flex' }}>
                <DatePicker
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                  className="form-input"
                />
                <DatePicker
                  className="form-input"
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                />
              </div>
              <label htmlFor="name" className="form-label">
                Ngày đi - Ngày đến
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
                type="text"
                className="form-input"
                placeholder=" "
                onChange={handleOnchangeInput}
                value={
                  passenger.adult +
                  ' người lớn, ' +
                  passenger.child +
                  ' trẻ em, ' +
                  passenger.baby +
                  ' em bé '
                }
                onClick={() => setShowBoxPassenger((e) => !e)}
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
          <div className="input-checkbox">
            <input type="checkbox" id="check" />
            <label className="check-label" htmlFor="check">
              Tìm kiếm vé rẻ trong tháng
            </label>
          </div>
          <span className="submit-form-btn" onClick={handleData}>
            Tìm kiếm
          </span>
        </div>
      </div>
    </Fragment>
  );
}

export default TimKhiemKhuHoi;
