import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import {EndpointCheck } from './components/EndpointCheck'
import { getEndpoints, activateWallet, mintToken } from './services/ServiceFunctions'
import { ActivateWallet } from './components/ActivateWallet';
import React, { Component, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { MintToken } from './components/MintToken';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '5px solid #212121',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};



function App() {
  const [open, setOpen] = React.useState(false);
  const [endPs, setEndPs] = React.useState("");
  const [openActW, setActW] = React.useState(false);
  const [actRes, setactRes] = React.useState("");
  const [instanceID, setInstanceID] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleActWOpen = () => setActW(true);
  const handleActWClose = () => setActW(false);


  const disEndpoints = () => {


    getEndpoints().then(res =>{
      setEndPs(JSON.stringify(res.data))
      handleOpen()
    }
    )
  }
  const activateWalletF = () => {
    activateWallet()
      .then(res => {
        console.log(res.data.unContractInstanceId)
        setInstanceID(res.data.unContractInstanceId)
        setactRes(JSON.stringify(res.data))
        handleActWOpen()
      });
  }


  const mintTokenF = (instIDF) => {
    mintToken(instIDF)
      .then(res => {
      });
  }



    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className = "layoutRow">
            <div>
              <Box sx= {{
                  width: 150,

              }}>
                
              </Box>
            </div>
            <div className="col-md-5">
                <EndpointCheck
                  getEndpoints={disEndpoints}
                >
                </EndpointCheck>

            </div>
            <div className="col-md-5">    
            <MintToken
                  mintToken={mintTokenF} instanceIDF = {instanceID}
                >
                </MintToken>
            </div> 
            <div className="col-md-5">
            <ActivateWallet
                  activateWallet={activateWalletF}
                >
                </ActivateWallet>
            </div>      
  
                <div>
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{
              fontWeight: '900'
          }} id="modal-modal-title" variant="h6" component="h2">
            Available Endpoints
          </Typography>
          <Typography sx={{
              fontWeight: 'bolder'
          }} id="modal-modal-description" >
          {endPs}
          </Typography>
        </Box>
      </Modal>
                </div>
                <div>
                <Modal
        open={openActW}
        onClose={handleActWClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{
              fontWeight: 'bolder'
          }} id="modal-modal-title" variant="h6" component="h2">
            Available Endpoints
          </Typography>
          <Typography sx={{
              fontWeight: 'bolder'
          }} id="modal-modal-description" >
          {actRes}
          </Typography>
        </Box>
      </Modal>
                </div>
              
            
          </div>
        </div>
      </div>
    );
  }


export default App;
