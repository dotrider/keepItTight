import React from 'react';
import Style from './Header.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Header = ({data}) => {
  
  const totalIncome = data.reduce((acc, e) => {
      console.log(e.category)
      if(e.category === 'income') {
        acc += e.money}
        return acc },0)

 const totalExpenses = data.reduce((acc, e) => {
      console.log(e.category)
      if(e.category === 'expense') {
        acc += e.money}
        return acc },0)       

  return(
    <header className={Style.container}>

      <div>
        <h3 className={Style.primaryFont}>
          Available Funds as of:
        </h3>
        <p>{new Date().toLocaleString()}</p>
        <p className={cx(Style.amountFont, Style.fontColor)}>
        	$ 
          <CountUp
                start={0}
                end={totalIncome - totalExpenses}
                duration={2.5}
                separator=','
            /> 
        </p>
      </div>
      <div className={cx(Style.results, Style.income)}>
        <p>Income</p>
        <p className={Style.fontColor}>  
          + <CountUp
                start={0}
                end={totalIncome}
                duration={2.5}
                separator=','
            /> 
        </p>
      </div>
      <div className={cx(Style.results, Style.expenses)}>
        <p>Expenses</p>
        <p className={Style.fontColor}> 
          - <CountUp
                start={0}
                end={totalExpenses}
                duration={2.5}
                separator=','
            /> 
         </p>
      </div>

    </header>
  );
}

export default Header;