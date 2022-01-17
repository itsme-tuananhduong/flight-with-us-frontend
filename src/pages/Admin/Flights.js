import React, { Fragment, useState, useEffect, useContext } from 'react';

import Table from '../../components/Admin/Table';
import ModalAddTicket from '../../components/Admin/ModalAddTicket';
import FilterSearch from '../../components/Admin/FilterSearch';
import TicketList from '../../components/Admin/TicketList';
import FlightUpdate from '../../components/Admin/FlightUpdate';

import { AuthContext } from '../../shared/context/auth-context';
import LoadingSpinner from '../../shared/components/LoadingSpinner';
import ErrorModal from '../../shared/components/ErrorModal';
import axios from 'axios';
import flight1 from '../../assets/JsonData/flight.json';

import './Flights.css';

const Flights = () => {
  const auth = useContext(AuthContext);

  const [flight, setFlight] = useState();
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
      url: '/flights',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        setFlight(res.data);
        setIsLoading(false);
        setShowFlightUpdate(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
        setShowFlightUpdate(false);
      });
  };

  const filterData = (
    idchuyenbay = null,
    brand = null,
    kgb = null,
    lhb = null
  ) => {
    setIsLoading(true);
    axios({
      method: 'post',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/flights/search`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        IdChuyenBay: idchuyenbay,
        HangHK: brand,
        SHMayBay: null,
        KhungGioBay: kgb,
        DiaDiemKhoiHanh: null,
        DiaDiemHaCanh: null,
        LoaiHinhBay: lhb,
      },
    })
      .then((res) => {
        setFlight(res.data);
        setIsLoading(false);
        setShowFilter(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
        setShowFilter(false);
      });
  };
  const [showTicket, setShowTicket] = useState(false);
  const [showTicketList, setShowTicketList] = useState(false);
  const [showFlightUpdate, setShowFlightUpdate] = useState(false);

  const [showFilter, setShowFilter] = useState(false);

  const [flightInfo, setFlightInfo] = useState({});
  const customerTableHead = [
    'ID',
    'Hãng Hàng Không',
    'Số Hiệu Máy Bay',
    'Khởi Hành',
    'Hạ Cánh',
    'Thời Gian Khởi Hành',
    'Thời Gian Hạ Cánh',
    '',
    'Chức Năng',
    '',
  ];

  useEffect(() => {
    const fetchData = async () => {
      axios({
        method: 'get',
        baseURL: process.env.REACT_APP_BACKEND_URL,
        url: '/flights',
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((res) => setFlight(res.data))
        .catch((err) => setError(err.message));
    };
    fetchData();
    setIsLoading(false);
  }, []);

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td onClick={() => handleFlight(item)}>{item.IdChuyenBay}</td>
      <td onClick={() => handleFlight(item)}>{item.HangHK}</td>
      <td onClick={() => handleFlight(item)}>{item.SHMayBay}</td>
      <td onClick={() => handleFlight(item)}>{item.DiaDiemKhoiHanh}</td>
      <td onClick={() => handleFlight(item)}>{item.DiaDiemHaCanh}</td>
      <td onClick={() => handleFlight(item)}>{item.ThoiGianKhoiHanh}</td>
      <td onClick={() => handleFlight(item)}>{item.ThoiGianHaCanh}</td>
      <td>
        <span className='AddTicket' onClick={() => HandleData(item)}>
          Thêm vé
        </span>
      </td>
      <td>
        <span className='ListTicket' onClick={() => HandleData2(item)}>
          Danh sách vé
        </span>
      </td>
      <td>
        <span className='deleteTicket' onClick={() => HandleData3(item)}>
          Xóa chuyến bay
        </span>
      </td>
    </tr>
  );
  const handleFlight = (e) => {
    setFlightInfo(e);
    setShowFlightUpdate(true);
  };
  const HandleData = (e) => {
    setFlightInfo(e);
    setShowTicket(true);
  };
  const [ticket, setticket] = useState(null);
  const HandleData2 = (e) => {
    axios({
      method: 'post',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/tickets/search`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        IdChuyenBay: e.IdChuyenBay,
        TrangThai: null,
      },
    })
      .then((res) => {
        setticket(res.data);
        setFlightInfo(e);
        setShowTicketList(true);
      })
      .catch((err) => setError(err.message));
  };
  const HandleData3 = (e) => {
    axios({
      method: 'delete',
      baseURL: process.env.REACT_APP_BACKEND_URL,
      url: `/flights/${e.IdChuyenBay}`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        triggerLoading();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    setShowFlightUpdate(false);
  }, [showTicketList, showTicket]);

  const onInputKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      filterData(e.target.value);
    }
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div>
        <FilterSearch
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          filterData={filterData}
        />

        <h2 className='page-header'>Thông Tin Chuyến Bay</h2>
        <div className='row heading'>
          <div className='search-id'>
            <input
              className='admin-input'
              type='text'
              placeholder='Nhập ID'
              onKeyUp={onInputKeyUp}
            />
            <i className='bx bx-search'></i>
          </div>
          <div className='col-2'>
            <div
              className='page-card-heading'
              onClick={() => setShowFilter((e) => !e)}
            >
              <div className='page-card__body filter'>Lọc Tìm Kiếm</div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='page-card'>
              <div className='page-card__body'>
                {isLoading && <LoadingSpinner />}
                {!isLoading && flight && (
                  <div>
                    <Table
                      limit='10'
                      headData={customerTableHead}
                      renderHead={(item, index) => renderHead(item, index)}
                      bodyData={flight}
                      renderBody={(item, index) => renderBody(item, index)}
                    />
                    <TicketList
                      showTicketList={showTicketList}
                      setShowTicketList={setShowTicketList}
                      flightInfo={flightInfo}
                      triggerLoading={triggerLoading}
                      setError={setError}
                      ticket={ticket}
                    />
                    <FlightUpdate
                      showFlightUpdate={showFlightUpdate}
                      setShowFlightUpdate={setShowFlightUpdate}
                      flightInfo={flightInfo}
                      triggerLoading={triggerLoading}
                      setError={setError}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAddTicket
        showTicket={showTicket}
        setShowTicket={setShowTicket}
        flightInfo={flightInfo}
        triggerLoading={triggerLoading}
        setError={setError}
      />
    </Fragment>
  );
};

export default Flights;
