import React from 'react'
import './Sidebar.scss'

//icons
import bench from '../../assets/icons/svg0.svg'
import messages from '../../assets/icons/svg1.svg'
import accounting from '../../assets/icons/svg2.svg'
import benchTax from '../../assets/icons/svg3.svg'
import account from '../../assets/icons/svg3.svg'
import reward from '../../assets/icons/svg4.svg'
import logout from '../../assets/icons/svg5.svg'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__button-div'>
                <button className="sidebar__button"><img className='sidebar__button-logo' src={bench} alt="button-logo"/><span className='sidebar__button-text'>Bench</span></button>
                <button className="sidebar__button"><img className='sidebar__button-logo' src={messages} alt="button-logo"/><span className='sidebar__button-text'>Messages</span></button>
                <button className="sidebar__button"><img className='sidebar__button-logo' src={accounting} alt="button-logo"/><span className='sidebar__button-text'>Accounting</span></button>
                <button className="sidebar__button"><img className='sidebar__button-logo' src={benchTax} alt="button-logo"/><span className='sidebar__button-text'>Bench Tax</span></button>
            </div>
            <div className='sidebar__button-div'>
                <button className="sidebar__button"><img className='sidebar__button-logo' src={account} alt="button-logo"/><span className='sidebar__button-text'>Account</span></button>
                <button className="sidebar__button"><img className='sidebar__button-logo' src={reward} alt="button-logo"/><span className='sidebar__button-text'>Rewards</span></button>
                <button className="sidebar__button"><img className='sidebar__button-logo' src={logout} alt="button-logo"/><span className='sidebar__button-text'>Logout</span></button>
            </div>
        </div>
    )
}

export default Sidebar