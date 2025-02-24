import React from "react";
import MenuDropdown from "./MenuDropdown";
import tooltipStringsData from '../Utilities/tooltipStringsData';
import TooltipComp from './TooltipComp';

function InputFieldDropdown(props){
    //search for tooltip on load, display tooltip icon if found
    let tooltipData = tooltipStringsData.find(item => {return item.name === props.name});  
    return (
        <div className='content-form'>
            <div className='content-label'>
                <label>{props.label}: </label>
                {tooltipData !== undefined && <TooltipComp text={tooltipData.text} />}
            </div>
            <MenuDropdown 
                name={props.name}
                list={props.list}
                defaultOption={props.defaultOption} />
        </div>
    );
}

export default InputFieldDropdown;
