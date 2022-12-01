import React from 'react'
import incomeHead from '../../assets/income_statement_head.png';
import incomeBody from '../../assets/income_body.png'
import './IncomeStatement.scss';

function IncomeStatement() {
    return (
        <div className='income-statement'>
            <img className='income-statement__image' src={incomeHead} alt="income head"/>
            <img className='income-statement__image2' src={incomeBody} alt="income head"/>
        </div>
    )
}

export default IncomeStatement