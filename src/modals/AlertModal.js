import React from 'react';
import './deletemodal.css';
import Button from '../components/Button';





const AlertModal = ({ showA, handleClose,}) => {
  if (!showA) {
    return null;
  }

  return (



    <div className="modal">

        <div className='modal-area'>
            
        <div className='modal-title'>
            <h2>İŞLEM GERÇEKLEŞTİ</h2>
            </div>
            <div className='modal-body'>
            <p>İŞLEM BAŞARI İLE GERÇEKLEŞTİ</p>
            </div>
            <div className='modal-btn'>

            <Button className="btnYes" onClick={handleClose}>OK</Button>
            </div>

        </div>


     
    </div>
  );
};

export default AlertModal;
