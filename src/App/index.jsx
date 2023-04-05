import React, { useState , useEffect} from 'react';
import './App.css';
import { Button, Stack } from '@mui/material';

function App() {
    const [status, setStatus] = useState("Not Delievered");
    const [count, setCount] = useState(0);

    useEffect(
        () => {
            // Whenever deliver count reaches o to display the status as not delivered
        if(count==0){
            setStatus("Not Delievered")
        }
    });

    return (
      <div className="App">
        <h1>The package portal status: {status}</h1>
        <h2>Delivery Count: {count}</h2>
        <Stack direction="row" justifyContent="center" spacing={2}>
        <Button variant='contained' color="success"  onClick={()=>{
            setStatus("Delivered")
            setCount((count)=>count+1)
        }}>
            Deliver
        </Button>
        {/**Disable not Deliver button when count reaches 0 */}
        <Button  variant='contained' color="error" disabled={count == 0} onClick={()=>setCount((count)=>count-1)}> 
            Not Deliver
        </Button>
        </Stack>
      </div>
    );
  }
  
  export default App;
  