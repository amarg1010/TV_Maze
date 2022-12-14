import './App.css';
import { useState } from 'react';
import Actor from "./Actor"
function App() {
  const[check,setCheck]=useState("")
  const[input,setInput]=useState("")
  
  return (
    <div className="App">
    <h1>TV maze</h1>
    <h2>Search your favorite Actors & shows</h2>
    
    <input type="radio" id="actor"  value={check} name="show" onClick={()=>setCheck("actor")}/>
    <label htmlFor="actor">Actor</label>
    <input type="radio" id="shows" value={check} name="show" onClick={()=>setCheck("shows")}/>
   <label htmlFor="shows">Shows</label><br/><br/>

   {check!=="actor" && check?<h4>Enter your Show name</h4>: check?<h4>Enter your Actor name</h4>:<h4>Choose your favorite</h4>}
    <input type="search" placeholder='eg: Friends' id="in" value={input} onChange={(e)=>setInput(e.target.value)}/>
  
    <Actor check={check} input={input}/>
    </div>
  );
}

export default App;