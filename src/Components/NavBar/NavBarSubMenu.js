import {useState} from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import NavBarHeader from './NavbarHeader';
import { motion, stagger } from 'motion/react';

function NavBarSubMenu(props){
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    let numMenuItems = props.links.length;

    const navVariants = {
        open: {
            height: numMenuItems * menuHeight(),
            transition: { delayChildren: stagger(0.02, { startDelay: 0.02 }) },
        }, 
        closed: {
            height: 0,
            transition: { delayChildren: stagger(0.01, { from: "last" }) }
        }
    }

    const itemVariants = {
        open: {
            scale: 1,
            opacity: 1,
            x: 0,
            transition: { x: {stiffness: 1000}}
        },
        closed: {
            scale: 0,
            opacity: 0,
            x: -200,
            transition: { x: {stiffness: 1000}}
        }
    }

    function menuHeight(){
        let x = 52; //works with current padding

        if (numMenuItems > 1) {
            x = 54;
        }
        return x;
    }

    function changeMenuOpen(){
        setIsMenuOpen(prevIsMenuOpen => !isMenuOpen);
    }

    return (
        <div>
            <NavBarHeader menuIcon={props.menuIcon} text={props.text} menuOpen={isMenuOpen} onClick={changeMenuOpen}/>
            <motion.nav className='navbar-submenu'>
                <motion.ul 
                    variants={navVariants}
                    inital='open'
                    animate={isMenuOpen ? 'open' : 'closed'}>
                    { 
                        props.links.map((item, index) => (
                            <motion.li 
                                variants={itemVariants}
                                whileTap={{scale: 0.95}}
                                key={index}>
                                <CustomLink to={item.link}>
                                    {item.icon !== '' && <img src={item.icon} alt={item.icon} />}
                                    {item.label}
                                </CustomLink>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </motion.nav>
        </div>
    );
}

export default NavBarSubMenu;

function CustomLink({to, children}){ //...props
    let resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <Link to={to} className={isActive ? 'active' : ''}>
            {children}
        </Link>
    );
}