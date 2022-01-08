import React, { useState, useContext } from 'react';
import BoxMaDienThoai from './ChildComponent/BoxMaDienThoai';
import { ThemeContext } from '../../shared/context/ThemeProvider';

import './BoxNguoiLienHe.css';

const BoxNguoiLienHe = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [step, setStep] = useState(props.step);

  const [showMaDienThoai, setShowMaDienThoai] = useState(false);

  const [phoneCode, setPhoneCode] = useState({
    id: 5,
    imgNational: 'https://media.hahalolo.com/other/flags/vn.png',
    nation: 'VietNam',
    code: '+84',
  });

  const getvaluePhoneCode = (e) => {
    setPhoneCode(e);
  };
  return (
    <div
      className={
        theme === 'dark'
          ? 'BoxNguoiLienHe_container dark'
          : 'BoxNguoiLienHe_container'
      }
    >
      <div>
        <h4 className="BoxNguoiLienHe-title">Thông tin liên hệ</h4>
      </div>

      <div style={{ display: step === 0 ? 'block' : 'none' }}>
        <div className="option1">
          <div className="form-field">
            <input type="text" className="form-input" placeholder=" " />
            <label htmlFor="name" className="form-label">
              Họ
              <span className="star">*</span>
            </label>
            <span className="message-error"></span>
          </div>
          <div className="form-field">
            <input type="text" className="form-input" placeholder=" " />
            <label htmlFor="name" className="form-label">
              Tên đệm & tên
              <span className="star">*</span>
            </label>
            <span className="message-error"></span>
          </div>
        </div>
        <div className="gender-options">
          <p>Giới tính</p>
          <div className="options">
            <label className="option" for="male">
              <input type="radio" id="male" name="gender-options" value="Nam" />
              Nam
            </label>
            <label className="option" for="female">
              <input
                type="radio"
                id="female"
                name="gender-options"
                value="Nam"
              />
              Nữ
            </label>
          </div>
        </div>
        <div className="option2">
          <div className="form-field email">
            <input type="text" className="form-input" placeholder=" " />
            <label htmlFor="name" className="form-label">
              Email
              <span className="star">*</span>
            </label>
            <span className="message-error"></span>
          </div>
          <div className="option3-1">
            <div className="form-field madt">
              <img className="img-madt" src={phoneCode.imgNational} alt="" />
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
              <input
                type="text"
                className="form-input madt"
                placeholder=" "
                value={phoneCode.code}
                onChange={(e) => e}
              />
              <label htmlFor="name" className="form-label">
                Mã điện thoại
                <span className="star">*</span>
              </label>
              <span className="message-error"></span>

              <BoxMaDienThoai
                showMaDienThoai={showMaDienThoai}
                setShowMaDienThoai={setShowMaDienThoai}
                getvaluePhoneCode={getvaluePhoneCode}
              />
            </div>
            <div className="form-field">
              <input type="text" className="form-input" placeholder=" " />
              <label htmlFor="name" className="form-label">
                Số điện thoại
                <span className="star">*</span>
              </label>
              <span className="message-error"></span>
            </div>
          </div>
        </div>
        <div className="option3">
          <div className="form-field">
            <input type="text" className="form-input" placeholder=" " />
            <label htmlFor="name" className="form-label">
              Địa Chỉ
              <span className="star">*</span>
            </label>
            <span className="message-error"></span>
          </div>
        </div>
        <div className="nguoilienhe-bntt-input-check">
          <div className="input-checkbox">
            <input type="checkbox" id="check" />
            <label className="label-checkbox" htmlFor="check">
              Tôi là hành khách
            </label>
          </div>
        </div>
      </div>

      <div
        className="nguoi-lien-he-step-2"
        style={{ display: step === 1 ? 'block' : 'none' }}
      >
        <div className="nguoi-lien-he__box">
          Họ tên: <span>DEMO</span>
        </div>
        <div className="nguoi-lien-he__box">
          Giới tính: <span>Nam</span>
        </div>
        <div className="nguoi-lien-he__box">
          Số điện thoại: <span>0333333333</span>
        </div>
        <div className="nguoi-lien-he__box">
          Email: <span>demo@gmail.com</span>
        </div>
        <div className="nguoi-lien-he__box">
          Địa chỉ: <span>demo</span>
        </div>
      </div>
    </div>
  );
};

export default BoxNguoiLienHe;
