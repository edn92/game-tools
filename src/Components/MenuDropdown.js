import React, {useState, useEffect, useRef} from "react"; //, useEffect, useRef
import arrowDown from '../assets/arrow_drop_down_24dp.svg';

function MenuDropdown(props){
    const [selected, setSelected] = useState(props.defaultOption);
    const [menuOpen, setMenuOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)){
                setMenuOpen(prev => false);
            }
        };

        document.addEventListener('mousedown', handler);

        return() => {
            document.removeEventListener('mousedown', handler);
        }
    })

    function changeMenuOpen(){
        setMenuOpen(prev => !prev);
    }

    function changeSelect(event){
        setSelected(prev => event.target.innerHTML);
        setMenuOpen(prev => false);
    }

    function DropdownItem(props){
        return (
            <li className={selected === props.label? 'dropdown-active' : ''} onClick={changeSelect}>{props.label}</li>
        );
    }

    return (
        <div className='content-input'>
            <input type='hidden' name={props.name} value={selected}/>
            <button onClick={changeMenuOpen}>
                <label>{selected}</label>
                <img src={arrowDown} alt='arrowDown'/>
            </button>
            <div className='menu-container' ref={menuRef}>
                {
                    menuOpen ? 
                    <ul>
                        {props.list.map((item) => <DropdownItem label={item}/>)}
                    </ul>
                    : null
                }
            </div>
        </div>
    );
}

export default MenuDropdown;
