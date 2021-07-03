import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {MoralisProvider} from 'react-moralis';
const appId = 'cFMJYvMeQI1d3B6ojRSGaF5uoaIdx1LKx4jNJwaa';
const serverUrl = 'https://s3rfytltazxx.moralis.io:2053/server';

window.addEventListener('load', async function () {
  try {
    return await window.ethereum.request({
      method: 'eth_requestAccounts'
    }) 
  } catch (e) {
    console.log(e)
  }
})

ReactDOM.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <App />
        </MoralisProvider>
  ,
document.getElementById('root')
);