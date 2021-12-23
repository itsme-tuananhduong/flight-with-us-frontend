import React, { useState } from 'react';
import BoxMaDienThoai from './ChildComponent/BoxMaDienThoai';
import BoxQuocGia from './ChildComponent/BoxQuocGia';
import BoxTinhThanh from './ChildComponent/BoxTinhThanh';

import './BoxNguoiThanhToan.css';

const BoxNguoiThanhToan = () => {
  const [showMaDienThoai, setShowMaDienThoai] = useState(false);
  const [showQuocGia, setShowQuocGia] = useState(false);
  const [showTinhThanh, setShowTinhThanh] = useState(false);

  return (
    <div className="BoxNguoiThanhToan_container">
      <div>
        <h4 className="BoxNguoiThanhToan-title">Thông tin người thanh toán</h4>
        <div className="bntt-input-check">
          <input type="checkbox" className="bntt-checkbox" />{' '}
          <span className="BoxNguoiThanhToan-checkbox">
            Sử dụng thông tin người liên hệ
          </span>
        </div>
      </div>
      <div className="option1">
        <div className="form-field">
          <input type="text" className="form-input" placeholder=" " />
          <label htmlFor="name" className="form-label">
            Họ
            <span className="dausao">*</span>
          </label>
          <span className="message-error"></span>
        </div>
        <div className="form-field">
          <input type="text" className="form-input" placeholder=" " />
          <label htmlFor="name" className="form-label">
            Tên đệm & tên
            <span className="dausao">*</span>
          </label>
          <span className="message-error"></span>
        </div>
      </div>
      <div className="option2">
        <div className="form-field email">
          <input type="text" className="form-input" placeholder=" " />
          <label htmlFor="name" className="form-label">
            Email
            <span className="dausao">*</span>
          </label>
          <span className="message-error"></span>
        </div>
        <div className="option3-1">
          <div className="form-field madt">
            <img
              className="img-madt"
              src="https://media.hahalolo.com/other/flags/vn.png"
              alt=""
            />
            <div className="arrow-btn">
              <svg
                onClick={() => setShowMaDienThoai((e) => !e)}
                className="arrow-icon"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>
            <input type="text" className="form-input madt" placeholder=" " />
            <label htmlFor="name" className="form-label">
              Mã điện thoại
              <span className="dausao">*</span>
            </label>
            <span className="message-error"></span>

            <BoxMaDienThoai
              showMaDienThoai={showMaDienThoai}
              setShowMaDienThoai={setShowMaDienThoai}
            />
          </div>
          <div className="form-field">
            <input type="text" className="form-input" placeholder=" " />
            <label htmlFor="name" className="form-label">
              Số điện thoại
              <span className="dausao">*</span>
            </label>
            <span className="message-error"></span>
          </div>
        </div>
      </div>
      <div className="option3">
        <div className="form-field isvalid">
          <input type="text" className="form-input" placeholder=" " />
          <label htmlFor="name" className="form-label">
            Địa Chỉ
            <span className="dausao">*</span>
          </label>
          <span className="message-error">okok</span>
        </div>
      </div>
      <div className="option4">
        <div className="form-field">
          <div className="arrow-btn">
            <svg
              onClick={() => setShowQuocGia((e) => !e)}
              className="arrow-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </div>
          <input type="text" className="form-input" placeholder=" " />
          <label htmlFor="name" className="form-label">
            Quốc Gia
            <span className="dausao">*</span>
          </label>
          <span className="message-error"></span>
          <BoxQuocGia
            showQuocGia={showQuocGia}
            setShowQuocGia={setShowQuocGia}
          />
        </div>
        <div className="form-field isvalid">
          <input
            type="text"
            className="form-input isvalid"
            placeholder=" "
            onClick={() => setShowTinhThanh(true)}
          />
          <label htmlFor="name" className="form-label isvalid">
            Tỉnh / Thành phố (Bang)
            <span className="dausao">*</span>
          </label>
          <span className="message-error">okok</span>
          <BoxTinhThanh
            showTinhThanh={showTinhThanh}
            setShowTinhThanh={setShowTinhThanh}
          />
        </div>
      </div>
    </div>
  );
};

export default BoxNguoiThanhToan;
