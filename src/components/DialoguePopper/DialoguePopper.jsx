import helpCard from '../../assets/images/HelpCard.png';
import closeIcon from '../../assets/images/FABexit.png';
import helpBtn from '../../assets/images/FAB.png';
import { useState } from 'react';
import './DialoguePopper.scss';

export default function DialoguePopper(){

    const [show, setShow] = useState(false);
    const showHandler = (click) => {
        setShow(click);
    };

    return(
        <div className='dialogue'>
            
            <div className="dialogue__position">
                {show && <div className='dialogue__helpCard'>
                    <div 
                    className='dialogue__close' 
                    onClick={() => {showHandler(false) }}
                    >
                        <img 
                        className="dialogue__closeIcon"
                        src={closeIcon} 
                        alt="closeIcon" 
                        />
                    </div>
                    <img className='dialogue__helpImg'
                        src={helpCard}
                        alt="help card"
                    ></img>
                </div>
                }
                <div 
                className='dialogue__floatBtn' 
                onClick={() => {showHandler(true)}}
                >
                    <img className='dialogue__floatBtnImg'
                    src={helpBtn}
                    alt="help me"
                    ></img>
                </div>
            </div>
            



        </div>

    );

    
}