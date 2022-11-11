// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/Textform';
import React from "react";
import {
  
  Routes,
  Route

} from "react-router-dom";
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      Type: type
  })
  setTimeout(()=>{
    setAlert(null);

  },4000);
}
  
  const [mode, setMode]=useState('light');//whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert("Dark mode  has been enabled ","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode  has been enabled ","success")
    }
  }
  return (
   <> 
  
<Navbar title="TextUtils21" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container'>
  
   <Routes>
           <Route path="/About" element={<About />}/>
          
      
           <Route path="/"  element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}/>
         
          
          
        </Routes>
  </div>

   </>
  );
  }

export default App;
  