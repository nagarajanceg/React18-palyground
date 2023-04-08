import React, { useState, useEffect, useReducer } from "react";
import "./page.css";
import { Button, Stack } from "@mui/material";

function Status() {
  const [status, setStatus] = useState("Not Delievered");
  const reducer = (count, type) => {
    switch (type) {
      case "increment":
        return count + 1;
      case "decrement":
        return count - 1;
      default:
        throw new Error();
    }
  };
  const [count, setCount] = useReducer(reducer, 0);

  useEffect(() => {
    // Whenever deliver count reaches o to display the status as not delivered
    if (count === 0) {
      setStatus("Not Delievered");
    }
  }, [count]);

  return (
    <div className="status">
      <h1>
        The package portal status: <span data-cy="status-widget">{status}</span>
      </h1>
      <h2>
        Delivery Count: <span data-cy="delivery-count">{count}</span>
      </h2>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button
          variant="contained"
          color="success"
          data-cy="deliver"
          onClick={() => {
            setStatus("Delivered");
            setCount("increment");
          }}
        >
          Deliver
        </Button>
        {/**Disable not Deliver button when count reaches 0 */}
        <Button
          variant="contained"
          color="error"
          data-cy="not-deliver"
          disabled={count === 0}
          onClick={() => setCount("decrement")}
        >
          Not Deliver
        </Button>
      </Stack>
    </div>
  );
}

export default Status;
