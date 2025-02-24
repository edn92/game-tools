import React, {useState} from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import NavBarHeader from './NavbarHeader';

function NavBarSubMenu(props){
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const minHeight = 52; //works nicely atm
    let menuHeight = props.links.length;

    function changeMenuOpen(){
        setIsMenuOpen(prevIsMenuOpen => !isMenuOpen);
    }

    return (
        <div>
            <NavBarHeader menuIcon={props.menuIcon} text={props.text} menuOpen={isMenuOpen} onClick={changeMenuOpen}/>
            <div className='navbar-submenu' style={isMenuOpen ? {height: menuHeight * minHeight} : {height: 0}}>
            {
                isMenuOpen ?
                <ul>
                    {
                        props.links.map((item, index) => (
                            <li key={index}>
                                <CustomLink to={item.link}>
                                {item.icon !== '' && <img src={item.icon} alt={item.icon} />}
                                {item.label}
                                </CustomLink>
                            </li>
                        ))
                    }
                </ul>
                :
                null
            }
            </div>
        </div>
    );
}

export default NavBarSubMenu;

function CustomLink({to, children}){ //...props
    //let path = window.location.pathname;
    //console.log('path: ' + path);
    let resolvedPath = useResolvedPath(to);
    //console.log(resolvedPath);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <Link to={to} className={isActive ? 'active' : ''}>
            {children}
        </Link>
    );
}