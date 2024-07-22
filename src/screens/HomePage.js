import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';
import Cari from '../components/Cari';
import Stock from '../components/Stock';
import Customer from './Customer';
import '../css/homepage.css';
import CustomerList from './CustmerList';

const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState();

  const handleClick = (component) => {
    setActiveComponent(component);
  };





  const renderComponent = () => {
    switch (activeComponent) {
      case 'kullanici-list':
        return <UserList />;
        case 'musteri-list':
          return <CustomerList />;
        case 'cari':
          return <Cari />;
      case 'stok':
        return <Stock />;
        case 'musteri':
        return <Customer />;
      default:
        return <div className='giris'>Hoşgeldinizz</div>;
    }
  };



  return (
    <div className='homepage'>
      <Navbar />
      <Sidebar onClick={handleClick} />

      <div className="orta">
      
        
        <div className='icerik' >
        <div className='icerik1' >

        <div className="o-ust">
        {renderComponent()}

      
        </div>
     
       

        </div>




      </div>
      </div>
    </div>
  );
};

export default HomePage;