import React, { useState } from 'react';
import AddFlight from '../../components/Admin/AddFlight';
import LoadingSpinner from '../../shared/components/LoadingSpinner';
import './AddFlights.css';

const AddFlights = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      <h2 className="page-header">Thêm Chuyến Bay</h2>
      <div className="row">
        <div className="col-12">
          <div className="page-card">
            <div className="page-card__body">
              <AddFlight setIsLoading={setIsLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFlights;
