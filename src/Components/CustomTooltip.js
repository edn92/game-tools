import React from 'react';
import tooltipImg from '../assets/info_24dp.svg';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

//mui custom tooltip
function CustomTooltip(props){
    const CustomTool = styled(({ className, ...props }) => (
            <Tooltip {...props} classes={{ popper: className }} />
          ))(({ theme }) => ({
            [`& .${tooltipClasses.tooltip}`]: {
              backgroundColor: 'var(--section-background-colour)',
              padding: 'var(--standard-padding)',
              color: 'white',
              maxWidth: 300,
              fontSize: theme.typography.pxToRem(12),
              border: 'var(--border-standard)',
              borderColor: 'var(--border-colour)',
              borderRadius: 'var(--border-radii)'
            },
          }));

    return(
        <CustomTool title={props.text} placement='right'>
            <img src={tooltipImg} alt='tooltip' />
        </CustomTool>
    );
}

export default CustomTooltip;