import React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
//import { Box } from '@mui/system';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { borderRadius } from '@mui/system';

function ActionValueDisplay(props){
    const characters = ['1st Character', '2nd Character', '3rd Character', '4th Character'];
    
    //overwrite default theme for mui charts
    const theme = createTheme({
        components: {
            MuiChartsTooltip: {
                styleOverrides: {
                    table:{
                        background: 'var(--section-background-colour)',
                        /*border: '2px solid',
                        borderColor: 'red',
                        borderRadius: 'var(--border-radii)',
                        borderRadius: 'var(--border-radii)',*/
                        td: {
                            color: 'white'
                            //borderRadius: 'var(--border-radii'
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
        'var(--color-wind)' ];

    const chartSettings = {
        xAxis:[
            {label: 'Action Value', min: 0}
        ],
        yAxis:[
            {label: 'Character', min: 0},
        ],
        colors: colours,
        width: 600,
        height: 250
    };
    
    return (
        <div className='content'>
            <h2>Character Move Points</h2>
            <ThemeProvider theme={theme}>
                <ScatterChart
                    slotProps={{
                        loadingOverlay: {message: 'Calculating...'},
                        noDataOverlay: {message: 'Waiting for data...'}
                    }}
                    
                    grid={{horizontal:true, vertical: true}}
                    
                    series={[
                        {
                            label: '1st Character',
                            data: props.char1MV.map(
                                (mv) => ({ 
                                    x: Math.round(mv.x * 100)/100, 
                                    y:mv.y, id: 
                                    mv.id })
                                )
                        },
                        {
                            label: '2nd Character',
                            data: props.char2MV.map(
                                (mv) => ({ 
                                    x: Math.round(mv.x * 100)/100, 
                                    y:mv.y, id: 
                                    mv.id })
                                )
                        },
                        {
                            label: '3rd Character',
                            data: props.char3MV.map(
                                (mv) => ({ 
                                    x: Math.round(mv.x * 100)/100, 
                                    y:mv.y, id: 
                                    mv.id })
                                )
                        },
                        {
                            label: '4th Character',
                            data: props.char4MV.map(
                                (mv) => ({ 
                                    x: Math.round(mv.x * 100)/100, 
                                    y:mv.y, id: 
                                    mv.id })
                                )
                        }
                    ]}
                    {...chartSettings}
                />
            </ThemeProvider>
        </div>
    );
}

export default ActionValueDisplay;