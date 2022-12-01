import './MainHeader.scss';
import benchBlue from '../../assets/logo/bench-blue.png';
import benchWhite from '../../assets/logo/bench-white.png';
import {Link } from 'react-router-dom'
export default function MainHeader(params){

    return(
    <div className="main__header--container">
        <div className="main main--blue">
            <div className="main__right">
                <ul className="main__navList main__navList--blue">
                    <li className="main__navItem"> Pricing </li>
                    <li className="main__navItem"> Services </li>
                    <li className="main__navItem"> Resources </li>
                    <li className="main__navItem"> Community</li>
                </ul>
            </div>
            <Link to="/"><div className="main__logo">
                <img
                    className='main__logoIcon--blue'
                    src={benchBlue}
                    alt="bench-Icon"
                ></img>
                <img 
                    className="main__logoIcon" 
                    src={benchWhite} 
                    alt="bench-icon" 
                />
            </div></Link>
            <div className="main__left">
                <ul className="main__contactList">
                    <li className="main__login">Log In</li>
                    <li className="main__tel">+1 (888) 760 1940</li>
                    <Link to="/demo/dashboard" className="hero__explore">Find Out More</Link>
                </ul>
            </div>
        </div>

        <div className="main__last-border">
            
        </div>
    </div>
    );
}