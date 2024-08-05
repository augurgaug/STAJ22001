import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { fetchCariId } from '../api';
import '../css/caridetails.css'
import Button from '../components/Button';

const CariDetail = () => {
    const { id } = useParams();
    const [cari, setCari]= useState([]);
   
   
    useEffect(()=>{
const a= async()=>{try {
    const cariData = await fetchCariId(id);
    setCari(cariData);
  } catch (error) {
  alert(    "hata")}}
a()




        },[id]);
  return (
    <div>
        
     


     
        <div className='title'><h2>Cari detay</h2></div>
        
      <div className='containerr'>

      <div className='item item1'>
        <p> <strong>Ad:</strong> {cari.name}</p>
        <p> <strong>Soyad:</strong> {cari.last_name}</p>
        <p> <strong>Email:</strong> {cari.email}</p>
        <p> <strong>Telefon Numarası:</strong> {cari.tel_no}</p>
       
        
        
      </div>
      <div className='item item2'>
      <p> <strong>Adres: </strong>{cari.mahalle} mah. {cari.sokak} sk. no:{cari.bina_no} daire:{cari.daire_no}    {cari.ulke}/{cari.il}/{cari.ilce}</p>
      <p> <strong>Banka: </strong>{cari.banka} </p>
      <p> <strong>İban: </strong>{cari.iban} </p>

   

      <Button type="button" className="custUpdate-button" onClick={()=>(console.log("a"))} label="UPDATE"></Button>
             <Button type="button" className="custL-del-button" onClick={()=>(console.log("a"))} label="DELETE"></Button>
      </div>
      
      </div>
    
      

   
        
    </div>
  )
}

export default CariDetail
