import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store';

if(!navigator.geolocation){
      alert("tu navegador no tiene opcion de Geolocation");
      throw new Error("Tu navegador no tiene Geolocation")
    }

ReactDOM.createRoot(document.getElementById('root')).render(

    

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
