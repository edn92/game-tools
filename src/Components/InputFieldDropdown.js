import React from "react";
//import MenuDropdown from "./MenuDropdown";
import tooltipStringsData from '../Utilities/tooltipStringsData';
import TooltipComp from './TooltipComp';

function InputFieldDropdown(props){
    //search for tooltip on load, display tooltip icon if found
    let tooltipData = tooltipStringsData.find(item => {return item.name === props.name});  
    const menuList = props.list;
    console.log(menuList);

    return (
        <div className='content-form'>
            <div className='content-label'>
                <label>{props.label}: </label>
                {tooltipData !== undefined && <TooltipComp text={tooltipData.text} />}
            </div>
            <div className='input-select'>
                <select 
                    name={props.name}
                    value={props.defaultOption} 
                    onChange={props.onChange}>
                    {
                        menuList.map((item) => 
                            <option className='select-items' value={item.value}>{item.value}</option>
                        )
                    }
                </select>
            </div>
        </div>
    );
}

export default InputFieldDropdown;
