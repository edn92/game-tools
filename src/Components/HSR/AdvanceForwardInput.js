import {useState} from 'react';
import InputField from '../InputField';
import deleteIcon from '../../assets/delete_24dp.svg';
import arrowDownIcon from '../../assets/arrow_drop_down_24dp.svg';
import arrowUpIcon from '../../assets/arrow_drop_up_24dp.svg';
import InputFieldCheckbox from '../InputFieldCheckbox';

function AdvanceForwardInput(props){
    const [visible, setVisible] = useState(true);
    const [aaAmount, setAAAmount] = useState(10);
    const [avPoint, setAVPoint] = useState(0);

    const charList = [
        {key: 0, name: 'check0', value: 1},
        {key: 1, name: 'check1', value: 2},
        {key: 2, name: 'check2', value: 3},
        {key: 3, name: 'check3', value: 4}]
    
    let aaTypeName = props.aaID + 'TypeInput';
    let avPointName = props.aaID + 'AVPoint';
    let formName = props.aaID + 'Checkboxes';

    function handleVisible(){
        setVisible(prevVisible => !prevVisible);
    }

    function onChangeAA(event){
        setAAAmount(prevAAAmount => event.target.value);
    }

    function onChangeAVP(event){
        setAVPoint(prevAVPoint => event.target.value);
    }

    return (
        <div className='input-container'>
            <div className='input-container-icon-bar'>
                <div className='input-container-icon-bar-title'>
                    <input 
                        name={aaTypeName}
                        defaultValue={props.aaID}/>
                </div>
                
                <button type='button' onClick={handleVisible}>
                    <img src={visible ? arrowUpIcon : arrowDownIcon} alt='Expand/Minimise'/>
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
                <InputFieldCheckbox 
                    label='Character/s'
                    name={formName}
                    list={charList}
                    aaID={props.aaID} />
            </div>
        </div>
    );
}

export default AdvanceForwardInput;