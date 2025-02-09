import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import Homepage from './screens/HomePage';

const App = () => {
  return (
    <div>
      <main>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/homepage/*" element={<Homepage />} />
    
      </Routes>
    </Router>
    </main>
    </div>
  );
};

export default App;
