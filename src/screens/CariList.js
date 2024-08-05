
import '../css/carilist.css';
import React, { useEffect, useState } from 'react';
import { fetchCaris } from '../api';
import Button from "../components/Button"
import { useNavigate } from 'react-router-dom';

const CariList = () => {
  const [caris, setCaris] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCaris = async () => {
      try {
        const cariData = await fetchCaris();
        setCaris(cariData);
      } catch (error) {
        setError('hata.');
      }
    };

    getCaris();
  }, []);


  

  return (
    <div className="custL-card">
        <Button  className='custR-button' onClick={() => navigate('/homepage/cari')} label="YENİ "> </Button>

        <div className='custL-title'> <h2>Cari Listesi</h2>

        </div>
      {error && <div>{error}</div>}
      <div className='custL-body'>
        
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            {/* <th >ID</th> */}
            <th>Ad</th>
            <th>Soyad</th>
            <th>Email</th>
            <th>Telefon Numarası</th>
            <th>Detaylar</th>
            
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {caris.map((cari) => (
            <tr key={cari.id}>
              {/* <td>{cari.cariId}</td> */}
              <td>{cari.name}</td>
              <td>{cari.last_name}</td>
              <td>{cari.email}</td>
              <td>{cari.tel_no}</td>
              <td><Button type="button" className="custL-button" onClick={()=>{ navigate(`/homepage/cari/${cari.id}`);}} label="DETAILS"></Button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CariList;
