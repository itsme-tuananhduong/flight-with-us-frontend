import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
      <main>
        <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
      </main>
    </BrowserRouter>
  );
};

export default App;
