import React, { useEffect, useState } from 'react';
import '../App.css';

const HeroCard = ({ type, onAddIncome, onAddExpense , balance }) => {


  const typeConfig = {
    'Wallet Money': { buttonColor: 'green', buttonText: '+ Add income' },
    'Wallet Balance': { buttonColor: 'green', buttonText: '+ Add income' },
    Expense: { buttonColor: 'red', buttonText: '+ Add Expense' },
  };

  const { buttonColor, buttonText } = typeConfig[type] || {
    buttonColor: 'grey',
    buttonText: 'Action',
  };


  const handleClick = () => {
    if (type === 'Wallet Money' || type === 'Wallet Balance') {
      onAddIncome();
    } else if (type === 'Expense') {
      onAddExpense();
    }
  };

  return (
    <div className="hero-card">
      <div style={{ color: 'black', textAlign: 'center' }}>
        <div style={{ marginBottom: '10px' }}>{type }: {balance}</div>
        <button
          style={{
            backgroundColor: buttonColor,
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
