import React, { useState, useContext, useRef } from 'react';
import BoxHLKG from './ChildComponent/BoxHLKG';

import { ThemeContext } from '../../shared/context/ThemeProvider';

import './BoxHanhKhach.css';

const BoxHanhKhach = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [name, setName] = useState(props.passengerInfo[props.pos].name);

  const [gender, setGender] = useState(props.passengerInfo[props.pos].gender);

  const onNameChange = () => {
    const prevGender = props.passengerInfo[props.pos].gender;
    if (props.pos === props.passengerInfo.length - 1) {
      props.setPassengerInfo((prevState) => [
        ...prevState.slice(0, props.pos),
        {
          name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
          gender: prevGender,
        },
      ]);
    } else {
      props.setPassengerInfo((prevState) => [
        ...prevState.slice(0, props.pos),
        {
          name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
          gender: prevGender,
        },
        ...prevState.slice(props.pos + 1),
      ]);
    }
  };

  const onGenderChange = (e) => {
    const prevName = props.passengerInfo[props.pos].name;
    if (props.pos === props.passengerInfo.length - 1) {
      props.setPassengerInfo((prevState) => [
        ...prevState.slice(0, props.pos),
        {
          name: prevName,
          gender: e.target.value,
        },
      ]);
    } else {
      props.setPassengerInfo((prevState) => [
        ...prevState.slice(0, props.pos),
        {
          name: prevName,
          gender: e.target.value,
        },
        ...prevState.slice(props.pos + 1),
      ]);
    }
  };

  const [step, setStep] = useState(props.step);

  const [showHLKG, setShowHLKG] = useState(false);

  const [HLKG, setHLKG] = useState(props.HLKG);

  const getValueHLKG = (e) => {
    setHLKG(e);
    props.changeHLKGHandler(e);
  };

  const resetStepHandler = () => {
    props.resetStepHandler();
  };

  return (
    <div
      className={
        theme === 'dark'
          ? 'BoxHanhKhach_container dark'
          : 'BoxHanhKhach_container'
      }
    >
      <div>
        <h4 className="BoxHanhKhach-title">
          Thông tin <span>{props.passenger}</span>
        </h4>
      </div>

      <div style={{ display: step === 0 ? 'block' : 'none' }}>
        <div className="option1">
          <div className="form-field">
            <input
              type="text"
              className="form-input"
              placeholder=" "
              onChange={onNameChange}
              ref={firstNameRef}
            />
            <label htmlFor="name" className="form-label">
              Họ (Không dấu)
              <span className="star"> *</span>
            </label>
            <span className="message-error"></span>
          </div>
          <div className="form-field">
            <input
              type="text"
              className="form-input"
              placeholder=" "
              onChange={onNameChange}
              ref={lastNameRef}
            />
            <label htmlFor="name" className="form-label">
              Tên đệm & tên (Không dấu)
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
                name={`gender-options-${props.id}`}
                value="Nam"
                onClick={(e) => onGenderChange(e)}
              />
              Nam
            </label>
            <label className="option" for="female">
              <input
                type="radio"
                id="female"
                name={`gender-options-${props.id}`}
                value="Nữ"
                onClick={(e) => onGenderChange(e)}
              />
              Nữ
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
      </div>

      <div className="package">
        <p>Hành lý ký gửi</p>
        <div className="package-main">
          <img
            src="https://flight.hahalolo.com/bb8c9a3f56366b5c501f0db5574d0942.svg"
            alt="img"
          />
          <b>
            <span>Sân bay quốc tế Nội Bài (HAN)</span> -{' '}
            <span>Sân bay quốc tế Tân Sơn Nhất (SGN)</span>
          </b>

          <div className="form-field">
            <div style={{ display: step === 0 ? 'block' : 'none' }}>
              <div className="arrow-btn">
                <svg
                  onClick={() => setShowHLKG((e) => !e)}
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
                className="form-input"
                placeholder=" "
                value={HLKG}
                onChange={(e) => e}
              />
              <label htmlFor="name" className="form-label">
                Chọn gói hành lý ký gửi
                <span className="star"> *</span>
              </label>
              <span className="message-error"></span>
              <BoxHLKG
                showHLKG={showHLKG}
                setShowHLKG={setShowHLKG}
                getValueHLKG={getValueHLKG}
              />
            </div>
            <div
              className="HLKG"
              style={{ display: step === 1 ? 'block' : 'none' }}
            >
              {HLKG}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: step === 1 ? 'block' : 'none' }}>
        <div className="package-options">
          <div className="package-option" onClick={resetStepHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28762">
                <path
                  data-name="Rectangle 4671"
                  fill="none"
                  d="M0 0h24v24H0z"
                ></path>
                <path
                  data-name="Path 20505"
                  d="M18.933 3.729a2.479 2.479 0 00-3.5 0l-.877.882-9.335 9.318-.02.02s0 .01-.01.01-.025.03-.035.044-.005 0-.005.01-.015.025-.025.04 0 .01-.01.015-.01.025-.015.04 0 0 0 .01l-2.075 6.231a.488.488 0 00.119.505.5.5 0 00.352.144.586.586 0 00.159-.025l6.222-2.076h.01a.179.179 0 00.044-.02.017.017 0 00.01 0c.015-.01.035-.02.049-.03s.03-.025.045-.035.01-.005.01-.01.015-.01.02-.02l10.21-10.21a2.479 2.479 0 000-3.5zm-9.214 14l-3.448-3.448L14.9 5.656l3.448 3.448zm-3.933-2.531L8.8 18.214 4.277 19.72zm13.792-7.332l-.525.53L15.6 4.953l.53-.53a1.486 1.486 0 012.1 0l1.347 1.347a1.491 1.491 0 010 2.1z"
                ></path>
              </g>
            </svg>
            <span>Chỉnh sửa thông tin</span>
          </div>

          <div className="package-option">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g data-name="Group 28291">
                <path
                  data-name="Rectangle 4398"
                  fill="none"
                  d="M0 0h24v24H0z"
                ></path>
                <g data-name="Vector Smart Object4 copy 2">
                  <g data-name="Group 27004">
                    <g data-name="Path 19205">
                      <path
                        data-name="Path 20107"
                        d="M9.954 18.406a.588.588 0 01-.378-.137l-7.363-6.108a.594.594 0 01.759-.914L9.906 17 20.974 5.187a.593.593 0 01.865.812l-11.45 12.22a.591.591 0 01-.435.187z"
                        stroke="currentColor"
                        stroke-width="0.2"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span>Dịch vụ bổ sung</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxHanhKhach;
