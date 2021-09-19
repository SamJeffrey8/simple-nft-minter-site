import axios from "axios";
import {instanceID}  from "../App.js";

export async function getEndpoints() {

    const response = await axios.get('/api/contract/definitions');
    return await response;
}

export async function activateWallet() {

    const response = await axios.post('/api/contract/activate', {    "caID": "NFTContract",
    "caWallet": {
        "getWallet": 1
    }
});
    return await response;
}

export async function mintToken(instID) {
    console.log(instID)
    let inst = instID
    const response = await axios.post('api/contract/instance/'+ instID + '/endpoint/mint', {
        "unTokenName": "GMBL"
});
    return await response;
}