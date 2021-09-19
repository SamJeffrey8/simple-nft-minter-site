import React from 'react'

export const ActivateWallet = ({ activateWallet}) => {
    
    return(
        <div className="display-board">

            <h4>Start The Instances</h4>
            <div className="btn" >
                <button type="button" onClick={(e) => activateWallet()} className="btn btn-primary sButton" >Activate Wallet</button>
            </div>
        </div>
    )
}