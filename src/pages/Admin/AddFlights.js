import React from 'react';
import AddFlight from '../../components/Admin/AddFlight';
import './AddFlights.css';
const AddFlights = () => {
  return (
    <div>
      <h2 className='page-header'>Thêm Chuyến Bay</h2>
      <div className='row'>
        <div className='col-12'>
          <div className='page-card'>
            <div className='page-card__body'>
              <AddFlight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFlights;
