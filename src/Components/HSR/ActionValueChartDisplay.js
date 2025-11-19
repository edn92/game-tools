import { ScatterChart } from '@mui/x-charts/ScatterChart';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import ChartCustomLegend from '../ChartCustomLegend';


function ActionValueChartDisplay(props){    
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

    const labels = [
        { text: 'Character 1', colour: colours[0] },
        { text: 'Character 2', colour: colours[1] },
        { text: 'Character 3', colour: colours[2] },
        { text: 'Character 4', colour: colours[3] },
        { text: 'AA Points', colour: colours[4] }];

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

    const seriesValues = [
        {
            id: 'series-character1',
            data: props.char1MV.map(
                (mv) => ({ 
                    x: Math.round(mv.x * 100)/100, 
                    y: mv.y, 
                    id: mv.id })
                ),
            valueFormatter: (aa) => {
                return `Character 1 moves at ${aa.x}AV`;
            },
            highlightScope: { highlight: 'series', fade: 'global' }
        },
        {
            id: 'series-character2',
            data: props.char2MV.map(
                (mv) => ({ 
                    x: Math.round(mv.x * 100)/100, 
                    y: mv.y, 
                    id: mv.id })
                ),
            valueFormatter: (aa) => {
                return `Character 2 moves at ${aa.x}AV`;
            },
            highlightScope: { highlight: 'series', fade: 'global' }
        },
        {
            id: 'series-character3',
            data: props.char3MV.map(
                (mv) => ({ 
                    x: Math.round(mv.x * 100)/100, 
                    y: mv.y, 
                    id: mv.id })
                ),
            valueFormatter: (aa) => {
                return `Character 3 moves at ${aa.x}AV`;
            },
            highlightScope: { highlight: 'series', fade: 'global' }
        },
        {
            id: 'series-character4',
            data: props.char4MV.map(
                (mv) => ({ 
                    x: Math.round(mv.x * 100)/100, 
                    y:mv.y, 
                    id: mv.id })
                ),
            valueFormatter: (aa) => {
                return `Character 4 moves at ${aa.x}AV`;
            },
            highlightScope: { highlight: 'series', fade: 'global' }
        },
        {
            id: 'series-characterAA',
            data: props.aaPoints.map(
                (aa) => ({
                    x: aa.aaPoint,
                    y: (aa.aaChar - 0.2),
                    id: `${aa.aaID}-${aa.aaChar-0.2}`
                })
            ),
            valueFormatter: (aa, {dataIndex}) => {
                const point = props.aaPoints[dataIndex];
                return `Advancing next action by ${point.aaAmount}% at ${point.aaPoint}AV`;
            },
            highlightScope: { highlight: 'series', fade: 'global' }
        }
    ];

    return (
        <div className='content'>
            <h2>Character Move Points</h2>
                <div className='chart-container'>
                    <ThemeProvider theme={theme}>
                        <ScatterChart
                            slotProps={{
                                loadingOverlay: {message: 'Calculating...'},
                                noDataOverlay: {message: 'Waiting for data...'}
                            }}
                            grid={{horizontal:true, vertical: true}}
                            
                            series={seriesValues}
                            
                            {...chartSettings}
                        />
                    </ThemeProvider>
                    <ChartCustomLegend legendLabels={labels}/>
                </div>
        </div>
    );
}

export default ActionValueChartDisplay;
