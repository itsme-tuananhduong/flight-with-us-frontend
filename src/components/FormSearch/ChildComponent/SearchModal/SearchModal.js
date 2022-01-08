import React, { useRef, useEffect, useCallback, useContext } from 'react';
import { ThemeContext } from '../../../../shared/context/ThemeProvider';

import './SearchModal.css';

function SearchModal({ showModal, setShowModal }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          className={
            theme === 'dark' ? 'modal_container dark' : 'modal_container'
          }
        >
          <div
            className="modal-overlay"
            onClick={closeModal}
            ref={modalRef}
          ></div>
          <div className="modal-content">
            <div className="title">
              <p>Tra cứu đặt chỗ</p>
              <div className="close" onClick={() => setShowModal((e) => !e)}>
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
            <div className="modal-search">
              <div className="form-field-modal">
                <input
                  type="text"
                  className="form-input-modal"
                  placeholder=" "
                />
                <label htmlFor="name" className="form-label-modal">
                  Mã đặt chỗ
                </label>
                <small>
                  Nhập mã đặt chỗ để tra cứu thông tin chuyến bay của bạn
                </small>
              </div>
              <div className="modal-submit">
                <span className="modal-btn">Tìm Kiếm</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SearchModal;
