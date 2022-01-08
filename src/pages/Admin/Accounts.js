import React, { Fragment } from 'react';

import Table from '../../components/Admin/Table';

import accountList from '../../assets/JsonData/account-list.json';
import './Accounts.css';
const customerTableHead = ['', 'username', 'email', 'PhanLoai', 'Thêm Admin'];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) =>
  item.PhanLoai === 'Admin' ? (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.username}</td>
      <td>{item.Email}</td>
      <td>{item.PhanLoai}</td>
      <td>
        <span className='delete-admin'>Gỡ Admin</span>
      </td>
    </tr>
  ) : (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.username}</td>
      <td>{item.Email}</td>
      <td>{item.PhanLoai}</td>
      <td>
        <span className='addAdmin'>Thêm Admin</span>
      </td>
    </tr>
  );

const Accounts = () => {
  return (
    <Fragment>
      <div>
        <h2 className='page-header'>Danh Sách Tài Khoản</h2>
        <div className='row heading'>
          <div className='search-id'>
            <input className='admin-input' type='text' placeholder='Nhập ID' />
            <i className='bx bx-search'></i>
          </div>
          <div className='col-3'>
            <div className='page-card'>
              <div className='page-card__body '>
                <div className='select'>
                  <select
                    name='ticket-type'
                    id='ticket-type'
                    className='ticket-option'
                  >
                    <option value='Tất cả'>Tất cả</option>
                    <option value='Admin'>Admin</option>
                    <option value='User'>User</option>
                  </select>
                </div>
              </div>
            </div>
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
                  bodyData={accountList}
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

export default Accounts;
