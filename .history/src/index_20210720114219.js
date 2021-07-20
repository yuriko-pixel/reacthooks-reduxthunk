import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import createStore from 'redux'

const addCreator = (data) => {
  return {type: 'add', payload: data}
}

const initState = {
  items: []
}

const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case 'add': return {items: [...state, action.payload]}
    default: return state
  }
}

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
