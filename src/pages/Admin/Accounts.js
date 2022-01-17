import React, { Fragment, useContext, useState, useEffect } from 'react';

import Table from '../../components/Admin/Table';

import { AuthContext } from '../../shared/context/auth-context';
import LoadingSpinner from '../../shared/components/LoadingSpinner';
import ErrorModal from '../../shared/components/ErrorModal';
import axios from 'axios';

// import accountList from '../../assets/JsonData/account-list.json';
import './Accounts.css';

const Accounts = () => {
  const auth = useContext(AuthContext);

  const [accountList, setAccountList] = useState();

  const [error, setError] = useState(null);
  const clearError = () => {
    setError(null);
  };

  const [isLoading, setIsLoading] = useState(true);

  const triggerLoading = () => {
    setIsLoading(true);
    axios({
      method: 'get',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: '/users',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        setAccountList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const customerTableHead = [
    'ID',
    'Email',
    'Username',
    'Phân Loại',
    '',
    'Quản trị',
    '',
  ];

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) =>
    item.IsAdmin === '0' ? (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.Email}</td>
        <td>{item.Username}</td>
        <td>Người sử dụng</td>
        <td>
          <span className='addAdmin' onClick={() => handleUpdate(item.id, 1)}>
            Thêm nhân viên
          </span>
        </td>
        <td>
          <span className='addAdmin' onClick={() => handleUpdate(item.id, 2)}>
            Thêm quản trị viên
          </span>
        </td>
        <td>
          <span className='delete-admin' onClick={() => handleDelete(item.id)}>
            Xóa
          </span>
        </td>
      </tr>
    ) : item.IsAdmin === '1' ? (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.Email}</td>
        <td>{item.Username}</td>
        <td>Nhân viên</td>
        <td>
          <span className='addAdmin' onClick={() => handleUpdate(item.id, 2)}>
            Thêm quản trị viên
          </span>
        </td>
        <td>
          <span
            className='delete-admin'
            onClick={() => handleUpdate(item.id, 0)}
          >
            Xóa nhân viên
          </span>
        </td>
        <td>
          <span className='delete-admin' onClick={() => handleDelete(item.id)}>
            Xóa
          </span>
        </td>
      </tr>
    ) : (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.Email}</td>
        <td>{item.Username}</td>
        <td>Quản trị viên</td>
        <td>
          <span
            className='delete-admin'
            onClick={() => handleUpdate(item.id, 0)}
          >
            Xóa quản trị viên
          </span>
        </td>
        <td></td>
        <td>
          <span className='delete-admin' onClick={() => handleDelete(item.id)}>
            Xóa
          </span>
        </td>
      </tr>
    );

  const handleUpdate = (id, flag) => {
    setIsLoading(true);
    axios({
      method: 'put',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/users/${id}`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        IsAdmin: flag === 0 ? 0 : flag === 1 ? 1 : 2,
      },
    })
      .then((res) => {
        triggerLoading();
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const handleDelete = (id) => {
    setIsLoading(true);
    axios({
      method: 'delete',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/users/${id}`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        id: id,
      },
    })
      .then((res) => {
        triggerLoading();
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const filterData = (id = null, isadmin = null) => {
    setIsLoading(true);
    axios({
      method: 'post',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/users/search`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        id: id,
        IsAdmin: isadmin,
      },
    })
      .then((res) => {
        setAccountList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      axios({
        method: 'get',
        baseURL: process.env.REACT_APP_BACKEND_URL,
        url: '/users',
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((res) => setAccountList(res.data))
        .catch((err) => setError(err.message));
    };
    fetchData();
    setIsLoading(false);
  }, []);

  const onInputKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      filterData(e.target.value);
    }
  };

  const onClickHandler = (e) => {
    filterData(null, e.target.value);
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div>

        <h2 className="page-header">Thông Tin Tài Khoản</h2>
        <div className="row heading">
          <div className="search-id">
            <input
              className='admin-input'
              type='text'
              placeholder='Nhập ID'
              onKeyUp={onInputKeyUp}
            />
            <i className='bx bx-search'></i>
          </div>
          <div className=''>
            <div className='page-card'>
              <div className='page-card__body '>
                <div className='select'>
                  <select
                    name='ticket-type'
                    id='ticket-type'
                    className='ticket-option'
                    onChange={onClickHandler}
                  >
                    <option value=''>Tất cả</option>
                    <option value='2'>Quản trị viên</option>
                    <option value='1'>Nhân viên</option>
                    <option value='0'>Người sử dụng</option>
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
                {isLoading && <LoadingSpinner />}
                {!isLoading && accountList && (
                  <Table
                    limit='10'
                    headData={customerTableHead}
                    renderHead={(item, index) => renderHead(item, index)}
                    bodyData={accountList}
                    renderBody={(item, index) => renderBody(item, index)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Accounts;
