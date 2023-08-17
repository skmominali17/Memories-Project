import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux"
import { legacy_createStore, compose, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import reducers from "./reducers/index.js"
import "./main.css"
const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>,
)
