import React from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseby5Handler = () => {
    dispatch({ type: "increaseby5" });
  }

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>  
      <div className="counter"> 
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseby5Handler}>Icrease By 5</button>
        <button onClick={decrementHandler}>Decrement</button> 
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
