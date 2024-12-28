
import { useState } from 'react';
import Child3 from './child3';
import Rating from './machine task rating'
import './App.css';

function App() {
  
  const [display,setdisplay]=useState(false)
  // const name='salih';
  // const age=20;
  const obj={
    name:'salih',
    age:20
  }
 return(
  <div className='container'>
 <div className='child a' onClick={()=>setdisplay(!display)}><h1>{display ? obj.name:obj.age}</h1></div>
 <div className='child b'> 2</div>
 <Child3 setdisplay={setdisplay} display={display} obj={obj}/>
 <Rating/>
  </div>
 )
}

export default App;
