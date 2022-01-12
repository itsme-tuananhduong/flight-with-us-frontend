import React, { useContext } from 'react';
import { ThemeContext } from '../shared/context/ThemeProvider';

import './Cart.css';

function Cart() {
  const Flight = [
    {
      id: '1',
      loaichuyenbay: 'Chuyến bay một chiều',
      ddkh: 'Tokyo (NRT)',
      ddhc: 'Dubai (DXB)',
      hanhkhach: {
        nguoilon: '1',
        TreEm: '2',
        Embe: '1',
      },
      thoigiankh: 'Thứ 6,14/01/2022 22:30',
      thoigianhc: 'Thứ 7,15/01/2022 05:25',
      loaihinh: 'Bay thẳng',
      time: '11 giờ 55 phút',
      tongtien: '11.398.000',
    },
    {
      id: '2',
      loaichuyenbay: 'Chuyến bay một chiều',
      ddkh: 'Tokyo (NRT)',
      ddhc: 'Dubai (DXB)',
      hanhkhach: {
        nguoilon: '1',
        TreEm: '2',
        Embe: '1',
      },
      thoigiankh: 'Thứ 6,14/01/2022 22:30',
      thoigianhc: 'Thứ 7,15/01/2022 05:25',
      loaihinh: 'Bay thẳng',
      time: '11 giờ 55 phút',
      tongtien: '11.398.000',
      loaihinh: 'Bay thẳng',
      time: '11 giờ 55 phút',
    },
  ];
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme === 'dark' ? 'cart dark' : 'cart'}>
      <h4 className='cart-name'>Giỏ Hàng</h4>

      <span className='ticket-type'>
        Vé máy bay quốc tế <span>({Flight.length})</span>
      </span>
      {Flight.map((flight) => (
        <div className='ticket-box' key={flight.id}>
          <div className='box-heading'>
            <div className='heading1'>
              <h5>{flight.loaichuyenbay}</h5>
              <h4>
                {flight.ddkh} - {flight.ddhc}
              </h4>
              <div className='heading-link'>
                <a href='#' className='heading-link-delete'>
                  Xóa
                </a>
                |
                <a className='heading-link-change' href='#'>
                  Thay đổi lựa chọn
                </a>
              </div>
            </div>
            <div className='heading2'>
              <span className='heading2-price'>{flight.tongtien} ₫</span>
              <h5>Đã bao gồm thuế phí</h5>
              <div className='heading2-btn-box'>
                <span className='heading2-btn'>Đặt vé</span>
              </div>
            </div>
          </div>
          <div className='box-content'>
            <div className='box-content-left'>
              <h5 className='box-content-left-name'>chuyến bay</h5>
              <div className='box-content-left-flex'>
                <img
                  src='https://media.hahalolo.com/other/flight/logo/EK.png'
                  alt=''
                />
                <div className='left-content'>
                  <h5>Emirates</h5>
                  <span>
                    Số hành khách:{' '}
                    <span>
                      {' '}
                      {flight.hanhkhach.nguoilon} người lớn,{' '}
                      {flight.hanhkhach.TreEm} trẻ em, {flight.hanhkhach.Embe}{' '}
                      em bé{' '}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className='box-content-right'>
              <div className='right1'>
                <div className='right1-box1'>
                  <span>{flight.ddkh}</span>
                  <span>Thứ 6, 14/01/2022</span>
                  <h5>22:30</h5>
                </div>
                <div className='right1-box2'>
                  <span>{flight.ddhc}</span>
                  <span>Thứ 7, 15/01/2022</span>
                  <h5>05:25</h5>
                </div>
              </div>
              <div className='right2'>
                <h5>{flight.time}</h5>
                <span>{flight.loaihinh}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
