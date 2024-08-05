import '../css/userlist.css';
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';
import Button from "../components/Button"
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (error) {
        setError('hata.');
      }
    };

    getUsers();
  }, []);


  

  return (
    <div className="custL-card">
        <Button  className='custR-button' onClick={() => navigate('register')} label="YENİ "> </Button>

        <div className='custL-title'> <h2>Kullanıcı Listesi</h2>

        </div>
      {error && <div>{error}</div>}
      <div className='custL-body'>
        
      <table className='table table-striped table-light table-hover'>
        <thead>
          <tr>
            {/* <th >ID</th> */}
            <th>Kullanıcı Adı</th>
            {/* <th>Detay</th> */}
           
            
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.user_name}</td>
              
              {/* <td><Button type="button" className="custL-button" onClick={()=>{ navigate(`/homepage/user/${user.id}`);}} label="DETAILS"></Button></td> */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserList;
