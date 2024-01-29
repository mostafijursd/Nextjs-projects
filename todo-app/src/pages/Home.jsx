import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from '../redux/slice';
function Home() {
     const[name,setName]=useState("");
     const dispatch=useDispatch();
     const handle=()=>{
dispatch(addUser(name))
     }
  return (
    <div className=' bg-cyan-950 w-full h-60 pt-10 '>
<div className=' flex justify-center'> 
 <input type="text" className=' bg-slate-500 rounded-xl w-80 h-10' onChange={(e)=>setName(e.target.value)} placeholder=' Entry Your Name'   />
<button className=' bg-indigo-950 w-40 h-10 rounded-xl ml-4 hover:bg-blue-950' onClick={handle}>Click Me</button>
</div>
    </div>
  )
}

export default Home