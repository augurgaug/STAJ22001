import React, { useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import { Link, useNavigate } from 'react-router-dom';
import "../css/login.css";
import { loginUser } from '../api';

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    if(e.target.type==="text"){
        setUser({...user, username: e.target.value});
    console.log(user);}
   
    else {
        setUser({...user, password: e.target.value});
    console.log(user);}
  };
  const handleClick = async () => {
    if (!user.username || !user.password) {
      setError("Tüm kutuları doldurun");
    
       setTimeout(() => setError(""), 3000);
    } else {
      try {
        const loggedInUser = await loginUser(user);
        console.log(loggedInUser);
       
        navigate("/homepage");
      } catch (error) {
        setError("Kullanıcı adı veya parola hatalı");
        setTimeout(() => setError(""), 3000);
      }
    }
  };



  const handleClick1 = () => {
    navigate("/register");}

    
  return (
    <div >
      <div>
        <Form className="form-container">
          <div >
            <div className="form-log form">
              {/* <FontAwesomeIcon icon="fa-light fa-circle" style={{ color: "#e60000", }} />
              <FontAwesomeIcon icon="fa-light fa-circle" style={{ color: "#e60000", }} />
              <FontAwesomeIcon icon="fa-light fa-circle" style={{ color: "#e60000", }} />
              <FontAwesomeIcon icon="fa-light fa-circle" style={{ color: "black", }} /> */}
              <h2 className='title-log'>Giriş Yap</h2>
        {error && <div >{error}</div>}

              <p className='circle' >
                <span role="img" aria-label="red circle">⭕</span>
                <span role="img" aria-label="red circle">⭕</span>
                <span role="img" aria-label="red circle">⭕</span>
              </p>
              <p className='p-log'>or use your account</p>
              <Input className=" input " type="text" value={user.username} placeHolder="Kullanıcı Adı" onChange={handleChange} /><br />
              <Input className=" input input-top" type="password" value={user.password} placeHolder="Şifre" onChange={handleChange} />
              <Link to="/forgotpass" className='forgot'>Şifremi Unuttum</Link>
              <Button type="button" className="buttonlog " onClick={handleClick} label="GİRİŞ YAP" />
            </div>
          </div>
          <div >
            <div className="form form-reg2">
              <h2 className='titlee-reg2'>Merhaba!</h2>
              <p className='p-reg2'>Kişisel bilgilerinizi girin ve bizimle yolculuğa başlayın</p>
              <Button type="button" className="btn buttonreg2" label="KAYIT OL" onClick={handleClick1} />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
