import React, { useState, useContext, useRef } from 'react';
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
    nation: 'Vietnam',
    code: '+84',
  });

  const getvaluePhoneCode = (e) => {
    setPhoneCode(e);
  };

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [name, setName] = useState(props.contactInfo.name);
  const [email, setEmail] = useState(props.contactInfo.email);
  const [gender, setGender] = useState(props.contactInfo.gender);
  const [phone, setPhone] = useState(props.contactInfo.phone);
  const [address, setAddress] = useState(props.contactInfo.address);

  const onNameChange = (e) => {
    props.setContactInfo((prevState) => ({
      ...prevState,
      name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
    }));
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
            <input
              type="text"
              className="form-input"
              placeholder=" "
              onChange={(e) => onNameChange(e)}
              ref={firstNameRef}
            />
            <label htmlFor="name" className="form-label">
              Họ
              <span className="star"> *</span>
            </label>
            <span className="message-error"></span>
          </div>
          <div className="form-field">
            <input
              type="text"
              className="form-input"
              placeholder=" "
              onChange={(e) => onNameChange(e)}
              ref={lastNameRef}
            />
            <label htmlFor="name" className="form-label">
              Tên đệm & tên
              <span className="star"> *</span>
            </label>
            <span className="message-error"></span>
          </div>
        </div>
        <div className="gender-options">
          <p>Giới tính</p>
          <div className="options">
            <label className="option" for="male">
              <input
                type="radio"
                id="male"
                name="gender-options-nlh"
                value="Nam"
                onClick={(e) =>
                  props.setContactInfo((prevState) => ({
                    ...prevState,
                    gender: e.target.value,
                  }))
                }
              />
              Nam
            </label>
            <label className="option" for="female">
              <input
                type="radio"
                id="female"
                name="gender-options-nlh"
                value="Nữ"
                onClick={(e) =>
                  props.setContactInfo((prevState) => ({
                    ...prevState,
                    gender: e.target.value,
                  }))
                }
              />
              Nữ
            </label>
          </div>
        </div>
        <div className="option2">
          <div className="form-field email">
            <input
              type="text"
              className="form-input"
              placeholder=" "
              onChange={(e) =>
                props.setContactInfo((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            <label htmlFor="name" className="form-label">
              Email
              <span className="star"> *</span>
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
                onChange={(e) => {}}
              />
              <label htmlFor="name" className="form-label">
                Mã điện thoại
                <span className="star"> *</span>
              </label>
              <span className="message-error"></span>

              <BoxMaDienThoai
                showMaDienThoai={showMaDienThoai}
                setShowMaDienThoai={setShowMaDienThoai}
                getvaluePhoneCode={getvaluePhoneCode}
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                className="form-input"
                placeholder=" "
                onChange={(e) =>
                  props.setContactInfo((prevState) => ({
                    ...prevState,
                    phone: `${phoneCode.code} ${e.target.value}`,
                  }))
                }
              />
              <label htmlFor="name" className="form-label">
                Số điện thoại
                <span className="star"> *</span>
              </label>
              <span className="message-error"></span>
            </div>
          </div>
        </div>
        <div className="option3">
          <div className="form-field">
            <input
              type="text"
              className="form-input"
              placeholder=" "
              onChange={(e) =>
                props.setContactInfo((prevState) => ({
                  ...prevState,
                  address: e.target.value,
                }))
              }
            />
            <label htmlFor="name" className="form-label">
              Địa chỉ
              <span className="star"> *</span>
            </label>
            <span className="message-error"></span>
          </div>
        </div>
        <div className="nguoilienhe-bntt-input-check">
          <div className="input-checkbox">
            <input
              type="checkbox"
              id="check"
              onClick={() => {
                props.setIsPassenger(!props.isPassenger);
              }}
            />
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
          Họ tên: <span>{name}</span>
        </div>
        <div className="nguoi-lien-he__box">
          Giới tính: <span>{gender}</span>
        </div>
        <div className="nguoi-lien-he__box">
          Số điện thoại: <span>{phone}</span>
        </div>
        <div className="nguoi-lien-he__box">
          Email: <span>{email}</span>
        </div>
        <div className="nguoi-lien-he__box">
          Địa chỉ: <span>{address}</span>
        </div>
      </div>
    </div>
  );
};

export default BoxNguoiLienHe;
