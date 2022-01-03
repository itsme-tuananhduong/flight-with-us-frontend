import { useContext, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeContext } from './shared/context/ThemeProvider';

import Home from './pages/Home';
import Result from './pages/Result';
import Booking from './pages/Booking';
import User from './pages/User';
import Authentication from './pages/Authentication';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

import Layout from './components/Admin/Layout';

const App = () => {
  const { theme } = useContext(ThemeContext);

  if (theme === 'dark') {
    document.body.style.backgroundColor = '#212121';
  } else {
    document.body.style.backgroundColor = '#fff';
  }

  const token = true;
  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/authentication" element={<Navigate to="/" />} />
        <Route path="/user/:uid" element={<User />} />
        <Route path="/admin" element={<Admin />}>
          <Route
            path="dashboard"
            element={<Layout location={'/admin/dashboard'} />}
          />
          <Route
            path="customers"
            element={<Layout location={'/admin/customers'} />}
          />
          <Route
            path="products"
            element={<Layout location={'/admin/products'} />}
          />
        </Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/user/:uid" element={<Navigate to="/authentication" />} />
        <Route path="/admin" element={<Admin />}>
          <Route
            path="dashboard"
            element={<Layout location={'/admin/dashboard'} />}
          />
          <Route
            path="customers"
            element={<Layout location={'/admin/customers'} />}
          />
          <Route
            path="products"
            element={<Layout location={'/admin/products'} />}
          />
        </Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
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
