import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import "../css/customer.css"
import { createCustomer } from '../api';
import { useNavigate } from 'react-router-dom';

const Customer = () => {

  const [customer, setCustomer] = useState({ name: "", lastName: "", email: "",telNo:"",
    ulke:"", il:"", ilce:"", mahalle:"", sokak:"", binaNo:"",daireNo:"", banka:"", iban:"",
  });



  const [error, setError] = useState("");
const navigate= useNavigate();


  const handleChange=(e)=>{
        
  
   if(e.target.name==="name"){
    setCustomer({...customer, name: e.target.value});
console.log(customer);}

    
    else if(e.target.name==="lastName"){
        setCustomer({...customer, lastName: e.target.value});
    console.log(customer);}
   
    else if(e.target.name==="telNo"){
      setCustomer({...customer, telNo: e.target.value});
  console.log(customer);}
    else if (e.target.name==="email") {
        setCustomer({...customer, email: e.target.value});
    console.log(customer);}




    else if(e.target.name==="ulke"){
      setCustomer({...customer, ulke: e.target.value});
  console.log(customer);}
  else if(e.target.name==="il"){
      setCustomer({...customer, il: e.target.value});
  console.log(customer);}
  else if(e.target.name==="ilce"){
    setCustomer({...customer, ilce: e.target.value});
console.log(customer);}
  else if (e.target.name==="mahalle") {
      setCustomer({...customer, mahalle: e.target.value});
  console.log(customer);}
  else if(e.target.name==="sokak"){
    setCustomer({...customer, sokak: e.target.value});
console.log(customer);}
else if(e.target.name==="bina"){
  setCustomer({...customer, binaNo: e.target.value});
console.log(customer);}
else if (e.target.name==="daire") {
    setCustomer({...customer, daireNo: e.target.value});
console.log(customer);}


else if(e.target.name==="banka"){
  setCustomer({...customer, banka: e.target.value});
console.log(customer);}

else {setCustomer({...customer, iban:e.target.value});
console.log(customer);}

}




const handleClick = async () => {
    if ( !customer.name|| !customer.lastName || !customer.email  ||!customer.telNo
      ||!customer.ulke||!customer.il||!customer.ilce||!customer.mahalle||!customer.sokak
      ||!customer.binaNo||!customer.daireNo||!customer.banka||!customer.iban ) 
    {
      setError("Tüm kutuları doldurun");
      setTimeout(() => setError(""), 3000);


    } 
  




    else {
      try {
        const response = await createCustomer({
         
          name: customer.name,
          lastName: customer.lastName,
          email: customer.email,
          telNo: customer.telNo,


          ulke: customer.ulke,
          il: customer.il,
          ilce: customer.ilce,
          mahalle: customer.mahalle,
          sokak: customer.sokak, 
          binaNo: customer.binaNo,
          daireNo: customer.daireNo,
          
          
          banka: customer.banka,
          iban: customer.iban,

        });
        console.log(response); 
        
        alert("kayıt Başarılı");
       
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
        {error && <div className="error-message">{error}</div>}

        </div>
        


       <div className='Form-alan' >



        <div className='col-4'>
        <div className='form-body'>
       

        <h2 className='title-cust'>Kişisel Bilgiler</h2>
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
          </div>
          </div>







          <div className='col-4'>
        <div className='form-body'>
       

        <h2 className='title-cust'>Adres</h2>
          <Input
          className=" input " 
            type="text"
            name="ulke"
            value={customer.ulke}
            placeHolder="Ülke"
            onChange={handleChange}
          />
          <Input
          className=" input" 
            type="text"
            name="il"
            value={customer.il}
            placeHolder="İl"
            onChange={handleChange}
          /> 
          <Input
          className="input" 
            type="text"
            name="ilce"
            value={customer.ilce}
            placeHolder="İlçe"
            onChange={handleChange}
          />
           <Input
          className="input" 
            type="text"
            name="mahalle"
            value={customer.mahalle}
            placeHolder="Mahalle"
            onChange={handleChange}
          />
        <Input
          className="input" 
            type="text"
            name="sokak"
            value={customer.sokak}
            placeHolder="Sokak"
            onChange={handleChange}
          />
        <Input
          className="input" 
            type="text"
            name="bina"
            value={customer.binaNo}
            placeHolder="Bina No"
            onChange={handleChange}
          />
           <Input
          className="input" 
            type="text"
            name="daire"
            value={customer.daireNo}
            placeHolder="Daire No"
            onChange={handleChange}
          />
          </div>
          </div>







          <div className='col-4'>
        <div className='form-body'>

        <h2 className='title-cust'>Ödeme Bilgileri</h2>
          <Input
          className=" input " 
            type="text"
            name="banka"
            value={customer.banka}
            placeHolder="Banka"
            onChange={handleChange}
          />
          <Input
          className=" input" 
            type="text"
            name="iban"
            value={customer.iban}
            placeHolder="İban"
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