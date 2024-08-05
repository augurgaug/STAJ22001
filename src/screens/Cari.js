import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import "../css/cari.css"
import { createCari, deleteCari, fetchCariId, updateCari } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteModal from '../modals/DeleteModal'
import AlertModal from '../modals/AlertModal'
const Cari = () => {
  const { id } = useParams();
  const [cari, setCari] = useState({ name: "", last_name: "", email: "",tel_no:"",
    ulke:"", il:"", ilce:"", mahalle:"", sokak:"", bina_no:"",daire_no:"", banka:"", iban:"",
  });


  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate= useNavigate();

  const getData = async () => {
    try {
      const cariData = await fetchCariId(id);
      setCari(cariData);
    } catch (error) {
      setError("Cari verileri yüklenirken hata oluştu.");
    }
  };


  useEffect(() => {
    if (id) {
      setEditMode(true);
      getData();
    }
  }, [id]);






  const handleChange=(e)=>{
        
  
   if(e.target.name==="name"){
    setCari({...cari, name: e.target.value});
console.log(cari);}

    
    else if(e.target.name==="lastName"){
        setCari({...cari, last_name: e.target.value});
    console.log(cari);}
   
    else if(e.target.name==="telNo"){
      setCari({...cari, tel_no: e.target.value});
  console.log(cari);}
    else if (e.target.name==="email") {
        setCari({...cari, email: e.target.value});
    console.log(cari);}




    else if(e.target.name==="ulke"){
      setCari({...cari, ulke: e.target.value});
  console.log(cari);}
  else if(e.target.name==="il"){
      setCari({...cari, il: e.target.value});
  console.log(cari);}
  else if(e.target.name==="ilce"){
    setCari({...cari, ilce: e.target.value});
console.log(cari);}
  else if (e.target.name==="mahalle") {
      setCari({...cari, mahalle: e.target.value});
  console.log(cari);}
  else if(e.target.name==="sokak"){
    setCari({...cari, sokak: e.target.value});
console.log(cari);}
else if(e.target.name==="bina"){
  setCari({...cari, bina_no: e.target.value});
console.log(cari);}
else if (e.target.name==="daire") {
    setCari({...cari, daire_no: e.target.value});
console.log(cari);}


else if(e.target.name==="banka"){
  setCari({...cari, banka: e.target.value});
console.log(cari);}

else {setCari({...cari, iban:e.target.value});
console.log(cari);}

}




const handleClick = async () => {

    if ( !cari.name|| !cari.last_name || !cari.email  ||!cari.tel_no
      ||!cari.ulke||!cari.il||!cari.ilce||!cari.mahalle||!cari.sokak
      ||!cari.bina_no||!cari.daire_no||!cari.banka||!cari.iban ) 
    {
      setError("Tüm kutuları doldurun");
      setTimeout(() => setError(""), 3000);


    } 
  




    else {
      try {
        if (editMode) {
          await updateCari(id, 
            
            {name: cari.name,
          last_name: cari.last_name,
          email: cari.email,
          tel_no: cari.tel_no,


          ulke: cari.ulke,
          il: cari.il,
          ilce: cari.ilce,
          mahalle: cari.mahalle,
          sokak: cari.sokak, 
          bina_no: cari.bina_no,
          daire_no: cari.daire_no,
          
          
          banka: cari.banka,
          iban: cari.iban,});
          setShowAlert(true) 
    setTimeout(() =>navigate("/homepage/cariList"), 3000);
  } 
          
          else {
        const response = await createCari({
         
          name: cari.name,
          last_name: cari.last_name,
          email: cari.email,
          tel_no: cari.tel_no,


          ulke: cari.ulke,
          il: cari.il,
          ilce: cari.ilce,
          mahalle: cari.mahalle,
          sokak: cari.sokak, 
          bina_no: cari.bina_no,
          daire_no: cari.daire_no,
          
          
          banka: cari.banka,
          iban: cari.iban,

        });
        console.log(response); 
        
        setShowAlert(true) 
    setTimeout(() =>navigate("/homepage/cariList"), 3000);

      }
      } catch (error) {
        setError('Cari zaten mevcut!', error);
        setTimeout(() => setError(""), 3000);

      }
      } 

  };



  const handleDelete = async () => {
  setShowDelete(true)

    if (showDelete) {
      try {
        await deleteCari(id);
        navigate("/homepage/cariList");
      } catch (error) {
        setError('Silme işlemi sırasında hata oluştu.');
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
        <h2 className='title-cust'>{editMode ? 'Cari Güncelle' : 'Cari Kayıt'}</h2>
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
            value={cari.name}
            placeHolder="Ad"
            onChange={handleChange}
          />
          <Input
          className=" input" 
            type="text"
            name="lastName"
            value={cari.last_name}
            placeHolder="Soyad"
            onChange={handleChange}
          /> 
          <Input
          className="input" 
            type="email"
            name="email"
            value={cari.email}
            placeHolder="Email"
            onChange={handleChange}
          />
           <Input
          className="input" 
            type="tel"
            name="telNo"
            value={cari.tel_no}
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
            value={cari.ulke}
            placeHolder="Ülke"
            onChange={handleChange}
          />
          <Input
          className=" input" 
            type="text"
            name="il"
            value={cari.il}
            placeHolder="İl"
            onChange={handleChange}
          /> 
          <Input
          className="input" 
            type="text"
            name="ilce"
            value={cari.ilce}
            placeHolder="İlçe"
            onChange={handleChange}
          />
           <Input
          className="input" 
            type="text"
            name="mahalle"
            value={cari.mahalle}
            placeHolder="Mahalle"
            onChange={handleChange}
          />
        <Input
          className="input" 
            type="text"
            name="sokak"
            value={cari.sokak}
            placeHolder="Sokak"
            onChange={handleChange}
          />
        <Input
          className="input" 
            type="text"
            name="bina"
            value={cari.bina_no}
            placeHolder="Bina No"
            onChange={handleChange}
          />
           <Input
          className="input" 
            type="text"
            name="daire"
            value={cari.daire_no}
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
            value={cari.banka}
            placeHolder="Banka"
            onChange={handleChange}
          />
          <Input
          className=" input" 
            type="text"
            name="iban"
            value={cari.iban}
            placeHolder="İban"
            onChange={handleChange}
          /> 
  

        <div className='button-div'>
        <Button type="button" className=" button-cust   " label="KAYIT ET" onClick={handleClick} />

        {editMode && <Button type="button" className="button-cust-delete" label="SİL" onClick={handleDelete} />}

        </div>
          </div>
          </div>
          </div>
        </Form>
      </div>
    </div>
    <DeleteModal
        showD={showDelete}
        handleClose={() => setShowDelete(false)}
        handleConfirm={handleDelete}
      />

<AlertModal
        showA={showAlert}
        handleClose={() => setShowAlert(false)}
        handleConfirm={handleDelete}
      />
    </div>
  );
};

export default Cari;