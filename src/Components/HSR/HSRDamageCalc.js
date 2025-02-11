import React, {useState} from 'react';
import InputField from '../InputField'
import InputFieldRadio from '../InputFieldRadio';
import { convertPercentage, calculateDefMulti, checkIfExceedsHundredPercent } from '../../Utilities/Utils';

function HSRDamageCalc(){
    let enemyLevel = 95;
    let skillMulti = 50;
    let scalingAttribute = 100;
    let critChance = 5;
    let critDamage = 50;
    let dmgMulti = 100;
    let defIgnore = 0, vuln = 0, resPen = 0, enemyRes = 0;
    let weaknessBroken = false;
    const [totalDamage, setTotalDamage] = useState(0);
    const [avgDmg, setAvgDMG] = useState(0);
    const [maxDmg, setMaxDmg] = useState(0);

    function handleCalculate(event){
        //Base DMG * DMG% Multiplier * DEF Multiplier * RES Multiplier * 
        // DMG Taken Multiplier * Universal DMG Reduction Multiplier 
        // * Weaken Multiplier
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        enemyLevel = formData.get('enemyLevel');
        skillMulti = formData.get('skillMulti');
        scalingAttribute = formData.get('scalingAttribute');
        critChance = formData.get('critChance');
        critDamage = formData.get('critDamage');
        dmgMulti = formData.get('dmgMulti');
        defIgnore = formData.get('defIgnore');
        vuln = formData.get('vuln');
        resPen = formData.get('resPen');
        enemyRes = formData.get('enemyRes');
        weaknessBroken = formData.get('weaknessBroken');

        let baseDamage = convertPercentage(skillMulti) * scalingAttribute;
        let defMulti = calculateDefMulti(80, enemyLevel, defIgnore);
        let resMulti = convertPercentage(100 - (enemyRes - resPen));
        let dr = 90;
        if (weaknessBroken === 'Yes'){
            dr = 100;
        }
        /*let damage = Math.round((baseDamage * convertPercentage(dmgMulti) * 
            defMulti * resMulti * convertPercentage(dmgReduction)) * 100) / 100;*/
        let damage = Math.round((baseDamage * convertPercentage(dmgMulti) * 
        defMulti * resMulti * convertPercentage(dr)) * 100) / 100;
        let cc = convertPercentage(checkIfExceedsHundredPercent(critChance));
        let cd = 1 + convertPercentage(critDamage);

        setTotalDamage(prevTotalDamage => Math.round(damage));
        setAvgDMG(prevAvgDMG => Math.round((damage * cc * cd + damage * (1-cc)) * 100) / 100);
        setMaxDmg(prevMaxDmg => Math.round(damage * cd));
    }

    return (
        <div className='content-container'>
            <form onSubmit={handleCalculate}>
                <div className='calc-content'>
                    <div className='calc-content-column-a max-width-column'>
                        <div className='content'>
                            <h2>Damage Calculator</h2>
                            <InputField 
                                label='Enemy Level'
                                name='enemyLevel'
                                type='number'
                                defaultValue={enemyLevel}
                                placeholder={enemyLevel} />
                            <InputField 
                                label='Skill Multiplier%'
                                name='skillMulti' 
                                type='number' 
                                defaultValue={skillMulti}
                                placeholder={skillMulti} />
                            <InputField 
                                label='Scaling Attribute'
                                name='scalingAttribute' 
                                type='number' 
                                defaultValue={scalingAttribute}
                                placeholder={scalingAttribute} />
                            <InputField 
                                label='Critical Chance%'
                                name='critChance'
                                type='number' 
                                defaultValue={critChance}
                                placeholder={critChance} />
                            <InputField 
                                label='Critical Damage%'
                                name='critDamage' 
                                type='number' 
                                defaultValue={critDamage}
                                placeholder={critDamage} />
                            <InputField 
                                label='Damage Multiplier%'
                                name='dmgMulti' 
                                type='number' 
                                defaultValue={dmgMulti}
                                placeholder={dmgMulti} />
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
                                placeholder={enemyRes}  />
                            <div className='content-form'>
                                <div className='content-label'>
                                    <label>Weakness Broken: </label>
                                </div>
                                <div className='content-input'>
                                    <div className='content-radio-group'>
                                        <InputFieldRadio 
                                            name='weaknessBroken'
                                            value='Yes'
                                            checked={false}
                                            tileType='start' />
                                        <InputFieldRadio
                                            name='weaknessBroken'
                                            value='No'
                                            tileType='end'
                                            checked={true}  />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-width-column'>
                            <div className='content'>
                                <h2>Summary</h2>
                                <p><b>Damage:</b> {totalDamage}</p>
                                <p><b>Average Damage:</b> {avgDmg}</p>
                                <p><b>Maximum Damage:</b> {maxDmg}</p>
                                <p>This calculator assumes the character is level 80 for
                                 all calculations.</p>
                                <div className='content-button'>
                                    <button>Calculate!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default HSRDamageCalc;