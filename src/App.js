import { useContext, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeContext } from './shared/context/ThemeProvider';

import Home from './pages/Home';
import Result from './pages/Result';
import Booking from './pages/Booking';
import User from './pages/User';
import Authentication from './pages/Authentication';
import UserInfo from './components/UserInfo/UserInfo';
import SearchByMonth from './components/SearchByMonth';
import SearchByWeek from './components/SearchByWeek';
import Layout from './components/admin/Layout';
import Customer from './pages/admin/Customers';

const App = () => {
  const { theme } = useContext(ThemeContext);

  if (theme === 'dark') document.body.style.backgroundColor = '#212121';
  else {
    document.body.style.backgroundColor = '#fff';
  }

  const token = true;
  let routes;

  // if (token) {
  //   routes = (
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/result' element={<Result />} />
  //       <Route path='/booking' element={<Booking />} />
  //       {/* <Route path='/admin' element={<Layout />} /> */}
  //       <Route path='/user/:uid' element={<User />} />
  //       <Route path='*' element={<Navigate to='/' />} />
  //     </Routes>
  //   );
  // } else {
  //   routes = (
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/result' element={<Result />} />
  //       <Route path='/booking' element={<Booking />} />
  //       <Route path='/authentication' element={<Authentication />} />

  //       <Route path='/user/:uid' element={<Navigate to='/authentication' />} />
  //       <Route path='*' element={<Navigate to='/' />} />
  //     </Routes>
  //   );
  // }

  return (
    // <BrowserRouter>
    //   <main>
    //     {/* <UserInfo /> */}
    //     {/* <SearchByMonth /> */}
    //     {/* <Customer /> */}
    //     {/* <SearchByWeek /> */}
    //     <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    //   </main>
    // </BrowserRouter>
    <Layout />
  );
};

export default App;
