import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const increamentHandler = ()=>{
const increamentHandler = ()=>{
  dispatch({type:"INCREAMENT"});
  };
  };
  const decreamentHandler = ()=>{
   dispatch({type:"DECREAMENT"});
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increamentHandler}>INCREAMENT</button>
        <button onClick={decreamentHandler}>DECREAMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;