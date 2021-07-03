import React from 'react';
import './App.css';
import useForm from './useForm';
import validate from './validate';
import Order from './Order.js';
import {useMoralis} from 'react-moralis';

function App () {
  const {authenticate, isAuthenticating} = useMoralis();
  const {handleChange, values } = useForm(
    validate
  );

  
 
  

 
 
  if(isAuthenticating) {
    return(
      <button onClick={() => authenticate()}>Authenticate</button>

    )
  }
 
 

  return (
    <div>
    <Order/>
    <button onClick={() => authenticate()}>Authenticate</button>
</div>
);
  
  }
  

export default App;