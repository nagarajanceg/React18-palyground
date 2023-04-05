import React, { useState , useEffect} from 'react';
import './App.css';
import { Button, Stack } from '@mui/material';

function App() {
    const [status, setStatus] = useState("Not Delievered");
    const [count, setCount] = useState(0);

    useEffect(
        () => {
        if(count==0){
            setStatus("Not Delievered")
        }
    });

    return (
      <div className="App">
        <h1>The package is: {status}</h1>
        <h2>Delivery Count: {count}</h2>
        <Stack direction="row" justifyContent="center" spacing={2}>
        <Button variant='contained' color="success"  onClick={()=>{
            setStatus("Delivered")
            setCount((count)=>count+1)
        }
            }>
            Deliver
        </Button>
        <Button  variant='contained' color="error" disabled={count == 0} onClick={()=>{
            if(count!==0){
                setCount((count)=>count-1)
            }else{
                alert("counter can't be decrement below zero ");
            }
        }}> 
            Not Deliver
        </Button>
        </Stack>

      </div>
    );
  }
  
  export default App;
  