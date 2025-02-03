import { useEffect, useState } from 'react';
import './App.css';
import Appbar from './components/Appbar';
import Hero from './components/Hero';
import Main from './components/Main';


function App() {

  const [transaction , setTransaction] = useState([]);

  const [isEditing, setIsEditing] = useState(false)
  const [selectedIndex,setSelectedIndex] = useState(null)

  const [availableBalance , setAvailableBalance] = useState(0);
  const [availableExpense, setAvailableExpense] = useState(0);
  const [newBal , setNewBal] = useState(0)

  const [expModal , setOpenExpModal] = useState(false)

const addExpense = (expense) => {

 setTransaction([...transaction, expense])
 
}



useEffect(()=>{
  const calculate = () => {
    const calcBal = transaction.reduce((red,ele) => Number(red) + Number(ele.price), 0)
    setAvailableExpense(calcBal);
    setNewBal(availableBalance - calcBal);
  }
  calculate();
},[transaction])



const handleEdit = (element, index) => {
  setSelectedIndex(index)

  const updatedTransaction = transaction.map((ele, idx) => {
    return idx == index ? {...ele,...element} : ele;
  })
  
 
  setIsEditing(true);
  setTransaction(updatedTransaction)
  setOpenExpModal(true);
}

const handler = (balance) => {
  setAvailableBalance(balance)
  setNewBal(balance)
}

  return (
    <div className="App">
      <Appbar />
      <Hero 
       
        availableBalance = {newBal}
        setAvailableBalance = {handler}
        availableExpense = {availableExpense}
        setAvailableExpense = {setAvailableExpense}
        addExpense = {addExpense}
        expModal = {expModal}
        SetExpModal ={setOpenExpModal}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleEdit={handleEdit}
        selectedIndex ={selectedIndex}
        transaction={transaction}
      />
      <Main 
      transaction={transaction} 
      setTransaction = {setTransaction}  
      handleEdit={handleEdit}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
     
      />
 
    </div>
  );
}

export default App;
