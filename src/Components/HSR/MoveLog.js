import { useState } from "react";
import LogCycleDisplay from "./LogCycleDisplay";

function MoveLog(props){
    const moveLog = props.moveLog.sort((a, b) => a.av - b.av);
    const cycles = props.cycles;
    
    const filterOptions = [
        { key: 0, value: 0, label: 'All' },
        { key: 1, value: 1, label: 'Character 1' },
        { key: 2, value: 2, label: 'Character 2' },
        { key: 3, value: 3, label: 'Character 3' },
        { key: 4, value: 4, label: 'Character 4' } ]

    const [filter, setFilter] = useState(filterOptions[0].value);
    
    function onChangeFilter(event){
        let filterBy =  parseInt(event.target.value);
        setFilter(prevFilter => filterBy);
    }

    return (
        <div className='input-container'>
            <div className='header-label-container'>
                <h2>Character Move Log</h2>
                <div className='filter-options-container'>
                    <label>Filter by: </label>
                    <select 
                        name='FilterByDropdown'
                        onChange={onChangeFilter}>
                        {
                            filterOptions.map((option) =>
                                <option key={option.key} className='select-items' value={option.value}>{option.label}</option>
                            )
                        }
                    </select>
                </div>
            </div>
            {
                filter === 0 ?
                    cycles.map((cycle) => 
                        <LogCycleDisplay cycle={cycle} moveLog={moveLog.filter((r) => r.cycle === cycle)}/> 
                    ) 
                : cycles.map((cycle) => 
                        <LogCycleDisplay cycle={cycle} moveLog={moveLog.filter((r) => r.cycle === cycle && r.char === filter)}/> 
                    ) 
            }
        </div>
    );
}

export default MoveLog;