import React, { useState } from 'react';
import ReactModal from 'react-modal';
import '../App.css';
ReactModal.setAppElement('#root');


const IncomeModal = ({ isOpen, onClose, handler }) => {
  
    const [balance , setBalance] = useState(0)
   
    const handleChange = (e) => {
        e.preventDefault()
        setBalance(e.target.value)
    }

    const handleClick = () => {
        handler(balance);
        onClose();
    }

    
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '10px',
          border: 'none',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <div>
        <h2 className="modal-title">Add Balance</h2>
        <div className="modal-content">
          <input className="modal-input" placeholder="Income Amount" onChange={(e)=> handleChange(e)} />
          <div className="modal-buttons">
            <button className="modal-add-button" onClick={handleClick}>Add Balance</button>
            <button className="modal-cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default IncomeModal;
