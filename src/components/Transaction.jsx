import React from 'react';
import '../App.css';
import { MdOutlineEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { PiCurrencyInrBold } from "react-icons/pi";


const Transaction = ({transaction, onItemDelete,addExpense, handleEdit}) => {
  return <div className="transaction">
    Recent Transaction
     <div className='transaction-container'>
     {transaction.map((ele, idx) => {
        return (
          <div className='expense-item' key={idx}>
           <div style={{display:'flex', flexDirection:'column'}}>
              <span style={{fontSize:'large'}}>{ele.title}</span>
              <span style={{fontSize:'medium', color:'grey'}}>{ele.date}</span>
           </div>
            <div className='action-container'>
            <span style={{color:'orange', display:'flex', alignItems:'center'}}><PiCurrencyInrBold/> {ele.price}</span>
            <span><button className='btn' style={{backgroundColor:'red'}} onClick={()=> onItemDelete(ele, idx,addExpense)}><TiDeleteOutline size={24} /></button></span>
            <span><button className='btn'style={{backgroundColor:'orange'}}onClick={()=>{handleEdit(ele,idx)}}><MdOutlineEdit size={24} /></button></span>
            </div>
          </div>
        )
      })}
     </div>
    </div>;
};

export default Transaction;
