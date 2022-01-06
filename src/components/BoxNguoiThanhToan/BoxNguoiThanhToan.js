import React, { useState, useContext } from 'react';
import BoxMaDienThoai from './ChildComponent/BoxMaDienThoai';
import BoxQuocGia from './ChildComponent/BoxQuocGia';
import BoxTinhThanh from './ChildComponent/BoxTinhThanh';
import { ThemeContext } from '../../shared/context/ThemeProvider';

import './boxNguoiThanhToan.css';

const BoxNguoiThanhToan = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [showMaDienThoai, setShowMaDienThoai] = useState(false);
  const [showQuocGia, setShowQuocGia] = useState(false);
  const [showTinhThanh, setShowTinhThanh] = useState(false);
  const [national, setNational] = useState('');
  const [province, setProvince] = useState('');
  const [phoneCode, setPhoneCode] = useState({
    id: 5,
    imgNational: 'https://media.hahalolo.com/other/flags/vn.png',
    nation: 'VietNam',
    code: '+84',
  });

  const getValueNational = (e) => {
    return setNational(e), setProvince('');
  };
  const getValueProvince = (e) => {
    setProvince(e);
  };
  const getvaluePhoneCode = (e) => {
    setPhoneCode(e);
  };
  return (
    <div
      className={
        theme === 'dark'
          ? 'BoxNguoiThanhToan_container dark'
          : 'BoxNguoiThanhToan_container'
      }
    >
      <div>
        <h4 className='BoxNguoiThanhToan-title'>Thông tin người thanh toán</h4>
        <div className='bntt-input-check'>
          <div className='input-checkbox'>
            <input type='checkbox' id='check' />
            <label className='label-checkbox' htmlFor='check'>
              Sử dụng thông tin người liên hệ
            </label>
          </div>
        </div>
      </div>
      <div className='option1'>
        <div className='form-field'>
          <input type='text' className='form-input' placeholder=' ' />
          <label htmlFor='name' className='form-label'>
            Họ
            <span className='star'>*</span>
          </label>
          <span className='message-error'></span>
        </div>
        <div className='form-field'>
          <input type='text' className='form-input' placeholder=' ' />
          <label htmlFor='name' className='form-label'>
            Tên đệm & tên
            <span className='star'>*</span>
          </label>
          <span className='message-error'></span>
        </div>
      </div>
      <div className='option2'>
        <div className='form-field email'>
          <input type='text' className='form-input' placeholder=' ' />
          <label htmlFor='name' className='form-label'>
            Email
            <span className='star'>*</span>
          </label>
          <span className='message-error'></span>
        </div>
        <div className='option3-1'>
          <div className='form-field madt'>
            <img className='img-madt' src={phoneCode.imgNational} alt='' />
            <div className='arrow-btn'>
              <svg
                onClick={() => setShowMaDienThoai((e) => !e)}
                className='arrow-icon'
                focusable='false'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M7 10l5 5 5-5z'></path>
              </svg>
            </div>
            <input
              type='text'
              className='form-input madt'
              placeholder=' '
              value={phoneCode.code}
              onChange={(e) => e}
            />
            <label htmlFor='name' className='form-label'>
              Mã điện thoại
              <span className='star'>*</span>
            </label>
            <span className='message-error'></span>

            <BoxMaDienThoai
              showMaDienThoai={showMaDienThoai}
              setShowMaDienThoai={setShowMaDienThoai}
              getvaluePhoneCode={getvaluePhoneCode}
            />
          </div>
          <div className='form-field'>
            <input type='text' className='form-input' placeholder=' ' />
            <label htmlFor='name' className='form-label'>
              Số điện thoại
              <span className='star'>*</span>
            </label>
            <span className='message-error'></span>
          </div>
        </div>
      </div>
      <div className='option3'>
        <div className='form-field'>
          <input type='text' className='form-input' placeholder=' ' />
          <label htmlFor='name' className='form-label'>
            Địa Chỉ
            <span className='star'>*</span>
          </label>
          <span className='message-error'></span>
        </div>
      </div>
      <div className='option4'>
        <div className='form-field'>
          <div className='arrow-btn'>
            <svg
              onClick={() => setShowQuocGia((e) => !e)}
              className='arrow-icon'
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M7 10l5 5 5-5z'></path>
            </svg>
          </div>
          <input
            type='text'
            className='form-input'
            placeholder=' '
            value={national}
            onChange={(e) => e}
          />
          <label htmlFor='name' className='form-label'>
            Quốc Gia
            <span className='star'>*</span>
          </label>
          <span className='message-error'></span>
          <BoxQuocGia
            showQuocGia={showQuocGia}
            setShowQuocGia={setShowQuocGia}
            getValueNational={getValueNational}
          />
        </div>
        <div className='form-field '>
          <input
            type='text'
            className='form-input '
            placeholder=' '
            onClick={() => setShowTinhThanh(true)}
            value={province}
            onChange={(e) => e}
          />
          <label htmlFor='name' className='form-label '>
            Tỉnh / Thành phố (Bang)
            <span className='star'>*</span>
          </label>
          <span className='message-error'></span>
          <BoxTinhThanh
            showTinhThanh={showTinhThanh}
            setShowTinhThanh={setShowTinhThanh}
            national={national}
            getValueProvince={getValueProvince}
          />
        </div>
      </div>
    </div>
  );
};

export default BoxNguoiThanhToan;
