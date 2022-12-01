import React from 'react'
import './Dashboard.scss'

//components
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import Sidebar from '../Sidebar/Sidebar'
import IncomeStatement from '../IncomeStatement/IncomeStatement'

function Dashboard() {
    return (
        <div className='dashboard'>
            <Sidebar />
            <DashboardHeader />
        </div>
    )
}

export default Dashboard