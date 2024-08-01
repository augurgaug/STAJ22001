
import '../css/carilist.css';
import React, { useEffect, useState } from 'react';
import { fetchCaris } from '../api';
import Button from "../components/Button"
import { useNavigate } from 'react-router-dom';

const Finance = () => {
  const [finances, setFinances] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCaris = async () => {
      try {
        const cariData = await fetchCaris();
        setFinances(cariData);
      } catch (error) {
        setError('hata.');
      }
    };

    getCaris();
  }, []);


  

  return (
    <div className="custL-card">
        {/* <Button  className='custR-button' onClick={() => navigate('/homepage/cari')} label="YENİ "> </Button> */}

        <div className='custL-title'> <h2>FINANCE TABLE</h2>

        </div>
      {error && <div>{error}</div>}
      <div className='custL-body'>
        
      <table className='table'>
        <thead>
          <tr>
            {/* <th >ID</th> */}
            <th>Ad Soyad</th>
            <th>Borc</th>
            <th>Alacak</th>
            <th>İslem</th>
           
            
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {finances.map((cari) => (
            <tr key={cari.cariId}>
              {/* <td>{cari.cariId}</td> */}
              <td>{cari.name} {cari.lastName}</td>
              <td>{cari.borc}</td>
              <td>{cari.alacak}</td>
              <td><Button type="button" className="custL-button" onClick={()=>{ navigate(`/homepage/financedetail/${cari.cariId}`);}} label="ODEME"></Button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Finance;
