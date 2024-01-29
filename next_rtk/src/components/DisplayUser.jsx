'use client'
import { removeUsers } from '@/app/redux/slice';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
export default function DisplayUser() {
  const userData=useSelector((item)=>item.users)
 const dispatch=useDispatch();
  return (
    <div style={{border:'solid 2px red', alignItems:'center' }}>
<h2>User list</h2>
{
  userData?.map((item)=>(
    <div style={{backgroundColor:'rgb(170, 255, 0)', display:"flex"  , justifyContent :'space-between',margin:"10px", width:'300px'}}>

      <span>{item.name}</span>
      <button style={{backgroundColor:'red'}} onClick={()=>dispatch(removeUsers(item.id))}>Remove</button>
    
    </div>
  )) 
}
    </div>
  )
}

