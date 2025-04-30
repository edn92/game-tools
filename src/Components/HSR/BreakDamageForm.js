import React, {useState} from 'react';
import InputField from '../InputField';
import InputFieldRadio from '../InputFieldRadio';
import physIcon from '../../assets/hsr/Type_Physical.webp'
import fireIcon from '../../assets/hsr/Type_Fire.webp';
import iceIcon from '../../assets/hsr/Type_Ice.webp';
import lightningIcon from '../../assets/hsr/Type_Lightning.webp';
import windIcon from '../../assets/hsr/Type_Wind.webp';
import quantumIcon from '../../assets/hsr/Type_Quantum.webp';
import imaginaryIcon from '../../assets/hsr/Type_Imaginary.webp';

function BreakDamageForm(){
    //let scalingAttribute = 0; //attack% for example
    //let toughnessBar = 30;
    const [eleType, setEleType] = useState('physical'); //default
    const [maxHP, setMaxHP] = useState(10000);
    const elements = [
        { id: 0, value: 'physical', icon: physIcon, checked: true, tileType:'start' },
        { id: 1, value: 'fire', icon: fireIcon, checked: false, tileType:'' },
        { id: 2, value: 'ice', icon: iceIcon, checked: false, tileType:'' },
        { id: 3, value: 'lightning', icon: lightningIcon, checked: false, tileType:'' },
        { id: 4, value: 'wind', icon: windIcon, checked: false, tileType:'' },
        { id: 5, value: 'quantum', icon: quantumIcon, checked: false, tileType:'' },
        { id: 6, value: 'imaginary', icon: imaginaryIcon, checked: false, tileType:'end' }
    ];

    function onChangeElement(event){
        let element = (event.target.value);
        setEleType(prevEleType => element);
    }

    function handleHPChange(event){
        setMaxHP(prevMaxHP => event.target.value);
    }
    
    return(
        <div className='content'>
            <h2>Break Modifiers</h2>
            <InputField
                label='Enemy Toughness Bar'
                name='toughnessBar' 
                type='number' 
                defaultValue='30'
                placeholder='30' />
            <fieldset onChange={onChangeElement}>
                <label>Element Type: </label><br/><br/>
                <div className='content-radio-group'>
                    {
                        elements.map((item) => 
                            <InputFieldRadio 
                                name='eleType'
                                value={item.value}
                                useIcon={true}
                                icon={item.icon}
                                checked={item.checked}
                                tileType={item.tileType} />
                        )
                    }
                </div>
            </fieldset>
            {eleType === 'physical' && 
                <InputField 
                    label='Enemy Max HP'
                    name='maxHP' 
                    type='number' 
                    defaultValue={maxHP}
                    placeholder='10000'
                    onChange={handleHPChange} />}
            <InputField
                label='Break DMG Multiplier%'
                name='breakMulti' 
                type='number' 
                defaultValue='100'
                placeholder='100' />
        </div>
    );
}

export default BreakDamageForm;