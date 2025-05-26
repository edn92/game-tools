import {useState} from "react";
import menuExpand from '../../assets/menu_open.svg';
import menuMinimise from '../../assets/menu_close.svg';
import hsrIcon from '../../assets/hsr/icon_hsr.webp';
import hsrDamageIcon from '../../assets/hsr/Icon_ATK.webp';
import hsrBreakIcon from '../../assets/hsr/Icon_Break_Effect.webp'
import hsrSpeedIcon from '../../assets/hsr/Icon_SPD.webp'
import mhwIcon from '../../assets/mh/icon_mhw.webp';
import NavBarSubMenu from './NavBarSubMenu';

function NavBar(){
    const [minimise, setMinimise] = useState(true); //is navbar minimised

    const hsrMenuLinks = [
        { link: '/HSRActionValueCalc', label:'Action Value', icon: hsrSpeedIcon },
        { link: '/HSRBreakDamCalc', label:'Break Damage', icon: hsrBreakIcon},
        { link: '/HSRDamageCalc', label:'Damage Calculator', icon: hsrDamageIcon}
    ];

    const mhMenuLinks = [
        { link: '/MHMotionValueCalc', label:'Weapon Motion Value', icon: ''}
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
                    <NavBarSubMenu menuIcon={mhwIcon} text='MH Calcs' links={mhMenuLinks}/>
                    <NavBarSubMenu text='Links' links={otherMenuLinks}/>
                </div>
                : null
            }
        </div>
    );
}

export default NavBar;