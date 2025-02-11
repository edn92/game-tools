import React, { useState } from 'react';
import SuperBreakForm from './SuperBreakForm';
import BreakDamageForm from './BreakDamageForm';
import { convertPercentage, calculateDefMulti, checkIfExceedsHundredPercent } from '../../Utilities/Utils';

function BreakDamageCalc(){
    const [sbDamage, setSBDamage] = useState(0);
    const [breakDamage, setBreakDamage] = useState(0);
    const [effectColor, setEffectColour] = useState('var(--color-physical)');
    const [effectType, setEffectType] = useState(''); //burn, bleed etc
    //const [addEffType, setAddEffType] = useState(''); 
    const [addBreakDOT, setAddBreakDOT] = useState(''); //dot damage/imprisonment delay amount
    const [addEffDesc, setAddEffDesc] = useState(''); //starting desc
    const [addEffDescEnd, setAddEffDescEnd] = useState(''); //ending desc
    const [actionDelay, setActionDelay] = useState('');

    function calculate(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        let enemyLevel = formData.get('enemyLevel');
        let toughnessDam = formData.get('toughness');
        let weaknessBE = formData.get('weaknessBE');
        let breakEffect = formData.get('breakEffect');
        let defIgnore = formData.get('defIgnore');
        let vuln = formData.get('vuln');
        let resPen = formData.get('resPen');
        let enemyRes = formData.get('enemyRes');
        let sBMulti = formData.get('sBMulti');
        /*assume character is level 80
        super break formula:
        Lvl Multiplier * (Toughness DMG / 30) * 
        (1 + Break Effect) * (1 + Super Break DMG Increase) * DEF Multi * 
        Res Multi * Vuln Multi * Broken Multi

        def multi formula:
        (characterLevel + 20) /
        (enemyLevel + 20) * (1 + %DEF Bonus - %DEF Reduction - %DEF Ignore) + characterLevel + 20
        level 60 = 1640.3068 level 75 = 3239.9758 level 80 = 3767.5533*/
        const levelMulti = 3767.5533, level = 80; 
        let td = (parseFloat(toughnessDam)/10) * convertPercentage(weaknessBE);
        let defMulti = calculateDefMulti(level, enemyLevel, defIgnore);
        breakEffect = 1 + convertPercentage(breakEffect)
        resPen = 1 + convertPercentage(checkIfExceedsHundredPercent(resPen));
        vuln = 1 + convertPercentage(vuln);
        enemyRes = 1 - convertPercentage(enemyRes);

        let sbDam = (levelMulti * td * breakEffect * defMulti * 
            resPen * vuln * convertPercentage(sBMulti)) * (enemyRes);
        setSBDamage(prevSBDamage => Math.round(sbDam));

        calcBreakEffects(levelMulti, breakEffect, defMulti, resPen, vuln, enemyRes, formData);
    }

    function calcBreakEffects(levelMulti, breakEffect, defMulti, resPen, vuln, enemyRes, formData) {
        let eleType = formData.get('eleType');
        let breakMulti = convertPercentage(formData.get('breakMulti')); //eg boothill, rappa and ruan mei talents
        let toughnessMulti = 0.5 + (formData.get('toughnessBar')/40);
        let eleDOTMulti = 1;
        let baseDam = levelMulti;//levelMulti * baseBreakMulti; //(baseBreakMulti * toughnessMulti);

        let colour, effType, effDesc, effDescEnd;
        switch (eleType) {
            case 'physical':
                //use the smaller of the 2 values
                eleDOTMulti = 1;
                baseDam = levelMulti * 2;
                let bleedDam = baseDam;
                let maxHP = formData.get('maxHP') * 0.07;
                if (maxHP < baseDam) {
                    bleedDam = maxHP;
                }
                calcBreakDOT(bleedDam, eleDOTMulti, breakEffect, defMulti, resPen, vuln, enemyRes);
                setActionDelay(prevActionDelay => 25)
                colour = 'var(--color-physical)';
                effType = 'Bleed';
                effDesc = ', dealing ';
                effDescEnd = ' damage at the start of their turn for 2 turns. Next action is delayed by ';
                updateOutput(colour, effType, effDesc, effDescEnd);
                break;
            case 'fire':
                eleDOTMulti = 1;
                calcBreakDOT(baseDam, eleDOTMulti, breakEffect, defMulti, resPen, vuln, enemyRes);
                baseDam = levelMulti * 2;
                setActionDelay(prevActionDelay => 25)
                colour = 'var(--color-fire)';
                effType = 'Burn';
                effDesc = ', dealing ';
                effDescEnd = ' damage at the start of their turn for 2 turns. Next action is delayed by ';
                updateOutput(colour, effType, effDesc, effDescEnd);
                
                break;
            case 'ice':
                eleDOTMulti = 1;
                calcBreakDOT(baseDam, eleDOTMulti, breakEffect, defMulti, resPen, vuln, enemyRes);
                setActionDelay(prevActionDelay => 25)
                //let text = 'Enemy is Frozen and takes ' + additionalEffects +  ' damage at the start of their turn.'
                colour = 'var(--color-ice)';
                effType = 'Frozen';
                effDesc = ', dealing ';
                effDescEnd = ' damage at the start of their turn. Next action is delayed by ';
                updateOutput(colour, effType, effDesc, effDescEnd);
                break; 
            case 'wind':
                eleDOTMulti = 1;
                calcBreakDOT(baseDam, eleDOTMulti, breakEffect, defMulti, resPen, vuln, enemyRes);   
                setActionDelay(prevActionDelay => 25)
                baseDam = levelMulti * 1.5;
                colour = 'var(--color-wind)';
                effType = 'Wind Shear'; 
                effDesc = ', dealing ';
                effDescEnd = ' damage per stack at the start of their turn for 2 turns. Stacks up to 5 times. Next action is delayed by ';
                updateOutput(colour, effType, effDesc, effDescEnd);
                break;
            case 'lightning':
                eleDOTMulti = 2;
                calcBreakDOT(baseDam, eleDOTMulti, breakEffect, defMulti, resPen, vuln, enemyRes);
                setActionDelay(prevActionDelay => 25)
                colour = 'var(--color-lighting)';
                effType = 'Shocked';
                effDesc = ', dealing ';
                effDescEnd = ' damage at the start of their turn for 2 turns. Next action is delayed by ';
                updateOutput(colour, effType, effDesc, effDescEnd);
                break; 
            case 'quantum':
                eleDOTMulti = 0.6;
                calcBreakDOT(baseDam, eleDOTMulti, breakEffect, defMulti, resPen, vuln, enemyRes);
                baseDam = levelMulti * 0.5;
                calcActionDelay(20, breakEffect);
                colour = 'var(--color-quantum)';
                effType = 'Entanglement';
                effDesc = ', dealing ';
                effDescEnd = ' damage per stack at the start of their turn. Gains 1 stack each time target is hit, stacking up to 5 times. Next action is delayed by ';
                updateOutput(colour, effType, effDesc, effDescEnd);
                break; 
            case 'imaginary':
                baseDam = levelMulti * 0.5;
                calcActionDelay(30, breakEffect);  
                colour =  'var(--color-imaginary)';
                effType = 'Imprisonment'; 
                effDesc =  ''; 
                effDescEnd = ', speed is reduced by 10% and their next action is delayed by ';
                setAddBreakDOT(prevAddBreakDOT => ''); //imaginary has no additional damage
                updateOutput(colour, effType, effDesc, effDescEnd)
                break;   
            default:
                break;
        }
        /* break damage calc: DMG = 
        Base DMG x (1 + Break Effect%) x DEF Multiplier x RES Multiplier x 
        0.9 x Max Toughness Multiplier 
        Base DMG = Base Break DMG x Element Break Multiplier
        Max Tougness Multiplier = 0.5 + (toughness/40)
        Weakness Multiplier is always 0.9 as you can’t deal Weakness Break DMG if the enemy is weakened*/
        let breakDam = baseDam * breakEffect * defMulti * resPen * vuln * toughnessMulti * enemyRes * breakMulti;
        setBreakDamage(prevBreakDamage => Math.round(breakDam));
    }

    function calcBreakDOT(baseDam, eleDOTMulti, breakEffect, defMulti, resPen, vuln, enemyRes) {
        //0.533
        //console.log(baseDam + ' ' + eleDOTMulti + ' ' + defMulti);
        let breakDot = (baseDam * eleDOTMulti) * breakEffect *
        defMulti * resPen * vuln * enemyRes;
        setAddBreakDOT(prevAddBreakDOT => Math.round(breakDot));
    }

    function calcActionDelay(delayAmount, breakEffect){
        let av = delayAmount * breakEffect;
        setActionDelay(prevActionDelay => av);
    }

    function updateOutput(colour, effectType, addEffDesc, addEffDescEnd){
        setEffectColour(prevEffectColour => colour);
        setEffectType(prevEffectType => effectType);
        setAddEffDesc(prevAddEffDesc => addEffDesc);
        setAddEffDescEnd(prevAddEffDescEnd => addEffDescEnd);
    }

    return (
        <div className='content-container'>
            <form onSubmit={calculate}>
                <div className='calc-content'>
                    <div className='calc-content-column-a'>
                        <SuperBreakForm />
                    </div>
                    <div className='calc-content-column-b max-width-column'>
                        <BreakDamageForm />
                        <div className='calc-content-column-b-output'>
                            <div className='content'>
                                <h2>Summary</h2>
                                <p><b>SB Damage:</b> <mark style={{'color': effectColor}}>{sbDamage}</mark></p>
                                <p><b>Break Damage:</b> <mark style={{'color': effectColor}}>{breakDamage}</mark></p>
                                <p><b>Weakness Break:</b> 
                                    <mark style={{'color': effectColor}}> {effectType} </mark>
                                    {addEffDesc} 
                                    <mark style={{'color': effectColor}}>{addBreakDOT} </mark>
                                    {addEffDescEnd}
                                    <mark style={{'color': effectColor}}>{actionDelay}</mark>
                                    {actionDelay !== '' ? '%.' : ''}
                                </p>
                                <p>This calculator assumes the character is level 80 for
                                 all calculations and is fighting an elite or boss enemy 
                                 that has been weakness broken.</p>
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

export default BreakDamageCalc;



