import React, { useEffect, useState } from 'react';
import HeroCard from './HeroCard';
import IncomeModal from './IncomeModal';
import ExpenseModal from './ExpenseModal';
import '../App.css';
import Example from './Chart'

const Hero = ({availableBalance, setAvailableBalance, availableExpense,setAvailableExpense,addExpense, expModal, SetExpModal, isEditing, setIsEditing, handleEdit,selectedIndex, transaction}) => {

  const WALLET_MONEY = 'Wallet Balance';
  const EXPENSE = 'Expense';


  const [isIncomeModalOpen, setIncomeModalOpen] = useState(false);
  const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);


  const openIncomeModal = () => setIncomeModalOpen(true);
  const closeIncomeModal = () => setIncomeModalOpen(false);

  const openExpenseModal = () => setExpenseModalOpen(true);
  const closeExpenseModal = () => {
    setExpenseModalOpen(false)
    SetExpModal(false)
    setIsEditing(false);
  };

  useEffect(()=>{
    if(expModal){
      setExpenseModalOpen(true);
    }
  },[expModal])
  

  return (
    <div className="hero">
      <HeroCard
        type={WALLET_MONEY}
        onAddIncome={openIncomeModal}
        onAddExpense={openExpenseModal}
        balance = {availableBalance}
      />
      <HeroCard
        type={EXPENSE}
        onAddIncome={openIncomeModal}
        onAddExpense={openExpenseModal}
        balance = {availableExpense}
      />


      <IncomeModal isOpen={isIncomeModalOpen} onClose={closeIncomeModal} handler={setAvailableBalance}/>
      <ExpenseModal isOpen={isExpenseModalOpen} onClose={closeExpenseModal} handler = {setAvailableExpense} onAddSubmit = {addExpense} isEditing = {isEditing} setIsEditing = {setIsEditing} handleEdit= {handleEdit} selectedIndex={selectedIndex}/>

      <Example transaction={transaction} />
    </div>
  );
};

export default Hero;
