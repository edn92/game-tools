import React, {useState} from 'react';
import InputField from '../InputField';
import InputFieldDropdown from '../InputFieldDropdown';
import deleteIcon from '../../assets/delete_24dp.svg';
import arrowDownIcon from '../../assets/arrow_drop_down_24dp.svg';
import arrowUpIcon from '../../assets/arrow_drop_up_24dp.svg';

function AdvanceForwardInput(props){
    const [visible, setVisible] = useState(true);
    const [aaAmount, setAAAmount] = useState(10);
    const [avPoint, setAVPoint] = useState(0);
    const [character, setCharacter] = useState('All');
    const charList = [
        {key: 0, value: 'All'}, 
        {key: 1, value: 1},
        {key: 2, value: 2},
        {key: 3, value: 3},
        {key: 4, value: 4}]
    
    let avPointName = props.aaID + 'AVPoint';
    let dropDownName = props.aaID + 'Dropdown';

    function handleVisible(){
        setVisible(prevVisible => !prevVisible);
    }

    function onChangeAA(event){
        setAAAmount(prevAAAmount => event.target.value);
    }

    function onChangeAVP(event){
        setAVPoint(prevAVPoint => event.target.value);
    }

    function onChangeCharacter(event){
        setCharacter(prevCharacter => event.target.value);
    }
    
    return (
        <div className='input-container'>
            <div className='input-container-icon-bar'>
                <button type='button' onClick={handleVisible}>
                    <img src={visible ? arrowDownIcon : arrowUpIcon} alt='Expand/Minimise'/>
                </button>
                <button type='button' onClick={props.onClick}>
                    <img src={deleteIcon} alt='Delete' />
                </button>
            </div>
            <div className={visible ? null : 'input-container-minimise'}>
                <InputField 
                    label='Action Advance%'
                    name={props.aaID}
                    type='number'
                    defaultValue={aaAmount}
                    placeholder='AA%'
                    onChange={onChangeAA}/>
                <InputField 
                    label='AV Point'
                    name={avPointName}
                    type='number'
                    defaultValue={avPoint}
                    placeholder='AV Point'
                    onChange={onChangeAVP} />
                <InputFieldDropdown 
                    label='Character/s' 
                    name={dropDownName} 
                    defaultOption={character}
                    list={charList}
                    onChange={onChangeCharacter} />
            </div>
        </div>
    );
}

export default AdvanceForwardInput;