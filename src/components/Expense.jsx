import React from 'react';
import '../App.css';
import MyBarChart from './BarChart';

const Expense = ({transaction}) => {
  return <div className="expense">
    Top Expense
    <MyBarChart transaction={transaction} />
  </div>;
};

export default Expense;
