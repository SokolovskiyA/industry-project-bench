import React from 'react'
import './Dashboard.scss'

//components
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import Sidebar from '../Sidebar/Sidebar'

function Dashboard() {
    return (
        <div className='dashboard'>
            <Sidebar />
            <DashboardHeader />
        </div>
    )
}

export default Dashboard