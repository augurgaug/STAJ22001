
import '../css/customerlist.css';
import React, { useEffect, useState } from 'react';
import { fetchCustomers } from '../api';
import Button from "../components/Button"
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const customerData = await fetchCustomers();
        setCustomers(customerData);
      } catch (error) {
        setError('hata.');
      }
    };

    getCustomers();
  }, []);


  

  return (
    <div className="custL-card">
        <div className='custL-title'> <h2>Müşteri Listesi</h2>
        </div>
      {error && <div>{error}</div>}
      <div className='custL-body'>
      <table className='table'>
        <thead>
          <tr>
            {/* <th >ID</th> */}
            <th>Ad</th>
            <th>Soyad</th>
            <th>Email</th>
            <th>Adres</th>
            <th>Detalar</th>
            
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {customers.map((customer) => (
            <tr key={customer.customerId}>
              {/* <td>{customer.customerId}</td> */}
              <td>{customer.name}</td>
              <td>{customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td><Button type="button" className="custL-button" onClick={()=>{ navigate(`/a`);}} label="DETAILS"></Button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CustomerList;
