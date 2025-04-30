import React, {useState} from 'react';
import descIcon from '../../assets/arrow_drop_down_24dp.svg';
import ascIcon from '../../assets/arrow_drop_up_24dp.svg';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
//import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function MHMoveSet(props){
    const moveSet = props.moveSet;
    const columns = [
        { key: 'name', label: 'Attack Name', align:'center' },
        { key: 'motionValue', label: 'MV', align:'center' },
        { key: 'elementMod', label: 'Element', align:'center' },
        { key: 'statusMod', label: 'Status', align:'center' },
        { key: 'eleDmg', label: 'Element Dmg', align:'center' },
        { key: 'rawDmg', label: 'Raw Dmg', align:'center' },
        { key: 'damage', label: 'Combined Dmg (Non-Crit)', align:'center' },
        { key: 'avgDamage', label: 'Avg Dmg', align:'center' },
        { key: 'maxCritDamage', label: 'Max Combined Crit Dmg', align:'center' }
    ];
    
    //mui customisations
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: { //header cells
            backgroundColor: 'var(--table-header-colour)',
            borderColor: 'var(--border-colour)',
            fontWeight: 'bold',
            maxWidth: 120,
            color: theme.palette.common.white
        },
        [`&.${tableCellClasses.body}`]: {
            color: theme.palette.common.white,
            borderColor: 'var(--border-colour)',
            fontSize: 14,
            maxWidth: 120
        },
    }));
        
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(even)': {
            backgroundColor: 'var(--table-alternate-row)',
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    
    //return column header when called
    function ColumnHeader(props){
        return (
            <StyledTableCell
                key={props.data.key}
                align={props.data.align}
                style={{minWidth: props.data.minWidth}}
                onClick={() => sortTable(props.data.key)} >
                <span>
                {props.data.label}
                {
                    props.data.key === sortBy.keyToSort &&
                    <img src={sortBy.direction === 'asc' ? ascIcon: descIcon} 
                        alt={props.data.label}/>
                }
                </span>
            </StyledTableCell>
        );
    }

    //sorting functions
    const [sortBy, setSortBy] = useState({keyToSort: 'AttackName', direction: 'asc'});
    
    function sortTable(header){
        console.log(header);
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
        console.log(sortBy);
        if (sortBy.direction === 'asc'){
            return arrayToSort.sort((a, b) => (a[sortBy.keyToSort] > b[sortBy.keyToSort] ? 1 : -1));
        }
        
        return arrayToSort.sort((a, b) => (a[sortBy.keyToSort] > b[sortBy.keyToSort] ? -1 : 1));
    }

    return (
        <div className='content'>
            <TableContainer sx={{maxHeight: 725}}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            { columns.map((column) => ( <ColumnHeader data={column} /> )) }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            sortArray(moveSet).map((move)=> {
                                return (
                                    <StyledTableRow>
                                        <StyledTableCell align='center'>{move.name}</StyledTableCell>
                                        <StyledTableCell align='center'>{move.motionValue}</StyledTableCell>
                                        <StyledTableCell align='center'>{move.elementMod}</StyledTableCell>
                                        <StyledTableCell align='center'>{move.statusMod}</StyledTableCell>
                                        <StyledTableCell align='center'>{move.eleDmg}</StyledTableCell>
                                        <StyledTableCell align='center'>{move.rawDmg}</StyledTableCell>
                                        <StyledTableCell align='center'>{move.damage}</StyledTableCell>
                                        <StyledTableCell align='center'>{move.avgDamage}</StyledTableCell>
                                        <StyledTableCell align='center'>{move.maxCritDamage}</StyledTableCell>
                                    </StyledTableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MHMoveSet;

