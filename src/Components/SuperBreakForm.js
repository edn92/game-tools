import React from 'react';
import InputField from './InputField';
//import { convertPercentage, calculateDefMulti, checkIfExceedsHundredPercent } from '../Utilities/Utils';

function SuperBreakForm(){
    let enemyLevel = 95;
    let toughnessDam = 10;
    let weaknessBE = 100;
    let breakEffect = 0, defIgnore = 0, vuln = 0, resPen = 0, enemyRes = 0;
    let sBMulti = 100;
    /*const [totalDamage, setTotalDamage] = useState(0);
    
    function handleCalculate(event){
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData(formEl);

        enemyLevel = formData.get('enemyLevel');
        toughnessDam = formData.get('toughness');
        weaknessBE = formData.get('weaknessBE');
        breakEffect = formData.get('breakEffect');
        defIgnore = formData.get('defIgnore');
        vuln = formData.get('vuln');
        resPen = formData.get('resPen');
        enemyRes = formData.get('enemyRes');
        sBMulti = formData.get('sBMulti');
        assume character is level 80
        super break formula:
        Lvl Multiplier * (Toughness DMG / 30) * 
        (1 + Break Effect) * (1 + Super Break DMG Increase) * DEF Multi * 
        Res Multi * Vuln Multi * Broken Multi

        def multi formula:
        (characterLevel + 20) /
        (enemyLevel + 20) * (1 + %DEF Bonus - %DEF Reduction - %DEF Ignore) +
        characterLevel + 20
        
        const levelMulti = 3767.5533; 
        let td = (parseFloat(toughnessDam)/10) * convertPercentage(weaknessBE);
        let defMulti = calculateDefMulti(80, enemyLevel, defIgnore);
        let rp = checkIfExceedsHundredPercent(resPen);

        let damage = (levelMulti * (td) * 
            (1 + convertPercentage(breakEffect)) * defMulti * 
            (1 + convertPercentage(rp)) * (1 + convertPercentage(vuln)) * 
            convertPercentage(sBMulti)) * (1 - convertPercentage(enemyRes));
        setTotalDamage(prevTotalDamage => damage);
    }*/

    return (
        <div className='content'>
            <h2>Superbreak modifiers</h2>
            <InputField
                label='Enemy Level'
                name='enemyLevel' 
                type='number'
                defaultValue={enemyLevel} 
                placeholder={enemyLevel} />
            <InputField
                label='Toughness Damage'
                name='toughness' 
                type='number' 
                defaultValue={toughnessDam}
                placeholder={toughnessDam} />
            <InputField
                label='WBE%'
                name='weaknessBE' 
                type='number' 
                defaultValue={weaknessBE}
                placeholder={weaknessBE} />
            <InputField
                label='Break Effect'
                name='breakEffect' 
                type='number' 
                defaultValue={breakEffect}
                placeholder={breakEffect} />
            <InputField 
                label='Defence Ignore%'
                name='defIgnore' 
                type='number' 
                defaultValue={defIgnore}
                placeholder={defIgnore} />
            <InputField 
                label='Vuln Effect%'
                name='vuln' 
                type='number'
                defaultValue={vuln} 
                placeholder={vuln} />
            <InputField
                label='Res Pen%'
                name='resPen' 
                type='number'
                defaultValue={resPen} 
                placeholder={resPen} />
            <InputField
                label='Enemy Res%'
                name='enemyRes' 
                type='number'
                defaultValue={enemyRes} 
                placeholder={enemyRes} />
            <InputField
                label='SB Multiplier%'
                name='sBMulti' 
                type='number'
                defaultValue={sBMulti} 
                placeholder={sBMulti} />
        </div>
    );
}

export default SuperBreakForm;