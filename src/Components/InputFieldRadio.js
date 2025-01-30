import React from 'react';


/*<span className='content-span'>
            <div className='radio-tile'>
                <input
                    type='radio'
                    name={props.name}
                    value={props.value}
                    defaultChecked={props.checked}
                    />
                {
                    props.icon !== '' ?
                    <img 
                        className='content-icon'
                        src={props.icon}
                        alt={props.alt}
                    /> : null
                }
            </div>
        </span> */
function InputFieldRadio(props){
    let radioTileType;

    switch (props.tileType) {
        case 'start':
            radioTileType = 'radio-tile start';
            break;
        case 'end':
            radioTileType = 'radio-tile end';
            break;
        default:
            radioTileType = 'radio-tile'    
            break;
    }
    /*{
                props.icon !== '' ?
                <div class={radioTileType}>
                    <img 
                        className='content-icon'
                        src={props.icon}
                        alt={props.alt}
                    /> 
                </div>: null
            } */
    return(
        <div className='content-radio'>
            <input
                type='radio'
                name={props.name}
                value={props.value}
                defaultChecked={props.checked}
                />
            <div className={radioTileType}>
                {
                    props.useIcon ?
                    <img 
                    className='content-icon'
                    src={props.icon}
                    alt={props.alt} />:
                    <label>{props.value}</label>
                } 
            </div>
        </div>
    );
}

export default InputFieldRadio;