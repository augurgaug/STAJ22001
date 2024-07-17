import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import "../css/register.css"
import { createUser } from '../api';

const Register = () => {
  const [register, setRegister] = useState({ username: "", password: "",password1: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");



  const handleChange=(e)=>{
        
  
   if(e.target.name==="username"){
    setRegister({...register, username: e.target.value});
console.log(register);}

    
    else if(e.target.name==="password"){
        setRegister({...register, password: e.target.value});
    console.log(register);}


    else {
        setRegister({...register, password1: e.target.value});
    console.log(register);}
}




const handleClick = async () => {
    if ( !register.username|| !register.password || !register.password1) {
      setError("Tüm kutuları doldurun");
      setTimeout(() => setError(""), 3000);


    } 
    else if ( register.password.length<6) {
    
      setError("Şifre minimum 6 haneli olmak zorunda");
      setTimeout(() => setError(""), 3000);

      

    } 




    else if (register.password ===register.password1) {
      try {
        const response = await createUser({
         
          username: register.username,
     
          password: register.password,

          
        });
        console.log(response); 
        
        navigate("/");
      } catch (error) {
        setError('Kullanıcı zaten mevcut!', error);
        setTimeout(() => setError(""), 3000);

      }
      } 
    else {   
      setError("Şifreler eşleşmiyor");
      setTimeout(() => setError(""), 3000);

    }
  };
  return (
    
   
    
    <div >
    <div >
      

      <div className='formdiv'>
        <Form className="form-reg" >
        <h2 className='title-reg2'>Kayıt Ol</h2>
        
        {error && <div className="error-message">{error}</div>}

          {/* <label htmlFor="name" className="col-form-label ">Kullanıcı Adı:</label> */}
      
          <Input
          className=" input " 
            type="text"
            name="username"
            value={register.username}
            placeHolder="Kullanıcı Adı"
            onChange={handleChange}
          />
   




          {/* <label htmlFor="password" className="col-form-label labell">Şifre</label> */}
          <Input
          className=" input" 
            type="password"
            name="password"
            value={register.password}
            placeHolder="Şifre"
            onChange={handleChange}
          /> 
         
         
         
          {/* <label htmlFor="password" className="col-form-label labell">Şifre tekrar</label> */}
          <Input
          className="input" 
            type="password"
            name="password2"
            value={register.password1}
            placeHolder="Şifre tekrar"
            onChange={handleChange}
          />



          <Button type="button" className=" button1   " label="KAYIT OL" onClick={handleClick} />
        </Form>
      </div>
    </div>
    </div>
  );
};

export default Register;