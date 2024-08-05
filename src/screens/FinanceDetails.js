import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';
import { createFinance, fetchCariId,updateCariFinance } from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import AlertModal from '../modals/AlertModal'
import "../css/financedetail.css"







const FinanceDetails = () => {
  const { id } = useParams();
  const [isYap, setIsYap]= useState();
  const [isAl, setIsAl]= useState();
  const [cari, setCari] = useState([]);
  const [aciklamaa, setAciklamaa]= useState();
  const [odemeTip, setOdemeTip]= useState();
  const financeDate = new Date()
  const [odenen, setOdenen]= useState({al:0,yap:0});
  const [girilenMiktar, setGirilenMiktar]= useState();


  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate= useNavigate();

 





  useEffect(() => {

    const getData = async () => {
      try {
        const cariData = await fetchCariId(id);
        setCari(cariData);
      } catch (error) {
        setError("Cari verileri yüklenirken hata oluştu.");
      }
    };


    
    if (id) {
      getData();
    }
  }, [id]);

  




  const handleChange=(e)=>{
        


    if(e.target.name==="borc"){
      setCari({...cari, borc: parseFloat(e.target.value)});
    console.log(cari);}
    
    else if(e.target.name==="alacak"){
      setCari({...cari, alacak: parseFloat(e.target.value)});
    console.log(cari);}
    
    else if(e.target.name==="odemeYap"){
        setOdenen({...odenen, yap: parseFloat(e.target.value)});
        setGirilenMiktar(e.target.value)
     }
    
      else if(e.target.name==="odemeAl"){

        setOdenen({...odenen, al: parseFloat(e.target.value)});
        setGirilenMiktar(e.target.value)
    
    }
    
    else if(e.target.name==="aciklama"){
      setAciklamaa(e.target.value);
    
    }
    
    }
    
    
 

  const handleClick = async () => {
    const Decimal = require('decimal.js');

    const a = new Decimal(cari.borc).plus(odenen.al);
    const b = new Decimal(cari.alacak).plus(odenen.yap);
    
    try {

      await updateCariFinance(id, {
        borc: a,
        alacak: b,
    
      });

      await createFinance(
        
        {



        cari_id: id,
        tarih: financeDate,
        odeme_tipi: odemeTip,
        miktar: parseFloat(girilenMiktar),
        aciklama: aciklamaa
      });

      setShowAlert(true);
      setTimeout(() => navigate("/homepage/finance"), 3000);
    } catch (error) {
      setError('Cari zaten mevcut!', error);
      setTimeout(() => setError(""), 3000);
    
    }


  };
  const handleSec =  (e) => {

     
    setOdemeTip(e.target.value)
        
       if (e.target.value==="Nakit Tahsilat"||e.target.value==="Gelen Havale"||e.target.value==="Pos Tahsilat")
          { setIsYap(false)
            setIsAl(true)}
      
            
            
            
       
            else if(e.target.value===""){ setIsYap(false)
              setIsAl(false)}
  
             else{
                setIsYap(true)
                setIsAl(false)
              }
          }
       
  
      
  
  
  
  
  
  
  
  
  

          const ad= cari.name+"  "+cari.last_name

  return (
     
   
    
    <div >

<div ></div>




    <div >
      

      <div className='formdiv'>
        <Form className="form-fd" >

          <div className='title-area-fd'>

        <h2 className='title-fd'> Finance Detail</h2>
        {error && <div className="error-message">{error}</div>}

        </div>
        


       <div className='Form-alan' >



       <div className='col-6'>
        <div className='form-body-fd'>


        <strong className='strong-fd'> Cari: </strong>
    <Input readonly
          className=" input input-fd" 
            type="text"
            name="ad"
            value={ad} 
            placeHolder="borc"
            onChange={handleChange}
          />

 <strong className='strong-fd'> Total Borç: </strong>
       
       <div >
       
       <Input readonly
          className=" input input-fd" 
            type="text"
            name="borc"
            value={cari.borc}
            placeHolder="borc"
            onChange={handleChange}
          /></div>



<strong className='strong-fd'> Total Alacak: </strong>

        <Input
          className=" input input-fd" 
            type="text"
            name="alacak"
            value={cari.alacak}
            placeHolder="alacak"
            onChange={handleChange}
          />
      
         

      <strong className='strong-fd'> Tarih: </strong>

    <Input
          className=" input input-fd" 
            type="text"
            name="tarih"
            value={financeDate}
            placeHolder="alacak"
            onChange={handleChange}
          />



          </div>
          </div>



       

          <div className='col-6'>
        <div className='form-body'>
        <div >
       
        <select className='select-fd' onChange= {handleSec}>
        <option value="sec">Ödeme Yöntemi Seçin</option>
        <option name="nakit-tahsilat" value="Nakit Tahsilat">Nakit Tahsilat</option>
        <option name="gelen-havale" value="Gelen Havale">Gelen Havale</option>
        <option name="pos-tahsilat" value="Pos Tahsilat">Pos Tahsilat</option>
        <option name="nakit-odeme" value="Nakit Ödeme"  >Nakit Ödeme</option>
        <option name="giden-havale" value="Giden Havale" >Giden Havale</option>
        <option name="kredikartı-odeme" value="Kredi Kartı İle Ödeme"  >Kredi Kartı İle Ödeme </option>

      </select>
  </div>

    
        <div >
  
 

  </div>

  {isYap && <div><div>
<strong className='strong-fd'> Miktar: </strong>
</div>
<Input

            className=" input input-fd" 
              type="number"
              name="odemeYap"
              value={odenen.yap}
              placeHolder="odeme yapılacak tutar"
              onChange={handleChange}
              step="0.01"

            /></div>} 

          
    {isAl &&  <div>
      <div>
<strong className='strong-fd'> Miktar: </strong>
</div>
      
              <Input
            className=" input input-fd" 
              type="number"
              name="odemeAl"
              value={odenen.al}
              placeHolder="odeme alınacak tutar"
              onChange={handleChange}
              step="0.01"

              
            /> 
            

            
            </div>}      
    
    <strong className='strong-fd'> Açıklama: </strong>
    <div>
      <textarea className='textarea-fd' onChange={handleChange} name="aciklama" rows="6" cols="75" placeholder="Açıklama..."></textarea>
      
          </div>
            
          <div className='button-div-fd'>
  
          <Button type="button" className=" button-fd   " label="KAYIT ET" onClick={handleClick} />

  
          </div>
          </div>
          </div>
          </div>
        </Form>
      </div>
    </div>
   

<AlertModal
        showA={showAlert}
        handleClose={() => setShowAlert(false)}
      />




      <div>


      </div>
    </div>
  );
};

export default FinanceDetails;