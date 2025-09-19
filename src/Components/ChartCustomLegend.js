import CircleIcon from '@mui/icons-material/Circle';

function ChartCustomLegend(props){
    return (
        <div className='chart-legend-container'>
            {
                props.legendLabels.map(
                    (label) => 
                        <div className='chart-legend-label'>
                            <CircleIcon sx={{ color: label.colour }}/>{label.text}
                        </div>
                )
            }
        </div>
    );
}

export default ChartCustomLegend;