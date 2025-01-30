import React, {useState} from "react";
import tooltipImg from '../assets/info_24dp.svg'

function TooltipComp(props){
    const [isVisible, setIsVisible] = useState(false);
    return (
        <span className="tooltip-container">
            <img 
                src={tooltipImg}
                alt='tooltip'
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            />
            {isVisible && <div className="tooltip">{props.text}</div>}
        </span>
    );
};

export default TooltipComp;