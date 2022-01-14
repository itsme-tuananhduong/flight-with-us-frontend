import React, { Fragment, useState, useEffect } from 'react';

import Table from '../../components/Admin/Table';
import ModalAddTicket from '../../components/Admin/ModalAddTicket';
import FilterSearch from '../../components/Admin/FilterSearch';
import flight from '../../assets/JsonData/flight.json';
import TicketList from '../../components/Admin/TicketList';
import FlightUpdate from '../../components/Admin/FlightUpdate';

import './Flights.css';

const Flights = () => {
  const [showTicket, setShowTicket] = useState(false);
  const [showTicketList, setShowTicketList] = useState(false);
  const [showFlightUpdate, setShowFlightUpdate] = useState(false);

  const [showFilter, setShowFilter] = useState(false);

  const [flightInfo, setFlightInfo] = useState({});
  const customerTableHead = [
    '',
    'Hãng',
    'Máy Bay',
    'Khởi Hành',
    'Hạ Cánh',
    'Thời Gian Khởi Hành',
    'Thời Gian Hạ Cánh',
    '',
    'Chức Năng',
    '',
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index} onClick={() => handleFlight(item)}>
      <td>{item.id}</td>
      <td>{item.HangHK}</td>
      <td>{item.SHMayBay}</td>
      <td>{item.DiaDiemKhoiHanh}</td>
      <td>{item.DiaDiemHaCanh}</td>
      <td>{item.ThoiGianKhoiHanh}</td>
      <td>{item.ThoiGianHaCanh}</td>
      <td>
        <span className='AddTicket' onClick={() => HandleData(item)}>
          Thêm vé
        </span>
      </td>
      <td>
        <span className='ListTicket' onClick={() => HandleData2(item)}>
          Danh Sách Vé
        </span>
      </td>
      <td>
        <span className='deleteTicket' onClick={() => HandleData(item)}>
          Xóa
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
  const HandleData2 = (e) => {
    setFlightInfo(e);
    setShowTicketList(true);
  };

  useEffect(() => {
    setShowFlightUpdate(false);
  }, [showTicketList, showTicket]);
  return (
    <Fragment>
      <div>
        <FilterSearch showFilter={showFilter} setShowFilter={setShowFilter} />

        <h2 className='page-header'>Thông Tin Chuyến Bay</h2>
        <div className='row heading'>
          <div className='search-id'>
            <input className='admin-input' type='text' placeholder='Nhập ID' />
            <i className='bx bx-search'></i>
          </div>
          <div className=''>
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
                />
                <FlightUpdate
                  showFlightUpdate={showFlightUpdate}
                  setShowFlightUpdate={setShowFlightUpdate}
                  flightInfo={flightInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAddTicket
        showTicket={showTicket}
        setShowTicket={setShowTicket}
        flightInfo={flightInfo}
      />
    </Fragment>
  );
};

export default Flights;
