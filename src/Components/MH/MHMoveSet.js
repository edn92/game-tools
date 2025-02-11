import React, {useState} from 'react';
import descIcon from '../../assets/arrow_drop_down_24dp.svg';
import ascIcon from '../../assets/arrow_drop_up_24dp.svg';

function MHMoveSet(props){
    const [sortBy, setSortBy] = useState({keyToSort: 'AttackName', direction: 'asc'});
    const headers = [
        {
            id: 0,
            key: 'name',
            label: 'Attack Name'
        },
        {
            id: 1,
            key: 'motionValue',
            label: 'MV'
        },
        {
            id: 2,
            key: 'elementMod',
            label: 'Element'
        },
        {
            id: 3,
            key: 'statusMod',
            label: 'Status'
        },
        {
            id: 4,
            key: 'eleDmg',
            label: 'Element Dmg'
        },{
            id: 5,
            key: 'rawDmg',
            label: 'Raw Dmg'
        },
        {
            id: 6,
            key: 'damage',
            label: 'Combined Dmg (Non-Crit)'
        },
        {
            id: 7,
            key: 'avgDamage',
            label: 'Avg Dmg'
        },
        {
            id: 8,
            key: 'maxCritDamage',
            label: 'Max Combined Crit Dmg'
        }
    ];
    const moveSet = props.moveSet;

    function sortTable(header){
        setSortBy({
            keyToSort: header,
            direction:
                header === sortBy.keyToSort
                    ? sortBy.direction === 'asc'
                        ? 'desc'
                        : 'asc'
                    : 'desc'
        });
    }

    function sortArray(arrayToSort){
        if (sortBy.direction === 'asc'){
            return arrayToSort.sort((a, b) => (a[sortBy.keyToSort] > b[sortBy.keyToSort] ? 1 : -1));
        }
        
        return arrayToSort.sort((a, b) => (a[sortBy.keyToSort] > b[sortBy.keyToSort] ? -1 : 1));
    }

    function ColumnHeader(props){
        let headerKey = props.data.key;
        return (
            <th key={headerKey} onClick={() => sortTable(headerKey)}>
                <div className='table-div'>
                    <label>{props.data.label}</label>
                    {headerKey === sortBy.keyToSort && 
                        <img 
                            src={sortBy.direction === 'asc' ? ascIcon: descIcon} 
                            alt={props.data.label}/>
                    }
                </div>
            </th>
        );
    }
    
    function TableRow(props){
        return (
            <tr>
                <td>{props.data.name}</td>
                <td>{props.data.motionValue}</td>
                <td>{props.data.elementMod}</td>
                <td>{props.data.statusMod}</td>
                <td>{props.data.eleDmg}</td>
                <td>{props.data.rawDmg}</td>
                <td>{props.data.damage}</td>
                <td>{props.data.avgDamage}</td>
                <td>{props.data.maxCritDamage}</td>
            </tr>
        );
    }
    /*<th onClick={() => sortTable(0)}>Attack Name</th>
                                <th onClick={() => sortTable(1)}>MV</th>
                                <th>Element</th>
                                <th>Status</th>
                                <th>Ele Dmg</th>
                                <th>Raw Dmg</th>
                                <th>Ele Crit Dmg</th>
                                <th>Raw Crit Dmg</th>
                                <th>Avg Combined Crit</th> */
    return (
        <div className='content'>
            <div className='table-container'>
                    <table id='mh-moveset-table'>
                        <thead>
                            <tr>
                                {headers.map((item) => <ColumnHeader data={item}/>)}
                            </tr>
                        </thead>
                        <tbody>
                            {sortArray(moveSet).map((item) => <TableRow data={item}/>)}
                        </tbody>
                    </table>
            </div>
        </div>
    );
}

export default MHMoveSet;
