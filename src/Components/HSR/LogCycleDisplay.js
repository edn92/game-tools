import { useState } from "react";
import arrowDown from '../../assets/arrow_drop_down_24dp.svg';
import arrowUp from '../../assets/arrow_drop_up_24dp.svg';

function LogCycleDisplay(props){
    const [visible, setVisible] = useState(true);

    function handleVisible(){
        setVisible(prevVisible => !prevVisible);
    }

    function LogEntriesByCycle(props){
        return (
            <div>
                {
                    props.moveLog.map((line) => 
                        <LogEntry av={line.av} character={line.char} message={line.message}/>
                    )
                }
            </div>
        );
    }

    function LogEntry(props){
        let colour;

        switch(props.character){
            case 1:
                colour = 'var(--color-fire)';
                break;
            case 2:
                colour = 'var(--color-ice)';
                break;
            case 3:
                colour = 'var(--color-imaginary)';
                break;
            case 4:
                colour = 'var(--color-wind)';
                break;
            default: break;
        }
        return (
            <div className='log-line'>
                <span className='log-line-timestamp'>{props.av.toFixed(2)}:</span>
                <span className='log-line-action'>Character 
                    <mark style={{'color': colour}}> {props.character}</mark>
                    {props.message}
                </span>
            </div>
        );
    }

    return(
        <div className='log-cycle-container'>
            <div className='log-cycle-expandable'>
                <div className='log-cycle-label'>
                    <label>Cycle {props.cycle}</label>
                </div>
                <div className='log-cycle-expandable-icon'> 
                    <button type='button' onClick={handleVisible}>
                        <img className='flip-arrow-icon' src={ visible ? arrowUp: arrowDown } alt='Expand/Minimise'/>
                    </button>
                </div>
            </div>
            {
                visible ? <LogEntriesByCycle moveLog={props.moveLog}/> : null
            }
        </div>
    );
}

export default LogCycleDisplay;