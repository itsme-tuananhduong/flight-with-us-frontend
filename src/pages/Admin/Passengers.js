import React, { Fragment, useState } from 'react';

import Table from '../../components/Admin/Table';
import UpdatePassenger from '../../components/Admin/UpdatePassenger';

import passengerList from '../../assets/JsonData/pasenger-list.json';
import './Passengers.css';

const Passengers = () => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [passengerInfo, setPassengerInfo] = useState({});
  const customerTableHead = [
    '',
    'Họ và Tên',
    'Giới Tính',
    'Ngày Sinh',
    'Sửa Thông Tin',
    'Xóa',
  ];

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index} onClick={() => handlePassengerInfo(item)}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.GioiTinh}</td>
      <td>{item.NgaySinh}</td>
      <td>
        <span className='update-passenger'>Sửa</span>
      </td>
      <td>
        <span className='delete-passenger'>Xóa</span>
      </td>
    </tr>
  );
  const handlePassengerInfo = (e) => {
    setPassengerInfo(e);
    setShowUpdate(true);
  };
  return (
    <Fragment>
      <UpdatePassenger
        showUpdate={showUpdate}
        setShowUpdate={setShowUpdate}
        passengerInfo={passengerInfo}
      />
      <div>
        <h2 className='page-header'>Thông Tin Khách Hàng</h2>
        <div className='row'>
          <div className='search-id'>
            <input className='admin-input' type='text' placeholder='Nhập ID' />
            <i className='bx bx-search'></i>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='page-card'>
              <div className='page-card__body'>
                <Table
                  limit='10'
                  headData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={passengerList}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Passengers;
