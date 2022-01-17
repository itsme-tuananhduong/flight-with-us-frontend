import React, { useRef, useEffect, useCallback } from 'react';

function BoxThoiGian({ showBoxThoiGian, setShowBoxThoiGian, ketqua }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowBoxThoiGian(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showBoxThoiGian) {
        setShowBoxThoiGian(false);
      }
    },
    [setShowBoxThoiGian, showBoxThoiGian]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showBoxThoiGian ? (
        <div className="BoxThoiGian">
          <div className="overlay" onClick={closeModal} ref={modalRef}></div>
          <div className="option-lish-time">
            <span
              className="option-lish-item"
              onClick={() => {
                return ketqua(0), setShowBoxThoiGian(false);
              }}
            >
              Tất Cả
            </span>
            <span
              className="option-lish-item"
              onClick={() => {
                return ketqua(10), setShowBoxThoiGian(false);
              }}
            >
              10 Ngày Trước
            </span>
            <span
              className="option-lish-item"
              onClick={() => {
                return ketqua(20), setShowBoxThoiGian(false);
              }}
            >
              {' '}
              20 Ngày Trước
            </span>
            <span
              className="option-lish-item"
              onClick={() => {
                return ketqua(30), setShowBoxThoiGian(false);
              }}
            >
              30 Ngày Trước
            </span>
            <span
              className="option-lish-item"
              onClick={() => {
                return ketqua(60), setShowBoxThoiGian(false);
              }}
            >
              60 Ngày Trước
            </span>
            <span
              className="option-lish-item"
              onClick={() => {
                return ketqua(9), setShowBoxThoiGian(false);
              }}
            >
              90 Ngày Trước
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BoxThoiGian;
