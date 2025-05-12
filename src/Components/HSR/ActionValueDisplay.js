import { ScatterChart } from '@mui/x-charts/ScatterChart';
import {ThemeProvider, createTheme} from '@mui/material/styles';
//import InputFieldDropdown from '../InputFieldDropdown';
import LogCycleDisplay from './LogCycleDisplay';

function ActionValueDisplay(props){
    const characters = ['1st Character', '2nd Character', '3rd Character', '4th Character'];
    
    const moveLog = props.moveLog.sort((a, b) => a.av - b.av); //assign and sort by av

    //overwrite default theme for mui charts
    const theme = createTheme({
        components: {
            MuiChartsTooltip: {
                styleOverrides: {
                    table:{
                        background: 'var(--section-background-colour)',
                        td: {
                            color: 'white'
                        }
                    }
                }
            }
        },
        palette: {
            text: {
                primary: 'white'
            }
        }
    });

    //graph colours
    const colours = [
        'var(--color-fire)', 
        'var(--color-ice)', 
        'var(--color-imaginary)', 
        'var(--color-wind)',
        'var(--color-quantum)' ];

    const chartSettings = {
        xAxis:[
            {label: 'Action Value', min: 0}
        ],
        yAxis:[
            {label: 'Character', min: 0},
        ],
        colors: colours,
        width: 600,
        height: 350
    };

    const cycles = [];
    for (let i = 1; i <= props.cycles; i ++){
        cycles.push(i);
    }
    
    return (
        <div className='content'>
            <h2>Character Move Points</h2>
            <ThemeProvider theme={theme}>
                <ScatterChart
                    margin={{top: 100}}
                    slotProps={{
                        loadingOverlay: {message: 'Calculating...'},
                        noDataOverlay: {message: 'Waiting for data...'}
                    }}
                    
                    grid={{horizontal:true, vertical: true}}
                    
                    series={[
                        {
                            label: characters[0],
                            data: props.char1MV.map(
                                (mv) => ({ 
                                    x: Math.round(mv.x * 100)/100, 
                                    y: mv.y, 
                                    id: mv.id })
                                )
                        },
                        {
                            label: characters[1],
                            data: props.char2MV.map(
                                (mv) => ({ 
                                    x: Math.round(mv.x * 100)/100, 
                                    y: mv.y, 
                                    id: mv.id })
                                )
                        },
                        {
                            label: characters[2],
                            data: props.char3MV.map(
                                (mv) => ({ 
                                    x: Math.round(mv.x * 100)/100, 
                                    y: mv.y, 
                                    id: mv.id })
                                )
                        },
                        {
                            label: characters[3],
                            data: props.char4MV.map(
                                (mv) => ({ 
                                    x: Math.round(mv.x * 100)/100, 
                                    y:mv.y, 
                                    id: mv.id })
                                )
                        },
                        {
                            label: 'AA Points',
                            data: props.aaPoints.map(
                                (aa) => ({
                                    x: aa.aaPoint,
                                    y: (aa.aaChar - 0.2),
                                    id: aa.aaID
                                })
                            ),
                            valueFormatter: (aa, {dataIndex}) => {
                                const point = props.aaPoints[dataIndex];
                                return `Advancing next action by ${point.aaAmount}% at ${point.aaPoint}AV`;
                            }
                        }
                    ]}
                    {...chartSettings}
                />
            </ThemeProvider>
            {
                props.char1MV.length > 0 ? //only need to check for 1, since if 1 is there, all 4 will be there
                <div className='input-container'>
                    <h2>Character Move Log</h2>
                    { 
                        cycles.map((cycle) => 
                            <LogCycleDisplay cycle={cycle} moveLog={moveLog.filter((r) => r.cycle === cycle)}/> 
                        )
                    }
                </div> : null
            }
        </div>
    );
}

export default ActionValueDisplay;