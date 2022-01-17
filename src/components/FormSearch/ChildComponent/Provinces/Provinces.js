import React, { useRef, useEffect, useCallback, useContext } from 'react';
import { ThemeContext } from '../../../../shared/context/ThemeProvider';
import './Provinces.css';

function Provinces({ showBoxProvinder, setShowBoxProvinder, onKetqua }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleClick = (e, t) => {
    const provin = e.target.innerHTML;
    onKetqua(provin);
    setShowBoxProvinder(false);
  };

  //
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onKetqua(null);
      setShowBoxProvinder(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showBoxProvinder) {
        setShowBoxProvinder(false);
      }
    },
    [setShowBoxProvinder, showBoxProvinder]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showBoxProvinder ? (
        <div
          className={
            theme === 'dark' ? 'background-pro dark' : 'background-pro'
          }
        >
          <div
            className="overlay-pro"
            onClick={closeModal}
            ref={modalRef}
          ></div>
          <div className="provinces-component">
            <div
              className="provinces-iconback"
              onClick={() => setShowBoxProvinder((prev) => !prev)}
            >
              <svg
                data-name="Group 28853"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="provinces-iconback-icon"
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
            <div className="provinces-search">
              <h3 className="provinces-search-title">
                Thành phố hoặc sân bay phổ biến
              </h3>
              <div className="provinces-search-form">
                <div className="provinces-search-lup">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="provinces-icon"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g data-name="Group 28003">
                      <path
                        data-name="Rectangle 4474"
                        fill="none"
                        d="M0 0h24v24H0z"
                      ></path>
                      <g data-name="Group 28211">
                        <g data-name="4">
                          <g data-name="Group 28210">
                            <path
                              data-name="Path 20260"
                              d="M20.83 20.021l-4.647-4.573a7.351 7.351 0 001.965-5A7.514 7.514 0 0010.573 3 7.513 7.513 0 003 10.453a7.513 7.513 0 007.573 7.453 7.616 7.616 0 004.767-1.664l4.665 4.591a.589.589 0 00.824 0 .567.567 0 00.001-.812zm-10.257-3.262a6.358 6.358 0 01-6.408-6.306 6.358 6.358 0 016.408-6.306 6.358 6.358 0 016.408 6.306 6.358 6.358 0 01-6.408 6.306z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="form-field-pro">
                  <input
                    type="text"
                    className="form-input-pro"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="form-label-pro">
                    Điểm khởi hành
                  </label>
                </div>
                <div className="provinces-search-bottom">
                  <svg
                    className="provinces-icon-bot"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7 10l5 5 5-5z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="provinces-menu">
              <ul className="provinces-menu-list">
                <li className="provinces-menu-item-title">Miền Bắc</li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Hà Nội
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Hải Phòng
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Điện Biên Phủ
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Quảng Ninh
                </li>
              </ul>
              <ul className="provinces-menu-list">
                <li className="provinces-menu-item-title">Miền Trung</li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Đà Nẵng
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Nha Trang
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Đà Lạt
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Đà Lạt
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Huế
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Buôn Ma Thuật
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  PleiKu
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Phú Yên
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Thanh Hóa
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Quy Nhơn
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Quảng Nam
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Quảng Bình
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Vinh
                </li>
              </ul>
              <ul className="provinces-menu-list">
                <li className="provinces-menu-item-title">Miền Nam</li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Hồ Chí Minh
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Phú Quốc
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Cần Thơ
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Cà Mau
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Côn Đảo
                </li>
                <li className="provinces-menu-item" onClick={handleClick}>
                  Kiên Giang
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Provinces;
