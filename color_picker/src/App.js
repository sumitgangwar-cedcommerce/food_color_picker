import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './App.css';

function App() {

  const [hexcode , sethexcode] = useState('')
  const divColor  = ['#1873CC' , '#EF2929' , '#EDD400' , '#555753' , '#73D216', '#204A87','#AD7FA8','#000000','#D3D7CF','#8F5902']

  const formatInput = (e) => {
    if(isNaN(e.target.value[e.target.value.length-1])){
      alert('Please enter number only')
      document.getElementById('inp').value =  document.getElementById('inp').value.substring(0,e.target.value.length-1)

    }
    if(e.target.value.length<11){
      if(e.target.value.length===3) document.getElementById('inp').value+= ' '
      if(e.target.value.length===7) document.getElementById('inp').value+= ' '
    }
    else if(e.target.value.length===11) giveColor(e.target.value);
    else document.getElementById('inp').value =  document.getElementById('inp').value.substring(0,11)
    
  }

  const giveColor = (data) => {
    data = data.split(' ')
    let color = '#' + toHex(data[0]) + toHex(data[1]) + toHex(data[2])
    sethexcode(color)
  }

  const toHex = (data) => {
    data = parseInt(data)
    let hex = data.toString(16)
    return hex.length === 1 ? '0'+hex : hex
  }

  const resetInp = () => {
    document.getElementById('inp').value = ''
    sethexcode('')
  }

  const giveDivhex = (e) => {
    console.log(e.target.id)
    sethexcode(divColor[e.target.id])
  }

  return (
    <div className="App">
      <div id='colors'>
        <div id='0' onClick={giveDivhex} style={{backgroundColor:divColor[0]}}></div>
        <div id='1' onClick={giveDivhex} style={{backgroundColor:divColor[1]}} ></div>
        <div id='2' onClick={giveDivhex} style={{backgroundColor:divColor[2]}} ></div>
        <div id='3' onClick={giveDivhex} style={{backgroundColor:divColor[3]}} ></div>
        <div id='4' onClick={giveDivhex} style={{backgroundColor:divColor[4]}} ></div>
        <div id='5' onClick={giveDivhex} style={{backgroundColor:divColor[5]}} ></div>
        <div id='6' onClick={giveDivhex} style={{backgroundColor:divColor[6]}} ></div>
        <div id='7' onClick={giveDivhex} style={{backgroundColor:divColor[7]}} ></div>
        <div id='8' onClick={giveDivhex} style={{backgroundColor:divColor[8]}} ></div>
        <div id='9' onClick={giveDivhex} style={{backgroundColor:divColor[9]}} ></div>
      </div>
      <div>
        <TextField  type='text' id='inp' onChange={formatInput} label="Enter RGB CODE" placeholder="### ### ###"></TextField><br/>
        <Button variant='contained' onClick={resetInp} >Reset</Button>
      </div>
      <div id='res' style={{backgroundColor:hexcode}}>

      </div>
      <p>{hexcode}</p>
    </div>
  );
}

export default App;
