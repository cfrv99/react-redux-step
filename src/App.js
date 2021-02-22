import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './actions';
import './App.css';
import { Test } from './Test';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter)
  return (
    <div className="App">
      <h1>{counter}</h1>
      <br/>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(10))}>-</button>

      <hr/>
      <br/>
      <Test/>
    </div>
  );
}

export default App;
