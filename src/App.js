import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import BoxCard from "./components/BoxCard/BoxCard";
// import CustomerCare from "./components/CustomerCare/CustomerCare.jsx";
// import FormSearch from "./components/FormSearch/FormSearch";
// import UserInfo from "./components/UserInfo/UserInfo";
// import SignIn from "./pages/SignIn/SignIn";
// import SignUp from "./pages/SignUp/SignUp"
// import BoxNguoiThanhToan from "./components/BoxNguoiThanhToan/BoxNguoiThanhToan";
import HinhThucThanhToan from './components/BoxHinhThucThanhToan/HinhThucThanhToan';


const App = () => {
  const token = false;
  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/result" element={<div>result</div>} />
        <Route path="/booking" element={<div>booking</div>} />
        <Route path="/user/:uid/flights" element={<div>user flight</div>} />
        <Route path="/user/:uid" element={<div>user</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/result" element={<div>result</div>} />
        <Route path="/booking" element={<div>booking</div>} />
        <Route path="/authenticate" element={<div>authenticate</div>} />
        <Route path="*" element={<Navigate to="/authenticate" />} />
      </Routes>
    );
  }

  return (
    <BrowserRouter>
      <nav>Navbar</nav>
      {/* <FormSearch /> */}
      {/* <BoxNguoiThanhToan/> */}
      {/* <CustomerCare />
      <BoxCard />
      <UserInfo/> */}
      {/* <SignIn/>
      <SignUp/> */}
      <HinhThucThanhToan/>
      <main>
        <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
      </main>
    </BrowserRouter>
  );
};

export default App;
