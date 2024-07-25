import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';
import Cari from '../components/Cari';
import Stock from '../components/Stock';
import Customer from './Customer';
import '../css/homepage.css';
import CustomerList from './CustmerList';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomerDetail from './CustomerDetails';

const HomePage = () => {
  const location = useLocation();
const[isOnlyHmpg, setisOnlyHmpg]=useState(false);

 

 useEffect(() => {
  if (location.pathname === '/homepage') {
    setisOnlyHmpg(true)

  } else {
    setisOnlyHmpg(false)

  }
}, [location]);


  return (
    <div className='homepage'>
      <Navbar />
      <Sidebar  />

      <div className="orta">
      
        <div className='icerik' >
        <div className='icerik1' >
        <div className="o-ust">
        {isOnlyHmpg ? <div className='giris'>Hoşgeldiniz</div>:''}

       <Routes>
                <Route path="/userlist" element={<UserList />} />
                <Route path="/stock" element={<Stock />} />

                <Route path="/cari" element={<Cari />} />
                <Route path="/customer/:id" element={<Customer />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/customerList" element={<CustomerList />} />
                <Route path="/customerDetail/:id" element={<CustomerDetail />} />
       </Routes>
        </div>
     
       

        </div>




      </div>
      </div>
    </div>
  );
  
};

export default HomePage;