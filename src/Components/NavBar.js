import React, {useState} from "react";
//import { Link } from "react-router-dom";
import menuExpand from '../assets/menu_open.svg';
import menuMinimise from '../assets/menu_close.svg';
import hsrIcon from '../assets/hsr_icon.webp';
import hsrDamageIcon from '../assets/Icon_ATK.webp';
import hsrBreakIcon from '../assets/Icon_Break_Effect.webp'
import NavBarSubMenu from './NavBarSubMenu';

function NavBar(){
    const [minimise, setMinimise] = useState(true); //is navbar minimised

    const hsrMenuLinks = [
        { link: '/HSRDamageCalc', label:'Damage Calculator', icon: hsrDamageIcon},
        { link: '/HSRBreakDamCalc', label:'Break Damage Calcs', icon: hsrBreakIcon}
    ];

    const otherMenuLinks = [
        { link: '/About', label: 'About', icon: ''}
    ];

    function handleChange(){
        setMinimise(prevMinimise => !prevMinimise);
    }

    return(
        <div className={ minimise ? 'navbar navbar-open' : 'navbar navbar-closed'}>
            <div className='navbar-control'>
                <button onClick={handleChange}><img src={minimise ? menuExpand: menuMinimise} alt='menu'/></button>
            </div>
            {
                minimise ?
                <div>
                    <NavBarSubMenu menuIcon={hsrIcon} text='HSR Calculators' links={hsrMenuLinks}/>
                    <NavBarSubMenu text='Links' links={otherMenuLinks}/>
                </div>
                : null
            }
        </div>
    );
}

export default NavBar;