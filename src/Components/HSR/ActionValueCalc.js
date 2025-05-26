import React, {useState} from 'react';
import InputField from '../InputField';
import ActionValueDisplay from './ActionValueDisplay';
import AdvanceForwardInput from './AdvanceForwardInput';
import { convertPercentage } from '../../Utilities/Utils';

//let aaID = 0; //increments each time an aa is added
const avLimit = 2000; //ApocShadows current limit
function ActionValueCalc(){
    //general speed formula: Base SPD x (1 + SPD%) + Flad SPD
    let actionValue = 1000; //maximum av to calculate for
    const [numCycles, setNumCycles] = useState();

    const numChars = [
        { id: 0, label: `1st Character's speed`, name: 'char1'},
        { id: 1, label: `2nd Character's speed`, name: 'char2'},
        { id: 2, label: `3rd Character's speed`, name: 'char3'},
        { id: 3, label: `4th Character's speed`, name: 'char4'}
    ];

    const [char1MovePoints, setChar1MovePoints] = useState([]);
    const [char2MovePoints, setChar2MovePoints] = useState([]);
    const [char3MovePoints, setChar3MovePoints] = useState([]);
    const [char4MovePoints, setChar4MovePoints] = useState([]);

    const [aaID, setAAID] = useState(0);
    const [aaPoints, setAAPoints] = useState([]);
    const [graphAAPoints, setGraphAAPoints] = useState([]); //id, amount to aa, aa point, character to aa
    
    const tempMove = [];
    const [moveLog, setMoveLog] = useState([]);
    
    function handleCalculate(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        //inputted speed before action advances and speed increases
        const speeds = [formData.get('char1'), formData.get('char2'), formData.get('char3'), formData.get('char4')];

        actionValue = formData.get('actionValue');
        if (actionValue > avLimit) {
            actionValue = avLimit;
        }

        let cycles = 1 + Math.ceil((actionValue - 150)/100);
        setNumCycles(prevCycles => cycles);

        //calculate aa graph points
        const aaGP = calcAAGraphPoints(formData);
        setGraphAAPoints([...aaGP]);

        setChar1MovePoints(calcMovePoints(speeds[0], 1, aaGP));
        setChar2MovePoints(calcMovePoints(speeds[1], 2, aaGP));
        setChar3MovePoints(calcMovePoints(speeds[2], 3, aaGP));
        setChar4MovePoints(calcMovePoints(speeds[3], 4, aaGP));

        setMoveLog(prevMoveLog => tempMove);
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
                if (aaPoint < 0){
                    aaPoint = 0;
                }

                let aaChar = formData.get(item.aaID + 'Dropdown');
                if (aaChar === 'All') {
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
        
        return aaGP;
    }

    function calcMovePoints(speed, character, aaGP){
        //New Action Gauge =  max(0 , Current Action Gauge – 10000 * (Advance Forward% – Action Delay%))
        //new atv = old atv +-((10000 * %buff)/spd)
        /* old atv = 41
        (10000 * .25) / 130 = 19.546
        new atv = 19.546 + 41 = 60.546 */
        
        let av = 10000/speed;
        let movePoints = []; //array to return
        let mpID = 0; //id for movepoints array

        //find every point which this character has in graphAAPoints
        let charAAPoints = aaGP.filter(a => a.aaChar === character);
        charAAPoints.sort((a, b) => a.aaPoint - b.aaPoint);
        
        for (let lapsedAV = 0; lapsedAV <= actionValue;){
            let nextMove = lapsedAV + av;

            if (charAAPoints.length > 0){
                let aaPointsCopy = charAAPoints;
                charAAPoints.forEach((item) => {
                    if (item.aaPoint <= nextMove && item.aaPoint >= lapsedAV){
                        let aaAmount = (10000 * (convertPercentage(item.aaAmount))) / speed;
                        nextMove = checkNextMoveAfterAdvance(nextMove, aaAmount, item.aaPoint)
                        aaPointsCopy = aaPointsCopy.filter(a => a.aaID !== item.aaID); //remove from array so it doesnt get calculated again

                        //add to move log
                        tempMove.push({
                            av: parseFloat(item.aaPoint, 10),
                            cycle: checkCycle(item.aaPoint), 
                            char: character, 
                            message: ` advances forward by ${aaAmount.toFixed(2)} AV.`});
                    }
                })
                charAAPoints = aaPointsCopy; //replace array with clean copy
            }

            lapsedAV = nextMove;
            movePoints.push({x: lapsedAV, y: character, id:mpID});

            //add to move log
            tempMove.push({
                av: lapsedAV,
                cycle: checkCycle(lapsedAV), 
                char: character, 
                message: ' moves.'});
            mpID++; 
        }

        return movePoints;
    }

    function checkNextMoveAfterAdvance(nextMove, aaAmount, aaPoint){
        let difference = nextMove - aaPoint;
        let x = difference - aaAmount;

        //limit advance forward to the aapoint if it would advance to before the aapoint
        if (x < 0){
            aaAmount =  aaAmount + x; 
        }

        nextMove = nextMove - aaAmount;
        return nextMove;
    }


    function checkCycle(av){
        /*first cycle is 150av, every cycle after is 100av */
        let cycle = 1;
        if (av >= 150) {
            cycle = Math.ceil((av-150)/100) + 1;
            return cycle;
        } else {
            return cycle;
        }
    }

    function addAAPoint(){
        let id= 'AA' + (aaID);
        setAAID(prevAAID => prevAAID = prevAAID + 1);
        setAAPoints(prevAAPoints => [...prevAAPoints, {aaID: id, aaAmount: '10'}]);
    }

    function removeAAPoint(id){
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
                        moveLog={moveLog}
                        cycles={numCycles}
                        />
                </div>
            </div>
        </div>
    );
}

export default ActionValueCalc;