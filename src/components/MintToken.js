import React from 'react'

export const MintToken = ({ mintToken, instanceIDF}) => {
    
    return(
        <div className="display-board">

            <h4>Mint NFT</h4>
            <div className="btn" >
                <button type="button" onClick={(e) => mintToken(instanceIDF)} className="btn btn-primary sButton" >Mint</button>
            </div>
        </div>
    )
}