import React, {useState} from 'react'
import MHWeaponForm from './MHWeaponForm';
import { moveSetData } from '../../Utilities/MHMotionValueData';
import MHMoveSet from './MHMoveSet';
import { convertPercentage, checkIfExceedsHundredPercent } from '../../Utilities/Utils';
import MHFormSummary from './MHFormSummary';

function MHMotionValueCalc(){
    const [weaponMoveSet, setWeaponMoveSet] = useState([]);

    //https://www.reddit.com/r/MonsterHunter/comments/1hysurz/i_dont_understand_the_damage/
    function calculate(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let raw = formData.get('rawDamage') / calcBloatValue(formData.get('weaponType'));
        let ele = formData.get('eleDamage') / 10;
        let sharp = calcSharpnessMod(formData.get('sharpness'));
        let cc = convertPercentage(checkIfExceedsHundredPercent(formData.get('critChance')));
        let cd = 1 + convertPercentage(formData.get('critDamage'));
        let ecd = 1 + convertPercentage(formData.get('eleCritDamage'));
        let physHitzone = convertPercentage(checkIfExceedsHundredPercent(formData.get('monPhysHitzone')));
        let eleHitzone = convertPercentage(checkIfExceedsHundredPercent(formData.get('monEleHitzone')));
        
        const importArray = moveSetData(formData.get('weaponType'));
        const moveSetArray = [];
        for (let i =0; i < importArray.length; i++){
            //[0] is raw, [1] is ele
            let dmg = calcDamage(raw, ele, sharp, 
                convertPercentage(importArray[i].motionValue), importArray[i].elementMod, 
                physHitzone, eleHitzone);
            
            let row = {
                name: importArray[i].name, 
                motionValue: importArray[i].motionValue, 
                elementMod: importArray[i].elementMod, 
                statusMod: importArray[i].statusMod,
                eleDmg: dmg[1],
                rawDmg: dmg[0], 
                damage: dmg[0] + dmg[1],
                avgDamage: Math.round(((dmg[0] * cc * cd + dmg[0] * (1-cc)) + 
                    (dmg[1] * cc * ecd + dmg[1] * (1-cc))) * 100) / 100,
                maxCritDamage: Math.round(dmg[0] * cd) + Math.round(dmg[1] * ecd)
            };
            moveSetArray.push(row);
        }
        
        setWeaponMoveSet(prev => moveSetArray);
    }
    
    //bloat values are being used in wilds
    function calcBloatValue(type){
        let value = 1;
        switch(type){
            case 'gs':
                value = 4.8;
                break;
            case 'ls':
                value = 3.3;
                break;
            case 'sns':
                value = 1.4;
                break;
            case 'db':
                value = 1.4;
                break;
            case 'ha':
                value = 5.2;
                break;
            case 'hh':
                value = 4.2;
                break;
            case 'la':
                value = 2.3;
                break;
            case 'gl':
                value = 2.3;
                break;
            case 'sa':
                value = 3.5;
                break;
            case 'cb':
                value = 3.6;
                break;
            case 'ig':
                value = 3.1;
                break;
            case 'lbg':
                value = 1.3;
                break;
            case 'hbg':
                value = 1.5;
                break;
            case 'bow':
                value = 1.2;
                break;
            default:
                break;
        }
        return value;
    }

    function calcSharpnessMod(type){
        let rawMulti = 0.5, eleMulti = 0.25;
        switch(type){
            case 'Red':
                rawMulti = 0.5; //0.25
                eleMulti = 0.25;
                break;
            case 'Orange':
                rawMulti = 0.75; //0.5
                eleMulti = 0.5;
                break;
            case 'Yellow':
                rawMulti = 1; //.75
                eleMulti = 0.75;
                break;
            case 'Green':
                rawMulti = 1.05; //1
                eleMulti = 1;
                break;
            case 'Blue':
                rawMulti = 1.20; //1.0625
                eleMulti = 1.0625;
                break;
            case 'White':
                rawMulti = 1.32; //1.125
                eleMulti = 1.125;
                break;
            case 'Purple':
                rawMulti = 1.39; //1.25
                eleMulti = 1.25;
                break;
            default:
                break;
        }
        const sharpness = [rawMulti, eleMulti];
        return sharpness;
    }

    function calcDamage(raw, ele, sharpness, motionValue, elementMod, physHitzone, eleHitzone){
        let rawDamage = raw * sharpness[0] * motionValue * physHitzone;
        let eleDamage = ele * sharpness[1] * elementMod * eleHitzone;
        const damage = [Math.round(rawDamage), Math.round(eleDamage)];
        return damage;
    }

    return (
        <div className='content-container'>
            <form onSubmit={calculate}>
                <div className='calc-content'>
                    <div className='calc-content-column-a max-width-column'>
                        <MHWeaponForm />
                        <MHFormSummary />
                    </div>
                    <div className='calc-content-column-b'>
                        <MHMoveSet moveSet={weaponMoveSet}/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default MHMotionValueCalc;