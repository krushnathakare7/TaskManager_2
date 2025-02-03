import React from 'react';
import Transaction from './Transaction';
import Expense from './Expense';
import '../App.css';

const Main = ({transaction, setTransaction, addExpense, handleEdit, isEditing,setIsEditing}) => {

  const onItemDelete = (element, index,addExpense) => {

    const newTransaction = transaction.filter((_, idx) => index != idx)
    setTransaction(newTransaction)
  }

  return (
    <div className="main">
      <Transaction transaction={transaction} onItemDelete={onItemDelete} addExpense={addExpense} handleEdit={handleEdit} isEditing={isEditing} setIsEditing={setIsEditing}/>
      <Expense transaction={transaction}/>
    </div>
  );
};

export default Main;
