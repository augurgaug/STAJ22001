import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import "../css/customer.css"
import { createCustomer } from '../api';
import { useNavigate } from 'react-router-dom';

const Customer = () => {
  const [customer, setCustomer] = useState({ name: "", lastName: "", email: "", address:"",telNo:""});
  const [error, setError] = useState("");
const navigate= useNavigate();


  const handleChange=(e)=>{
        
  
   if(e.target.name==="name"){
    setCustomer({...customer, name: e.target.value});
console.log(customer);}

    
    else if(e.target.name==="lastName"){
        setCustomer({...customer, lastName: e.target.value});
    console.log(customer);}
    else if(e.target.name==="address"){
        setCustomer({...customer, address: e.target.value});
    console.log(customer);}
    else if(e.target.name==="telNo"){
      setCustomer({...customer, telNo: e.target.value});
  console.log(customer);}


    else {
        setCustomer({...customer, email: e.target.value});
    console.log(customer);}
}




const handleClick = async () => {
    if ( !customer.name|| !customer.lastName || !customer.email || !customer.address ||!customer.telNo) {
      setError("Tüm kutuları doldurun");
      setTimeout(() => setError(""), 3000);


    } 
  




    else {
      try {
        const response = await createCustomer({
         
          name: customer.name,
     
          lastName: customer.lastName,
          
          email: customer.email,
          
          address: customer.address,
          telNo: customer.telNo,

        });
        console.log(response); 
        
        navigate("/customerList");
       
      } catch (error) {
        setError('müşteri zaten mevcut!', error);
        setTimeout(() => setError(""), 3000);

      }
      } 
  
  };
  return (
    
   
    
    <div >
    <div >
      

      <div className='formdiv'>
        <Form className="form-cust" >

          <div className='title-area'>
        <h2 className='title-cust'>Müşteri Kayıt</h2>
        </div>
        
        <div className='Form-alan' >
        <div className='col-6'>
        <div className='form-body'>
       
        {error && <div className="error-message">{error}</div>}

      
          <Input
          className=" input " 
            type="text"
            name="name"
            value={customer.name}
            placeHolder="Ad"
            onChange={handleChange}
          />
   




          <Input
          className=" input" 
            type="text"
            name="lastName"
            value={customer.lastName}
            placeHolder="Soyad"
            onChange={handleChange}
          /> 
         
         
         
          <Input
          className="input" 
            type="email"
            name="email"
            value={customer.email}
            placeHolder="Email"
            onChange={handleChange}
          />
           <Input
          className="input" 
            type="tel"
            name="telNo"
            value={customer.telNo}
            placeHolder="telNo"
            onChange={handleChange}
          />

        <Input
          className="input" 
            type="text"
            name="address"
            value={customer.address}
            placeHolder="Adres"
            onChange={handleChange}
          />



          <Button type="button" className=" button-cust   " label="KAYIT ET" onClick={handleClick} />
          </div>
          </div>
          <div className='col-6'>
        <div className='form-body'>
       
        {error && <div className="error-message">{error}</div>}

      
          <Input
          className=" input " 
            type="text"
            name="name"
            value={customer.name}
            placeHolder="Ad"
            onChange={handleChange}
          />
   




          <Input
          className=" input" 
            type="text"
            name="lastName"
            value={customer.lastName}
            placeHolder="Soyad"
            onChange={handleChange}
          /> 
         
         
         
          <Input
          className="input" 
            type="email"
            name="email"
            value={customer.email}
            placeHolder="Email"
            onChange={handleChange}
          />
           <Input
          className="input" 
            type="tel"
            name="telNo"
            value={customer.telNo}
            placeHolder="telNo"
            onChange={handleChange}
          />

        <Input
          className="input" 
            type="text"
            name="address"
            value={customer.address}
            placeHolder="Adres"
            onChange={handleChange}
          />



          <Button type="button" className=" button-cust   " label="KAYIT ET" onClick={handleClick} />
          </div>
          </div>
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default Customer;