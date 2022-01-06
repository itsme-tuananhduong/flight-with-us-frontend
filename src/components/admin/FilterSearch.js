import React, { useRef } from 'react';

import './FilterSearch.css';
function FilterSearch({ showFilter, setShowFilter }) {
  const Ariline = [
    {
      id: '1',
      name: ' Vietravel Airlines',
      image: 'https://flight.hahalolo.com/assets/image/flight/vu.gif',
      status: 'checked',
    },
    {
      id: '2',
      name: 'VietNam AriLine',
      image: 'https://flight.hahalolo.com/assets/image/flight/vn.gif',
      status: 'checked',
    },
    {
      id: '3',
      name: ' Bamboo Airways',
      image: 'https://flight.hahalolo.com/assets/image/flight/qh.gif',
      status: 'checked',
    },
    {
      id: '4',
      name: 'Vietjet Air',
      image: 'https://flight.hahalolo.com/assets/image/flight/vj.gif',
      status: 'checked',
    },
  ];
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowFilter(false);
    }
  };
  return showFilter ? (
    <div className='FilterSearch'>
      <div className='search-overlay' ref={modalRef} onClick={closeModal}></div>
      <div className='box-priamry'>
        <div className='search-heading'>
          <h4 className='head-title'>Lọc Tìm Kiếm</h4>
          <div
            className='ticket-close'
            onClick={() => setShowFilter((e) => !e)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              className='close-icon'
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <g data-name='Group 28027' fill='none'>
                <path data-name='Rectangle 4499' d='M0 0h24v24H0z'></path>
                <g
                  data-name='Group 28346'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.3'
                >
                  <path data-name='Line 22' d='M5 5l14 14'></path>
                  <path data-name='Line 23' d='M19 5L5 19'></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className='search-main'>
          <div className='main-Airline'>
            <h4>Hãng Hàng Không</h4>

            <div className='Airline-list'>
              {Ariline.map((Ariline, index) => (
                <div className='Airline-list-item' key={index}>
                  <div className='input-checkbox'>
                    <input type='checkbox' id={Ariline.id} />
                    <label htmlFor={Ariline.id} className='label-checkbox'>
                      {Ariline.name}
                    </label>
                  </div>
                  <div className='Airline-list-item-img'>
                    <img src={Ariline.image} alt='' />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='main-TimeSlot'>
            <h4>Khung Giờ Bay</h4>
            <div className='filter-time'>
              <div className='filter-time-list'>
                <div className='filter-time-list-item'>
                  <div className='input-checkbox'>
                    <input type='checkbox' id='time1' />
                    <label htmlFor='time1' className='label-checkbox'>
                      0:00 - 6:00
                    </label>
                  </div>
                </div>
                <div className='filter-time-list-item'>
                  {' '}
                  <div className='input-checkbox'>
                    <input type='checkbox' id='time2' />
                    <label htmlFor='time2' className='label-checkbox'>
                      6:01 - 12:00
                    </label>
                  </div>
                </div>
                <div className='filter-time-list-item'>
                  {' '}
                  <div className='input-checkbox'>
                    <input type='checkbox' id='time3' />
                    <label htmlFor='time3' className='label-checkbox'>
                      12:01 - 18:00
                    </label>
                  </div>
                </div>
                <div className='filter-time-list-item'>
                  <div className='input-checkbox'>
                    <input type='checkbox' id='time4' />
                    <label htmlFor='time4' className='label-checkbox'>
                      18:01 - 23:59
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <h4 className='way-title'>Số Điểm Dừng</h4>
            <div className='filter-way'>
              <div className='filter-way-list'>
                <div className='filter-way-list-item'>
                  <div className='input-checkbox'>
                    <input type='radio' id='way1' name='way' />
                    <label htmlFor='way1' className='label-radio'>
                      Tất Cả
                    </label>
                  </div>
                </div>
                <div className='filter-way-list-item'>
                  <div className='input-checkbox'>
                    <input type='radio' id='way2' name='way' />
                    <label htmlFor='way2' className='label-radio'>
                      Bay Thẳng
                    </label>
                  </div>
                </div>
                <div className='filter-way-list-item'>
                  <div className='input-checkbox'>
                    <input type='radio' id='way3' name='way' />
                    <label htmlFor='way3' className='label-radio'>
                      Quá Cảnh
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='btn-filter-flight'>
          <span className='btn-filter-click'>Lọc</span>
        </div>
      </div>
    </div>
  ) : null;
}

export default FilterSearch;
