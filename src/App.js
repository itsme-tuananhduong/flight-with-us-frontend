import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Result from './pages/Result';
import Booking from './pages/Booking';
import User from './pages/User';
import UserFlight from './pages/UserFlight';
import Authentication from './pages/Authentication';

const App = () => {
  const token = false;
  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/user/:uid/flights" element={<UserFlight />} />
        <Route path="/user/:uid" element={<User />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route
          path="/user/:uid/flights"
          element={<Navigate to="/authentication" />}
        />
        <Route path="/user/:uid" element={<Navigate to="/authentication" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <BrowserRouter>
      <main>
        <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
      </main>
    </BrowserRouter>
  );
};

export default App;
