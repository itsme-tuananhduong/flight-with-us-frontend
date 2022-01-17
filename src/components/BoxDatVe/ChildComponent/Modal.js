import { Link } from 'react-router-dom';
import React, { useRef, useEffect, useCallback, useContext } from 'react';
import { ThemeContext } from '../../../shared/context/ThemeProvider';
import './Modal.css';

function Modal({ showModal, setShowModal }) {
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
              <p>Thay đổi tìm kiếm</p>
              <div className="close"></div>
            </div>
            <div className="my-modal">
              <div>
                <span>
                  Bạn có chắc chắn muốn thay đổi thông tin tìm kiếm của mình
                  không?
                </span>
                <br />
                <span>
                  Nếu bạn đồng ý thay đổi thông tin tìm kiếm, toàn bộ dữ liệu
                  trước đó sẽ bị xóa.
                </span>
              </div>
              <div className="modal-submit">
                <span
                  className="modal-btn close"
                  onClick={() => setShowModal((e) => !e)}
                >
                  Hủy bỏ
                </span>

                <span className="modal-btn">
                  <Link to={'/'}>Đồng ý</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
