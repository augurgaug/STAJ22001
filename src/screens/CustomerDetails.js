import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { fetchCustomerId } from '../api';
import '../css/customerdetails.css'
import Button from '../components/Button';

const CustomerDetail = () => {
    const { id } = useParams();
    const [customer, setCustomer]= useState([]);
   
   
    useEffect(()=>{
const a= async()=>{try {
    const customerData = await fetchCustomerId(id);
    setCustomer(customerData);
  } catch (error) {
  alert(    "hata")}}
a()




        },[id]);
  return (
    <div>
        
     


     
        <div className='title'><h2>Müşteri detay</h2></div>
        
      <div className='containerr'>

      <div className='item item1'>
        <p> <strong>Ad:</strong> {customer.name}</p>
        <p> <strong>Soyad:</strong> {customer.lastName}</p>
        <p> <strong>Email:</strong> {customer.email}</p>
        <p> <strong>Telefon Numarası:</strong> {customer.telNo}</p>
       
        
        
      </div>
      <div className='item item2'>
      <p> <strong>Adres: </strong>{customer.mahalle} mah. {customer.sokak} sk. no:{customer.binaNo} daire:{customer.daireNo}    {customer.ulke}/{customer.il}/{customer.ilce}</p>
      <p> <strong>Banka: </strong>{customer.banka} </p>
      <p> <strong>İban: </strong>{customer.iban} </p>

   

      <Button type="button" className="custUpdate-button" onClick={()=>(console.log("a"))} label="UPDATE"></Button>
             <Button type="button" className="custL-del-button" onClick={()=>(console.log("a"))} label="DELETE"></Button>
      </div>
      
      </div>
    
      

   
        
    </div>
  )
}

export default CustomerDetail
