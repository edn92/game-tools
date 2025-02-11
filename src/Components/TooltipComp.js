import React, {useState} from "react"; //, useEffect, useRef
import tooltipImg from '../assets/info_24dp.svg'

function TooltipComp(props){
    const [isVisible, setIsVisible] = useState(false);

    /*let tooltipRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!tooltipRef.current.contains(event.target)){
                setIsVisible(prev => false);
            }
        };

        document.addEventListener('mousedown', handler);

        return() => {
            document.removeEventListener('mousedown', handler);
        }
    })*/
    /*
         <div className='tooltip-container' ref={tooltipRef}>        
        onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                onMouseDown={() => setIsVisible(prev => !prev)} */
    return (
        <div className='tooltip-container'>
            <img 
                src={tooltipImg}
                alt='tooltip'
                onMouseOver={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            />
            {isVisible && 
            <div className='tooltip'>
                <h3>{props.title}</h3>
                <label>{props.text}</label>
            </div>}
        </div>
    );
};

export default TooltipComp;