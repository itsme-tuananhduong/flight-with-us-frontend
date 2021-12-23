import React, { useState } from 'react';
import Modal from './ChildComponent/Modal/Modal';
import TimKhiemKhuHoi from './TimKhiemKhuHoi';
import TimKiemNhieuChang from './TimKiemNhieuChang';
import TimKiemMotChieu from './TimKiemMotChieu';

import './FormSearch.css';

function FormSearch() {
  const [tab, setTab] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [sendData, setSendData] = useState({});

  return (
    <div>
      <div className="formSearch-container">
        <div className="formSearch-header">
          <div>
            <h3 className="formSearch-header-title">
              Tìm kiếm chuyến bay cho hành trình của bạn!
            </h3>
          </div>
          <span
            className="formSearch-header-btn"
            onClick={() => setShowModal((e) => !e)}
          >
            Tra cứu đặt chỗ
          </span>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <div className="formSearch-btn">
          <button
            className={
              tab === 1 ? 'formSearch-btn-item active' : 'formSearch-btn-item'
            }
            onClick={() => setTab(1)}
          >
            Một Chiều
          </button>
          <button
            className={
              tab === 2 ? 'formSearch-btn-item active' : 'formSearch-btn-item'
            }
            onClick={() => setTab(2)}
          >
            Khứ Hồi
          </button>
          <button
            className={
              tab === 3 ? 'formSearch-btn-item active' : 'formSearch-btn-item'
            }
            onClick={() => setTab(3)}
          >
            Nhiều Chặng
          </button>
        </div>
        {tab === 1 ? <TimKiemMotChieu setSendData={setSendData} /> : null}
        {tab === 2 ? <TimKhiemKhuHoi setSendData={setSendData} /> : null}
        {tab === 3 ? <TimKiemNhieuChang setSendData={setSendData} /> : null}
      </div>
    </div>
  );
}

export default FormSearch;
