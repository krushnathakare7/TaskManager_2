
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import '../App.css'
ReactModal.setAppElement('#root');
const ExpenseModal = ({ isOpen, onClose, onAddSubmit, isEditing, handleEdit,selectedIndex }) => {

    const [formData, setFormData] = useState({

    })

    const handleSubmit = (e) => {
 
        e.preventDefault();
        if(isEditing){
          handleEdit(formData,selectedIndex)
        } else if(onAddSubmit){
            onAddSubmit(formData);
        }
        onClose();
    }

    const handleChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target
        setFormData((prev) => {
           return {
            ...prev,
            [name] : value
           }
        })
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
        },
      }}
    >
      <div style={{
        display:'flex',
        flexDirection: 'column',
      }}>
        <h2 style={{color:'black'}}>Add Expense</h2>
        <form action="submit" onSubmit={handleSubmit}>
        <div className='modal-content'>
            <input className = 'modal-input' type="text" placeholder='price' name= 'price'  onChange={handleChange}/>
            <input className = 'modal-input' type="text" placeholder='title'name= 'title'  onChange={handleChange}/>
        </div>
        <div className='modal-content'>
           
            <select className='modal-input' name="category"  onChange={handleChange}>
                <option value="select-category" name = 'select-category' defaultValue >Select Category</option>
                <option value="travel" name = 'travel'>Travel</option>
                <option value="entertairnment" name = 'entertairnment'>Entertairnment</option>
                <option value="food" name = 'food'>Food</option>
            </select>
            <input className='modal-input' type="date" name= 'date' onChange={handleChange}/>
        </div>
       <div className='modal-buttons'>
            <button className='modal-add-button' type='submit' >{isEditing ?'Update' : 'Add Expense'}</button>
            <button className='modal-cancel-button' onClick={onClose}>Close</button>
       </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default ExpenseModal;
