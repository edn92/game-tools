import React from 'react';
import tooltipStringsData from '../Utilities/tooltipStringsData';
import TooltipComp from './TooltipComp';

function InputField(props){
    //search for tooltip on load, display tooltip icon if found
    let tooltipData = tooltipStringsData.find(item => {return item.name === props.name});    

    return(
        <>
            <div className='content-form'>
                <div className='content-label'>
                    <label>{props.label}: </label>
                    {tooltipData !== undefined && <TooltipComp title={props.label} text={tooltipData.text} />}
                </div>
                <div className='content-input'>
                    { props.type === 'number' ?
                        <input 
                            name={props.name} 
                            type={props.type}
                            step='0.1'
                            defaultValue={props.defaultValue}
                            placeholder={props.placeholder} 
                            onChange={props.onChange}
                        /> : 
                        <input 
                            name={props.name} 
                            type={props.type}
                            defaultValue={props.defaultValue}
                            placeholder={props.placeholder} 
                        /> 
                    }
                    <br />
                </div>
            </div>
        </>
    );
}

export default InputField