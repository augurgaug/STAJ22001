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
            <p>silmek istediğine emin misin</p>
            </div>
            <div className='modal-btn'>
            <Button className="btnYes"  onClick={handleConfirm}>yesss</Button>

            <Button className="btnNo" onClick={handleClose}>nooo</Button>
            </div>

        </div>








     
    </div>
  );
};

export default DeleteModal;
