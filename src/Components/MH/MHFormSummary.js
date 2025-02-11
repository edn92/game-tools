import React from 'react'

function MHFormSummary(props){
    return(
        <div className='content'>
            <h2>Summary</h2>
            <p>Wilds uses bloat values instead of true raw values. Currently, 
            I've only imported GS and LS data from Iceborne for testing purposes.</p>
            <div className='content-button'>
                <button>Calculate!</button>
            </div>
        </div>
    );
}

export default MHFormSummary;