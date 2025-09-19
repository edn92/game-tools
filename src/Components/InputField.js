import React from 'react';
import tooltipStringsData from '../Utilities/tooltipStringsData';
import CustomTooltip from './CustomTooltip';

function InputField(props){
    //search for tooltip on load, display tooltip icon if found
    let tooltipData = tooltipStringsData.find(item => {return item.name === props.name});    

    return(
        <>
            <div className='content-form'>
                <div className='content-label'>
                    <label for={props.name}>{props.label}: </label>
                    {
                        tooltipData !== undefined && 
                        <CustomTooltip text={tooltipData.text}/>
                    }
                </div>
                <div className='content-input'>
                    { props.type === 'number' ?
                        <input 
                            id={props.name}
                            name={props.name} 
                            type={props.type}
                            step='0.01'
                            defaultValue={props.defaultValue}
                            placeholder={props.placeholder} 
                            onChange={props.onChange}
                        /> : 
                        <input 
                            id={props.name}
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