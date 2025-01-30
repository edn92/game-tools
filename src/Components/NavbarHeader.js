import React from 'react';
import arrowDown from '../assets/arrow_drop_down_24dp.svg';
import arrowUp from '../assets/arrow_drop_up_24dp.svg';

function NavBarHeader(props){
    return (
        <div>
            <div className='navbar-menu-header' onClick={props.onClick}>
                {
                    props.menuIcon != null && <img src={props.menuIcon} alt={props.text}/>
                }
                <label>{props.text}</label>
                {
                    props.menuOpen ?
                    <img src={arrowUp} alt='arrowUp'/> : 
                    <img src={arrowDown} alt='arrownDown'/>
                }
            </div>
        </div>
    );
}

export default NavBarHeader;