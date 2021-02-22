import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
// //store
// //actions

// const incrementAction = "INCREMENT";
// const decrementAction = "DECREMENT";
// const increment = ()=>{
//   return {
//     type:incrementAction
//   }
// }
// const decrement = ()=>{
//   return {
//     type:decrementAction
//   }
// }

// //reducers
// const counter = (state = 0,action)=>{
//   switch (action.type) {
//     case incrementAction:
//       return state+1;
//     case decrementAction:
//       return state-1;
//     default:
//       return state;
//   }
// }

// //dispatch
// let store  = createStore(counter);

// store.subscribe(()=>console.log(store.getState()));
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

const store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
