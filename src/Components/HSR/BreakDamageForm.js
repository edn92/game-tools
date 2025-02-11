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
                    <InputFieldRadio 
                        name='eleType' 
                        value='physical'
                        useIcon={true} 
                        icon={physIcon} 
                        checked={true}
                        tileType='start' />
                    <InputFieldRadio 
                        name='eleType'
                        value='fire'
                        useIcon={true} 
                        icon={fireIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='eleType'
                        value='ice'
                        useIcon={true} 
                        icon={iceIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='eleType'
                        value='lightning'
                        useIcon={true} 
                        icon={lightningIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='eleType'
                        value='wind'
                        useIcon={true} 
                        icon={windIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='eleType'
                        value='quantum'
                        useIcon={true} 
                        icon={quantumIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='eleType'
                        value='imaginary'
                        useIcon={true} 
                        icon={imaginaryIcon}
                        checked={false}
                        tileType='end' />
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