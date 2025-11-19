import {useState} from "react";
import menuOpenIcon from '../../assets/menu_open.svg';
import menuCloseIcon from '../../assets/menu_close.svg';
import hsrIcon from '../../assets/hsr/icon_hsr.webp';
import hsrDamageIcon from '../../assets/hsr/Icon_ATK.webp';
import hsrBreakIcon from '../../assets/hsr/Icon_Break_Effect.webp'
import hsrSpeedIcon from '../../assets/hsr/Icon_SPD.webp'
import mhwIcon from '../../assets/mh/icon_mhw.webp';
import NavBarSubMenu from './NavBarSubMenu';
import { motion } from "motion/react";

function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(true); //is navbar minimised

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
        setIsMenuOpen(prevIsMenuOpen => !isMenuOpen);
    }

    const menuVars = {
        open: {
            width: 250,
            transition: { duration: 0.01 }
        },
        closed: {
            width: 50,
            transition: { duration: 0.01 }
        }
    }

    return(
        <motion.div className='navbar navbar-open' variants={menuVars} initial='open' animate={isMenuOpen ? 'open' : 'closed'}>
            <motion.div className='navbar-control' whileTap={{scale: 0.95}}>
                <button onClick={handleChange}><img src={isMenuOpen ? menuOpenIcon : menuCloseIcon} alt='menu'/></button>
            </motion.div>
            {
                isMenuOpen ?
                <div>
                    <NavBarSubMenu menuIcon={hsrIcon} text='HSR Calculators' links={hsrMenuLinks}/>
                    <NavBarSubMenu menuIcon={mhwIcon} text='MH Calcs' links={mhMenuLinks}/>
                    <NavBarSubMenu text='Links' links={otherMenuLinks}/>
                </div>
                : null
            }
        </motion.div>
    );
}

export default NavBar;

/**
 * return(
        <div className={ minimise ? 'navbar navbar-open' : 'navbar navbar-closed'}>
            <motion.div className='navbar-control'>
                <button onClick={handleChange}><img src={minimise ? menuExpand: menuMinimise} alt='menu'/></button>
            </motion.div>
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
 * 
 */