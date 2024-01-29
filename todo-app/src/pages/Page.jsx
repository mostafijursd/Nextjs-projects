import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'

export default function Page() {
  const userData=useSelector((data)=>data.users);
  
  return (
    <div className=' bg-cyan-950 w-full h-80 flex justify-center'>
<div>
 <h2 className=' text-2xl italic'> Name List</h2>

 {
  userData?.map((item)=>(
    <h2 className=' text-white italic text-2xl'>{item.name}</h2>
  ))
 }
</div>

    </div>
  )
}
