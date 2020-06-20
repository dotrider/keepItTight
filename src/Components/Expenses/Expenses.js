import React from 'react';
import Styles from './Expenses.module.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import cx from 'classnames'


const Data = ({description, money, id, deleteExpense}) => {
  return (
    <ScrollToBottom className={Styles.container}>
      <p className={cx(Styles.font)}>{description}</p>

      <div className={Styles.expenses}>  
     <p className={cx(Styles.font, Styles.amount)}>- {money}</p>        
      <button onClick={() => deleteExpense(id)}>X</button>
    </div>
</ScrollToBottom>
  );
}

export default Data;
