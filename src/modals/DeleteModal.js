import React from 'react';
import './deletemodal.css';
import Button from '../components/Button';





const DeleteModal = ({ showD, handleClose, handleConfirm }) => {
  if (!showD) {
    return null;
  }

  return (


    





    <div className="modal">

        <div className='modal-area'>
            
        <div className='modal-title'>
            <h2>ONAY</h2>
            </div>
            <div className='modal-body'>
            <p>Silmek istediğinize emin misiniz?</p>
            </div>
            <div className='modal-btn'>
            <Button className="btnYes"  onClick={handleConfirm}>EVET</Button>

            <Button className="btnNo" onClick={handleClose}>HAYIR</Button>
            </div>

        </div>








     
    </div>
  );
};

export default DeleteModal;
