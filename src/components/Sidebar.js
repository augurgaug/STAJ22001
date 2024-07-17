import React from 'react';
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faHorse} from '@fortawesome/free-solid-svg-icons';
import '../css/sidebar.css';

const Sidebar = ({ onClick }) => {
  return (
    <div className="sidebar">
      <div className='sidebar-header'> <FontAwesomeIcon className='icon' icon={faHorse} />HomePage</div>
      <Button  className='sidebar-button' onClick={() => onClick('kullanici-list')} label="Kullanıcı Listesi "><FontAwesomeIcon className='icon' icon={faUser} /> </Button>
      <Button  className='sidebar-button' onClick={() => onClick('kullanici-sifre')} label="Kullanıcı Sifresi"><FontAwesomeIcon className='icon' icon={faKey} /></Button>

    </div>
  );
};

export default Sidebar;
