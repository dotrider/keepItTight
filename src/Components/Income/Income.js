import React from 'react';
import Styles from './Income.module.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import cx from 'classnames'


const Income = ({description, money, id, deleteExpense}) => {
  return (
    <ScrollToBottom className={Styles.container}>
    <p className={cx(Styles.font)}>{description}</p>
    <div className={Styles.income}>  
    <p className={cx(Styles.font, Styles.amount)}>+ {money}</p>        
      <button onClick={() => deleteExpense(id)}>X</button>
    </div>
    </ScrollToBottom>
  );
}

export default Income;
