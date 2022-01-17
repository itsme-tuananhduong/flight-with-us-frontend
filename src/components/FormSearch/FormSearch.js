import React, { useState, useContext } from 'react';
import SearchModal from './ChildComponent/SearchModal/SearchModal';
import TimKhiemKhuHoi from './TimKhiemKhuHoi';
import TimKiemNhieuChang from './TimKiemNhieuChang';
import TimKiemMotChieu from './TimKiemMotChieu';
import { ThemeContext } from '../../shared/context/ThemeProvider';

import './FormSearch.css';

function FormSearch({ setIsLoading, setError }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [tab, setTab] = useState(1);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        className={
          theme === 'dark'
            ? 'formSearch-container dark'
            : 'formSearch-container'
        }
      >
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

        <SearchModal showModal={showModal} setShowModal={setShowModal} />
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
        {tab === 1 ? (
          <TimKiemMotChieu setIsLoading={setIsLoading} setError={setError} />
        ) : null}
        {tab === 2 ? (
          <TimKhiemKhuHoi setIsLoading={setIsLoading} setError={setError} />
        ) : null}
        {tab === 3 ? (
          <TimKiemNhieuChang setIsLoading={setIsLoading} setError={setError} />
        ) : null}
      </div>
    </div>
  );
}

export default FormSearch;
