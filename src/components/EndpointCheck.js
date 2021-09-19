import React from 'react'

export const EndpointCheck = ({ getEndpoints}) => {
    
    return(
        <div className="display-board">

            <h4>Check Created Contract</h4>
            <div className="btn" >
                <button type="button" onClick={(e) => getEndpoints()} className="btn btn-primary sButton" >Get all Endpoints</button>
            </div>
        </div>
    )
}