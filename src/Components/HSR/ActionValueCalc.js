import React, {useState} from 'react';
import InputField from '../InputField';
import ActionValueDisplay from './ActionValueDisplay';

function ActionValueCalc(){
    //general speed formula: Base SPD x (1 + SPD%) + Flad SPD
    let actionValue = 1000; //maximum av to calculate for
    const numChars = [
        { label: `1st Character's speed`, name: 'char1'},
        { label: `2nd Character's speed`, name: 'char2'},
        { label: `3rd Character's speed`, name: 'char3'},
        { label: `4th Character's speed`, name: 'char4'}
    ];

    const [char1MovePoints, setChar1MovePoints] = useState([]);
    const [char2MovePoints, setChar2MovePoints] = useState([]);
    const [char3MovePoints, setChar3MovePoints] = useState([]);
    const [char4MovePoints, setChar4MovePoints] = useState([]);

    function handleCalculate(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        //inputted speed before action advances and speed increases
        const speeds = [formData.get('char1'), formData.get('char2'), formData.get('char3'), formData.get('char4')];

        actionValue = formData.get('actionValue');
        if (actionValue > 2000) {
            actionValue = 2000;
        }
        //console.log(actionValue);

        setChar1MovePoints(prev => calcMovePoints(speeds[0], 1));
        setChar2MovePoints(prev => calcMovePoints(speeds[1], 2));
        setChar3MovePoints(prev => calcMovePoints(speeds[2], 3));
        setChar4MovePoints(prev => calcMovePoints(speeds[3], 4));
        //speeds.map((speed) => calcMovePoints(speed))
    }

    function calcMovePoints(speed, character){
        //Base action Value = 10000/SPD
        //console.log('character:' + character);
        let av = 10000/speed;
        let lapsedAV = 0;
        let movePoints = [];

        let increment = 0;
        while (lapsedAV < actionValue){
           lapsedAV += av;
           if (lapsedAV < actionValue){
                movePoints.push({x: lapsedAV, y: character, id:increment});
                increment++; 
           }
        }

        console.log(movePoints);
        //setChar1MovePoints(prev => movePoints);
        return movePoints;
    }

    return (
        <div className='content-container'>
            <div className='calc-content'>
                <div className='calc-content-column-a'>
                    <div className='content'>
                        <form onSubmit={handleCalculate}>
                            <InputField
                                label='Action Value Limit'
                                name='actionValue'
                                type='number'
                                defaultValue={actionValue} 
                                placeholder='Action Value'/>
                            {
                                numChars.map((item) => 
                                    <InputField 
                                        label={item.label}
                                        name={item.name}
                                        type='number'
                                        defaultValue='100'
                                        placeholder='Character Speed Value' />
                                )
                            }
                            <div className='content-button'>
                                <button>Calculate!</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='calc-content-column-b'>
                    <ActionValueDisplay 
                        char1MV={char1MovePoints} 
                        char2MV={char2MovePoints}
                        char3MV={char3MovePoints}
                        char4MV={char4MovePoints}
                        />
                </div>
            </div>
        </div>
    );
}

export default ActionValueCalc;