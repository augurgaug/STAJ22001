import React from 'react';
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign, faHorse,faClipboard} from '@fortawesome/free-solid-svg-icons';
import '../css/sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onClick }) => {
 const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className='sidebar-header' onClick={() => navigate('/homepage')}> <FontAwesomeIcon className='icon' icon={faHorse}/>HomePage</div>
      <Button  className='sidebar-button' onClick={() => navigate('/homepage/userlist')} label="Kullanıcı Listesi "><FontAwesomeIcon className='icon' icon={faUser} /> </Button>
      <Button  className='sidebar-button' onClick={() => navigate('/homepage/carilist')} label="Cari Listesi"><FontAwesomeIcon className='icon' icon={faClipboard} /></Button>
      <Button  className='sidebar-button' onClick={() => navigate('/homepage/cari')} label="Cari"><FontAwesomeIcon className='icon' icon={faDollarSign} /></Button>
      <Button  className='sidebar-button' onClick={() => navigate('stock')} label="Stok"><FontAwesomeIcon className='icon' icon={faClipboard} /></Button>

    </div>
  );
};

export default Sidebar;
