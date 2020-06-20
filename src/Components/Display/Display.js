import React from 'react';
import Styles from './Display.module.css'
import Income from '../Income/Income'
import Expenses from '../Expenses/Expenses'
import cx from 'classnames'

const Display = ({income, expense,  deleteExpense}) => {

  const incomeData = income.map(({category, description, money, _id}) => <Income 
  category={category} description={description} money={money} id={_id} deleteExpense={deleteExpense}/>)
  const expenseData = expense.map(({category, description, money, _id}) => <Expenses 
  category={category} description={description} money={money} id={_id} deleteExpense={deleteExpense}/>)
 
  return (
    <section className={Styles.container} >
            <div className={Styles.innerContainer}>
                <div className={Styles.income}>
                <h3 className={cx(Styles.incColor, Styles.font)}>Income</h3>
                {incomeData}
                </div>
                <div className={Styles.expenses}>
                <h3 className={cx(Styles.expColor, Styles.font)}>Expenses</h3>
                {expenseData}
                </div>
            </div>
    </section>
  );
}

export default Display;

