import React, {useState} from 'react';
import Styles from './Inputs.module.css';
import cx from 'classnames'

const Inputs = ({incomeMoney}) => {
    const [ description , setDescription ] = useState(''),
     [ money , setMoney ] = useState(0),
     [ category, setCategory ] = useState('')


const addInfo = () => {
    incomeMoney(description, +money, category)
    setDescription('')
    setMoney(0)
    setCategory('')
} 

  return (
    <section className={Styles.container}>
        <form className={Styles.formContainer}
            onSubmit={e => {
            e.preventDefault()
            addInfo()
        }}>
            <div>
                <select className={Styles.itemHeight}
                 onChange={e => setCategory(e.target.value)} >
                <option defaultValue="default">Select one</option>
                <option value='income'> Income </option>
                <option value='expense'> Expense </option>
                </select>
                <input className={cx(Styles.textBox)}
                    type='text' value={description} onChange={e => setDescription(e.target.value)} 
                    placeholder='Add description..' 
                />
            </div>
            <div>
                <input className={cx(Styles.valueBox)}
                type='number' value={money} onChange={e => setMoney(e.target.value)}
                />
                <input className={Styles.itemHeight}
                type='submit'/>
            </div>
        </form>
    </section>
  );
}

export default Inputs;
