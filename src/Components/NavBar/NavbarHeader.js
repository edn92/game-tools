import arrowIcon from '../../assets/arrow_drop_up_24dp.svg';
import { motion } from 'motion/react';

function NavBarHeader(props){
    return (
        <div>
            <div className='navbar-menu-header' onClick={props.onClick}>
                {
                    props.menuIcon != null && <img src={props.menuIcon} alt={props.text}/>
                }
                <label>{props.text}</label>
                
                <motion.div
                    onClick={props.onClick}
                    whileHover={{scale: 1.3}}
                    animate={{rotate: props.menuOpen ? -180 : 0}}>
                        <img className='arrow-icon' src={arrowIcon} alt='arrowIcon'/>
                </motion.div>
            </div>
        </div>
    );
}

export default NavBarHeader;
