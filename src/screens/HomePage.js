import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';
import UserPassword from '../components/UserPassword';
import '../css/homepage.css';

const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState();

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'kullanici-list':
        return <UserList />;
      case 'kullanici-sifre':
        return <UserPassword />;
      default:
        return <div className='hmpage-1'>Hoşgeldiniz!</div>;
    }
  };

  return (
    <div className='bg'>
      <Navbar />
      <div className="icerik">
        <Sidebar onClick={handleClick} />
        <div className='hmpg' >
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;