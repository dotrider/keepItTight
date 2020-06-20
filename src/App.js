import React, { useState, useEffect } from 'react';
import './reset.css'
import './App.css'
import Style from './App.module.css';
import { Header, Display, Inputs } from './Components'
import axios from 'axios';



const App = () => {

const [ data, setData ] = useState([])


console.log(data)

useEffect(() => {
  const getData = async () => { 
  const res = await axios.get('/api/income')
  setData(res.data)
  }
  getData()
},[])

const incomeMoney = async (description, money, category) => {
  console.log(description, money, category)
  const res = await axios.post('/api/income/', {description, money, category}); 
  setData(res.data)
}

const deleteExpense = async (id) => {
  const res = await axios.delete(`/api/income/${id}`)
  setData(res.data)
}

const income = data.filter(m => m.category === 'income')
const expense = data.filter(m => m.category === 'expense')

  return (
    <div className={Style.container}>
      <Header data={data}/>
      <Inputs incomeMoney={incomeMoney} />
      <Display deleteExpense={deleteExpense} income={income} expense={expense}/>
    </div>
  );
}

export default App;
