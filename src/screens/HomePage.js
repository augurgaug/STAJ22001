import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import UserList from './UserList';
import Carii from '../components/Carii';
import Stock from '../components/Stock';
import Cari from './Cari';
import Register from '../screens/Register'
import '../css/homepage.css';
import CariList from './CariList';
import { Routes, Route, useLocation } from 'react-router-dom';
import CariDetail from './CariDetails';

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
                <Route path="/userlist/register" element={<Register />} />
                {/* <Route path="user/:id" element={<Login/>} /> */}
                
                <Route path="/carii" element={<Carii />} />
                <Route path="/cari/:id" element={<Cari />} />
                <Route path="/cari" element={<Cari />} />
                <Route path="/cariList" element={<CariList />} />
                <Route path="/cariDetail/:id" element={<CariDetail />} />
                <Route path="/userDetail" element={<UserList />} />
       </Routes>
        </div>
     
       

        </div>




      </div>
      </div>
    </div>
  );
  
};

export default HomePage;