import React, {useState} from 'react';
import InputField from '../InputField';
import ActionValueDisplay from './ActionValueDisplay';
import AdvanceForwardInput from './AdvanceForwardInput';
import { convertPercentage } from '../../Utilities/Utils';

let aaID = 0; //increments each time an aa is added

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

    const [aaPoints, setAAPoints] = useState([]);
    const [graphAAPoints, setGraphAAPoints] = useState([]); //id, amount to aa, aa point, character to aa
    
    function handleCalculate(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        //inputted speed before action advances and speed increases
        const speeds = [formData.get('char1'), formData.get('char2'), formData.get('char3'), formData.get('char4')];

        actionValue = formData.get('actionValue');
        if (actionValue > 2000) {
            actionValue = 2000;
        }
        
        //calculate aa graph points
        //const aaGP = [];
        const aaGP = calcAAGraphPoints(formData);
        setGraphAAPoints([...aaGP]);

        setChar1MovePoints(calcMovePoints(speeds[0], 1, aaGP));
        setChar2MovePoints(calcMovePoints(speeds[1], 2, aaGP));
        setChar3MovePoints(calcMovePoints(speeds[2], 3, aaGP));
        setChar4MovePoints(calcMovePoints(speeds[3], 4, aaGP));
    }

    function calcAAGraphPoints(formData) {
        const aaGP = [];
        let aaID = 0;

        aaPoints.forEach((item) => {
                let aaAmount = formData.get(item.aaID);
                if (aaAmount > 100){
                    aaAmount = 100;
                } else if (aaAmount < 0){
                    aaAmount = 0;
                }
                let aaPoint = formData.get(item.aaID + 'AVPoint');
                let aaChar = formData.get(item.aaID + 'Dropdown');
            //console.log('aachar: ' + aaChar);
                if (aaChar === 'All') { //0 is for all characters
                    for (let i = 1; i <= 4; i++) {
                        aaGP.push({ aaID: aaID, aaAmount: aaAmount, aaPoint: aaPoint, aaChar: i });
                        aaID++;
                    }
                } else {
                    aaGP.push({ aaID: aaID, aaAmount: aaAmount, aaPoint: aaPoint, aaChar: parseInt(aaChar) });
                    aaID++;
                }
            }
        );
        
        //setGraphAAPoints([...aaGP]);
        return aaGP;
    }

    function calcMovePoints(speed, character, aaGP){
        //console.log(aaGP);
        //Base action Value = 10000/SPD
        let av = 10000/speed; //av character takes based on their speed
        let lapsedAV = 0;
        let nextMove = 0; //nextmove is calculated before action advance
        let movePoints = [];
        let i = 0; //aapoint index
        let mpID = 0; //id for movepoints array
        
        //find every point which this character has in graphAAPoints
        let charAAPoints = aaGP.filter(a => a.aaChar === character);

        //show next action outside of the limit to see how close the next action is
        while (lapsedAV <= actionValue){ 
            lapsedAV += av;
            nextMove = lapsedAV;
            //console.log('nextmove is: ' + nextMove + ' before aa');
            if (i < charAAPoints.length){
                let gAAP = charAAPoints[i];
                //console.log('char: ' + graphAAPoints[i].aaChar + ' aaPoint: ' + graphAAPoints[i].aaPoint);
                if (gAAP.aaPoint <= nextMove){
                    //amount of av to aa by
                    let aa = (nextMove - gAAP.aaPoint) * (convertPercentage(gAAP.aaAmount));
                    nextMove = nextMove - aa; 
                    //console.log('nextmove ' + nextMove);
                    movePoints.push({x: nextMove, y: character, id:mpID});
                    mpID++; 
                    i++;
                    lapsedAV = nextMove;
                } else {
                    movePoints.push({x: nextMove, y: character, id:mpID});
                    mpID++; 
                    lapsedAV = nextMove;
                }
            } else {
                movePoints.push({x: nextMove, y: character, id:mpID});
                mpID++; 
                lapsedAV = nextMove;
            }
        }
        /* original
        while (lapsedAV < actionValue){
           lapsedAV += av;
           if (lapsedAV <= actionValue){
                movePoints.push({x: lapsedAV, y: character, id:increment});
                increment++; 
           }
        }
        */

        return movePoints;
    }

    function addAAPoint(){
        aaID += 1;
        let id= 'AA' + (aaID);
        setAAPoints(prevAAPoints => [...prevAAPoints, {aaID: id, aaAmount: '10'}]);
    }

    function removeAAPoint(id){
        //remove from char aa arrays as well
        setAAPoints(prevAAPoints => prevAAPoints.filter(a=> a.aaID !== id));
    }

    return (
        <div className='content-container'>
            <div className='calc-content'>
                <div className='calc-content-column-a'>
                    <div className='content'>
                        <form onSubmit={handleCalculate}>
                            <h2>Action Value Calculator</h2>
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
                            {
                                aaPoints.length !== 0 ?
                                    (
                                        <fieldset>
                                            <h2>Action Advances</h2>
                                            { 
                                                aaPoints.map((item) => 
                                                    <div>
                                                        <AdvanceForwardInput 
                                                            aaID={item.aaID} 
                                                            onClick={() => removeAAPoint(item.aaID)}/>
                                                    </div>
                                                ) 
                                            }
                                        </fieldset>
                                    )
                                : null
                            }
                            <div className='content-button'>
                                <button type='button' onClick={addAAPoint}>Add AA point</button>
                                <button type='submit'>Calculate!</button>
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
                        aaPoints={graphAAPoints}
                        />
                </div>
            </div>
        </div>
    );
}

export default ActionValueCalc;