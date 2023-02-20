// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";



function App() {
//   const [mode, setMode] = useState('light');
//   const [design, setDesign] = useState({
//     color:'black',
//     background: 'white'
//   })
//   function changeMode(){
//   if(mode === "light"){
//     setMode('dark');
//     setDesign({
//       color:"white",
//       background:"black"
//     })
//   }
//   else{
//     setMode('light');
//     setDesign({
//       color:"black",
//       background:"white"
//     })
//   }
// }

const [colorMode, setColorMode] = useState('primary');
const [hexCode, setHexCode] = useState({ background:'#0d6efd'})

const goGreen=()=>{
  // setMode('green');
  setColorMode('success');
  console.log('green'+colorMode);
  setHexCode({background:'#198754'})
  document.body.style.background = '#4da84d'
  document.title = `amanKaWord - green`;
}
const goGrey=()=>{
  // setMode('grey');
  setColorMode('secondary');
  console.log('grey'+colorMode)
  setHexCode({background:'#6C757D'})
  document.body.style.background = '#989696'
  document.title = `amanKaWord - grey`;
}
const goRed=()=>{
  // setMode('red');
  setColorMode('danger');
  console.log('red'  + colorMode)
  setHexCode({background:'#DC3545'})
  document.body.style.background = '#e45e5e'
  document.title = `amanKaWord - red`;
}
const goYellow=()=>{
  // setMode('yellow');
  setColorMode('warning');
  console.log('yellow ' + colorMode)
  setHexCode({background:'#FFC107'})
  document.body.style.background = '#e5e578'
  document.title = `amanKaWord - yellow`;
}

  return (
    <div className="App">
      {/* <Navbar logo = 'amanKaWord' hexCode={hexCode} goGreen={goGreen} goRed = {goRed} goYellow={goYellow} goGrey={goGrey}></Navbar> */}
      {/* <TextArea heading = 'Changing Mode' colorMode = {colorMode}></TextArea> */}
      {/* <About></About> */}

      <Router>
      <Navbar logo = 'amanKaWord' hexCode={hexCode} goGreen={goGreen} goRed = {goRed} goYellow={goYellow} goGrey={goGrey}></Navbar>
      <Routes>

          <Route path="/about" element={<About/>} />
          <Route path="/" element={<TextArea/>} />

        </Routes>
      </Router>
      
    </div>
  );
}



export default App;
