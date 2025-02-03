import React from 'react';
import '../App.css';

const Appbar = () => {
  console.log('app bar is called')
  return (
    <div className="appbar">
      <nav style={{paddingLeft:'20px'}}>Expense Tracker</nav>
    </div>
  );
};

export default Appbar;
