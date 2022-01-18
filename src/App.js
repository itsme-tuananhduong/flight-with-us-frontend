import React, { useContext, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeContext } from './shared/context/ThemeProvider';

import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

import Home from './pages/Home';
import Result from './pages/Result';
import Booking from './pages/Booking';
import User from './pages/User';
import Authentication from './pages/Authentication';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

import Layout from './components/Admin/Layout';
import LoadingSpinner from './shared/components/LoadingSpinner';

// const Home = React.lazy(() => import('./pages/Home'));
// const Result = React.lazy(() => import('./pages/Result'));
// const Booking = React.lazy(() => import('./pages/Booking'));
// const User = React.lazy(() => import('./pages/User'));
// const Authentication = React.lazy(() => import('./pages/Authentication'));
// const Admin = React.lazy(() => import('./pages/Admin'));
// const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  const { theme } = useContext(ThemeContext);

  if (theme === 'dark') {
    document.body.style.backgroundColor = '#212121';
  } else {
    document.body.style.backgroundColor = '#fff';
  }

  const { token, login, logout, userId, isAdmin, username } = useAuth();

  let routes;
  let adminRoutes;

  if (isAdmin !== '0' && isAdmin !== null) {
    adminRoutes = (
      <Route path="/admin" element={<Admin />}>
        <Route
          path="dashboard"
          element={<Layout location={'/admin/dashboard'} />}
        />
        <Route
          path="flights"
          element={<Layout location={'/admin/flights'} />}
        />
        <Route
          path="add-flight"
          element={<Layout location={'/admin/add-flight'} />}
        />
        <Route
          path="accounts"
          element={<Layout location={'/admin/accounts'} />}
        />
        <Route
          path="passengers"
          element={<Layout location={'/admin/passengers'} />}
        />
        <Route
          path="invoice-detail"
          element={<Layout location={'/admin/invoice-detail'} />}
        />
      </Route>
    );
  } else {
    adminRoutes = (
      <Route path="/admin" element={<Admin />}>
        <Route path="dashboard" element={<Navigate to="/" />} />
        <Route path="customers" element={<Navigate to="/" />} />
        <Route path="products" element={<Navigate to="/" />} />
        <Route path="accounts" element={<Navigate to="/" />} />
        <Route path="passengers" element={<Navigate to="/" />} />
        <Route path="invoice-detail" element={<Navigate to="/" />} />
      </Route>
    );
  }

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result-week/*" element={<Result flag={0} />} />
        <Route path="/result-month/*" element={<Result flag={1} />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/authentication" element={<Navigate to="/" />} />

        <Route path="/user/:uid" element={<User />} />

        <Route path="/admin" element={<NotFound />} />
        {adminRoutes}

        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result-week/*" element={<Result flag={0} />} />
        <Route path="/result-month/*" element={<Result flag={1} />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/authentication" element={<Authentication />} />

        <Route path="/user/:uid" element={<User />} />

        <Route path="/admin" element={<NotFound />} />
        {adminRoutes}

        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        isAdmin: isAdmin,
        username: username,
        login: login,
        logout: logout,
      }}
    >
      <BrowserRouter>
        <main>
          <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
