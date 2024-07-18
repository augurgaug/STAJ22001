import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import Homepage from './screens/HomePage';
import UserList from './components/UserList';
import Cari from './components/Cari';
const App = () => {
  return (
    <div>
      <main>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/a" element={<UserList />} />
        <Route path="/b" element={<Cari />} />
      </Routes>
    </Router>
    </main>
    </div>
  );
};

export default App;
