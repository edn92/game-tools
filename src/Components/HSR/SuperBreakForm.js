import InputField from '../InputField';
import ButtonFormSubmit from '../ButtonFormSubmit';

function SuperBreakForm(){
    let enemyLevel = 95;
    let toughnessDam = 10;
    let weaknessBE = 100;
    let breakEffect = 0, defIgnore = 0, vuln = 0, resPen = 0, enemyRes = 0;
    let sBMulti = 100;

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
            
            <div className='content-button'>
                <ButtonFormSubmit text='Calculate!' />
            </div>
        </div>
    );
}

export default SuperBreakForm;