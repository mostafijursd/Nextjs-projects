 'use client'
 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUsers } from '../redux/slice';
 
 export default function page() {

    const userData=useSelector((data)=>data.users)
    
    const dispatch=useDispatch();
   return (
     <div>
 <h1>Remove User</h1>
{
     userData.map((item)=>(
        <div>

            <span>{item.name}</span>
            <button onClick={()=>dispatch(removeUsers(item.id))}>Delete</button>
        </div>
     ))
}
     </div>
   )
 }
 