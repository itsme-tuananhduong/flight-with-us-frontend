import React, { Fragment, useState, useEffect, useContext } from 'react';

import Table from '../../components/Admin/Table';
import UpdatePassenger from '../../components/Admin/UpdatePassenger';

import { AuthContext } from '../../shared/context/auth-context';
import LoadingSpinner from '../../shared/components/LoadingSpinner';
import ErrorModal from '../../shared/components/ErrorModal';
import axios from 'axios';
// import passengerList from '../../assets/JsonData/pasenger-list.json';
import './Passengers.css';

const InvoiceDetail = () => {
  const auth = useContext(AuthContext);

  const [passenger, setPassenger] = useState();
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
      url: '/invoice-details',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        setPassenger(res.data);
        setIsLoading(false);
        setShowUpdate(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
        setShowUpdate(false);
      });
  };

  const filterData = (idchitiethoadon = null) => {
    setIsLoading(true);
    axios({
      method: 'post',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/invoice-details/search`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        IdChiTietHoaDon: idchitiethoadon,
      },
    })
      .then((res) => {
        setPassenger(res.data);
        setIsLoading(false);
        // setShowFilter(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
        // setShowFilter(false);
      });
  };

  const [showUpdate, setShowUpdate] = useState(false);
  const [passengerInfo, setPassengerInfo] = useState({});
  const customerTableHead = [
    'ID',
    'Thành Tiền',
    'ID Vé Máy Bay',
    'ID Hành Khách',
    'ID Hóa Đơn',
  ];

  useEffect(() => {
    const fetchData = async () => {
      axios({
        method: 'get',
        baseURL: process.env.REACT_APP_BACKEND_URL,
        url: '/invoice-details',
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((res) => setPassenger(res.data))
        .catch((err) => setError(err.message));
    };
    fetchData();
    setIsLoading(false);
  }, []);

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.IdChiTietHoaDon}</td>
      <td>{item.ThanhTien}</td>
      <td>{item.IdVeMayBay}</td>
      <td>{item.IdHanhKhach}</td>
      <td>{item.IdHoaDon}</td>
      {/* <td>
        <span
          className="update-passenger"
          onClick={() => handlePassengerInfo(item)}
        >
          Sửa
        </span>
      </td>
      <td>
        <span className="delete-passenger" onClick={() => HandleData2(item)}>
          Xóa
        </span>
      </td> */}
    </tr>
  );

  const onInputKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      filterData(e.target.value);
    }
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <UpdatePassenger
        showUpdate={showUpdate}
        setShowUpdate={setShowUpdate}
        passengerInfo={passengerInfo}
        triggerLoading={triggerLoading}
        setError={setError}
      />
      <div>
        <h2 className="page-header">Thông Tin Chi Tiết Hóa Đơn</h2>
        <div className="row">
          <div className="search-id">
            <input
              className="admin-input"
              type="text"
              placeholder="Nhập ID"
              onKeyUp={onInputKeyUp}
            />
            <i className="bx bx-search"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="page-card">
              <div className="page-card__body">
                {isLoading && <LoadingSpinner />}
                {!isLoading && passenger && (
                  <Table
                    limit="10"
                    headData={customerTableHead}
                    renderHead={(item, index) => renderHead(item, index)}
                    bodyData={passenger}
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

export default InvoiceDetail;
