import React, { useState } from 'react'
import './App.css'

export default function App () {

  const[flag,setFlag]=useState(true)
  function checkwin(){
    let c0=document.getElementById('cell0').innerHTML
    let c1=document.getElementById('cell1').innerHTML
    let c2=document.getElementById('cell2').innerHTML
    let c3=document.getElementById('cell3').innerHTML
    let c4=document.getElementById('cell4').innerHTML
    let c5=document.getElementById('cell5').innerHTML
    let c6=document.getElementById('cell6').innerHTML
    let c7=document.getElementById('cell7').innerHTML
    let c8=document.getElementById('cell8').innerHTML

    if((c0==player && c1==player && c2==player) ||
       (c3==player && c4==player && c5==player) ||
       (c6==player && c7==player && c8==player) ||
       (c0==player && c3==player && c6==player) ||
       (c1==player && c4==player && c7==player) ||
       (c2==player && c5==player && c8==player) ||
       (c0==player && c4==player && c8==player) ||
       (c2==player && c4==player && c6==player))
       {
        document.getElementById('result').innerHTML="Player " +player+ " is winner"
        document.getElementById('turn').innerHTML=""
        setFlag(false)
       }
       else if( c0 !== "" && c1 !== "" && c2 !== "" &&
        c3 !== "" && c4 !== "" && c5 !== "" &&
        c6 !== "" && c7 !== "" && c8 !== "")
        {
        document.getElementById('result').innerHTML="Game is tie"
        document.getElementById('turn').innerHTML=""
       }

  }
  const [player,setPlayer]=useState("x")
  function Add(index){
    if(flag){
    const cell=document.getElementById(index)
    if(cell.innerHTML!==""){
      return;
    }
   else if(player=="x"){
      document.getElementById(index).innerHTML=player
      setPlayer("o")
    }
    else{
      document.getElementById(index).innerHTML=player
      setPlayer("x")
    }
   checkwin()
  }
  }

  return (
    <div>
      <div className='main'>
        <h1>Tic Tac Toe</h1>
        <div className='board'>
        <div className='block'  id="cell0"onClick={()=>{Add("cell0")}}></div>
        <div className='block' id="cell1"onClick={()=>{Add("cell1")}}></div>
        <div className='block' id="cell2"onClick={()=>{Add("cell2")}}></div>
        <div className='block' id="cell3"onClick={()=>{Add("cell3")}}></div>
        <div className='block' id="cell4"onClick={()=>{Add("cell4")}}></div>
        <div className='block' id="cell5"onClick={()=>{Add("cell5")}}></div>
        <div className='block' id="cell6"onClick={()=>{Add("cell6")}}></div>
        <div className='block' id="cell7"onClick={()=>{Add("cell7")}}></div>
        <div className='block' id="cell8"onClick={()=>{Add("cell8")}}></div>
       </div>
        <h1 id='turn'>Player {player} Turn's</h1>
        <button onClick={()=>{window.location='/'}}>Restart</button>
        <p id="result"></p>
      </div>

    </div>
  )
}
