import React, { useState , useEffect} from 'react';
import './App.css';

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
        <button  class="deliver-btn" onClick={()=>{
            setStatus("Delivered")
            setCount((count)=>count+1)
        }
            }>
            Deliver
        </button>
        <button  class="deliver-btn" onClick={()=>{
            // setStatus("NotDelievered")
            if(count!==0){
                setCount((count)=>count-1)
            }else{
                alert("counter can't be decrement below zero ");
            }
        }}> 
            NotDeliver
        </button>

      </div>
    );
  }
  
  export default App;
  