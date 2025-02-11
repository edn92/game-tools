import React, {useState} from 'react';
import InputField from '../InputField';
import InputFieldRadio from '../InputFieldRadio';
import InputFieldDropdown from '../InputFieldDropdown';
import gsIcon from '../../assets/mh/icon_gs.png';
import snsIcon from '../../assets/mh/icon_sns.png';
import dbIcon from '../../assets/mh/icon_db.png';
import lsIcon from '../../assets/mh/icon_ls.png';
import haIcon from '../../assets/mh/icon_hammer.png';
import hhIcon from '../../assets/mh/icon_hh.png';
import laIcon from '../../assets/mh/icon_lance.png';
import glIcon from '../../assets/mh/icon_gl.png';
import saIcon from '../../assets/mh/icon_swaxe.png';
import cbIcon from '../../assets/mh/icon_cb.png';
import igIcon from '../../assets/mh/icon_ig.png';
import bowIcon from '../../assets/mh/icon_bow.png';
import hbgIcon from '../../assets/mh/icon_hbg.png';
import lbgIcon from '../../assets/mh/icon_lbg.png';

function MHWeaponForm(){
    const [isMelee, setIsMelee] = useState(true);
    const sharpnessList = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'White', 'Purple'];
    let critChance = 5, critDamage = 25, eleCritDamage = 35;

    function handleWeaponChange(event){
        let weapon = (event.target.value);
        switch(weapon){
            case 'gs':
                setIsMelee(prev => true);
                break;
            case 'sns':
                setIsMelee(prev => true);
                break;
            case 'db':
                setIsMelee(prev => true);
                break;
            case 'ls':
                setIsMelee(prev => true);
                break;
            case 'hammer':
                setIsMelee(prev => true);
                break;
            case 'hh':
                setIsMelee(prev => true);
                break;
            case 'lance':
                setIsMelee(prev => true);
                break;
            case 'gl':
                setIsMelee(prev => true);
                break;
            case 'swAxe':
                setIsMelee(prev => true);
                break;
            case 'cb':
                setIsMelee(prev => true);
                break;
            case 'ig':
                setIsMelee(prev => true);
                break;
            case 'bow':
                setIsMelee(prev => false);
                break;
            case 'hbg':
                setIsMelee(prev => false);
                break;
            case 'lbg':
                setIsMelee(prev => false);
                break;
            default:
                break;
        }
    }
    return (
        <div className='content'>
            <h2>Weapon Stats</h2>
            <fieldset onChange={handleWeaponChange}>
                <div className='content-radio-group'>
                    <InputFieldRadio 
                        name='weaponType'
                        value='gs'
                        useIcon={true}
                        icon={gsIcon}
                        checked={true} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='sns'
                        useIcon={true}
                        icon={snsIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='db'
                        useIcon={true}
                        icon={dbIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='ls'
                        useIcon={true}
                        icon={lsIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='ha'
                        useIcon={true}
                        icon={haIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='hh'
                        useIcon={true}
                        icon={hhIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='la'
                        useIcon={true}
                        icon={laIcon}
                        checked={false} />
                </div>
                <div className='content-radio-group'>
                    <InputFieldRadio 
                        name='weaponType'
                        value='gl'
                        useIcon={true}
                        icon={glIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='sa'
                        useIcon={true}
                        icon={saIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='cb'
                        useIcon={true}
                        icon={cbIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='ig'
                        useIcon={true}
                        icon={igIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='bow'
                        useIcon={true}
                        icon={bowIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='hbg'
                        useIcon={true}
                        icon={hbgIcon}
                        checked={false} />
                    <InputFieldRadio 
                        name='weaponType'
                        value='lbg'
                        useIcon={true}
                        icon={lbgIcon}
                        checked={false} />
                </div>
            </fieldset>
            <InputField 
                label='Raw Damage'
                name='rawDamage'
                type='number'
                defaultValue='150'
                placeholder='150' />
            <InputField 
                label='Elemental Damage'
                name='eleDamage'
                type='number'
                defaultValue='60'
                placeholder='60' />
            {
                isMelee ? 
                <InputFieldDropdown 
                    label='Sharpness'
                    name='sharpness'
                    defaultOption='Green'
                    list={sharpnessList} />
                : null
            }
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
                label='Elemental Crit Damage%'
                name='eleCritDamage' 
                type='number' 
                defaultValue={eleCritDamage}
                placeholder={eleCritDamage} />
            <InputField 
                label='Physical Hitzone'
                name='monPhysHitzone' 
                type='number' 
                defaultValue='45'
                placeholder='45' />
            <InputField 
                label='Elemental Hitzone'
                name='monEleHitzone' 
                type='number' 
                defaultValue='20'
                placeholder='20' />
        </div>
    );
}

export default MHWeaponForm;