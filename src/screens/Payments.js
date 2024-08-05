
import '../css/carilist.css';
import React, { useEffect, useState } from 'react';
import { fetchCaris, fetchPayments } from '../api';

const Payments = () => {
  const [finances, setFinances] = useState([]);
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCaris = async () => {
      try {
        const cariData = await fetchCaris();
        setFinances(cariData);
      } catch (error) {
        setError('hata.');
      }


    };

    const getPayments = async () => {
      try {
        const paymentData = await fetchPayments();
        setPayments(paymentData);
      } catch (error) {
        setError('hata.');
      }


    };


    getCaris();
    getPayments();
    
  }, []);

  const getCariName = (id) => {
    const cari = finances.find(f => f.id === id);
    if (!cari) {
      return '';
    }
    return `${cari.name} ${cari.last_name}`;
  };
  

  return (
    <div className="custL-card">

        <div className='custL-title'> <h2>ÖDEMELER</h2>

        </div>
      {error && <div>{error}</div>}
      <div className='custL-body'>
        
      <table  className='table table-dark table-striped table-hover table-bordered  border-success'>
        <thead>
          <tr>

            <th>Ad Soyad</th>
            <th>İslem Tipi</th>
            <th>İslem Miktarı</th>
            <th>İslem Aciklama</th>
            <th> İslem Tarihi</th>
            
           
            
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {payments.map((payment) => (
            <tr key={payment.id}>
              

              <td>{getCariName(payment.cari_id)}</td>

              <td>{payment.odeme_tipi}</td>
              <td>{payment.miktar}</td>
              <td  className='th'>{payment.aciklama}</td>
              <td>{payment.tarih}</td>

            </tr>
          ))}

        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Payments;
