import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../redux/slice';

export default function Page() {
  const userData=useSelector((item)=>item.users);
  const dispatch=useDispatch()
   


  return (
    <div className=' bg-cyan-950 w-full h-80 flex justify-center'>
<div>
 <h2 className=' text-2xl italic'> Name List</h2>

 
 {
  userData?.map((item)=>(
   <div className=' flex justify-between gap-5 bg-slate-950 w-60 rounded-xl '>
     <h2 className=' text-white italic text-2xl ml-4 '>{item.name}</h2>
     <button className=' h-8 w-20 bg-red-600 rounded-xl' onClick={()=>{dispatch(deleteUser(item.id))}}>Delete</button>
   </div>
  ))
 }
 
</div>

    </div>
  )
}
