import DataReducer from "./Reducer";
// import { createStore } from 'react-redux';
import {combineReducers, applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

const finalReducer = combineReducers({
    getDataReducer : DataReducer
})

// const composeEnhancers = composeWithDevTools({
//     // Specify here name, actionsBlacklist, actionsCreators and other options
  // });

const store = createStore(finalReducer,
    //  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  // )
  );


  export default store;




