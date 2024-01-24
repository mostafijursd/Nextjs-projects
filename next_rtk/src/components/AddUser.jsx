'use client'

import React, { useState } from 'react'
import { addUsers } from '../app/redux/slice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
export default function AddUser() {
  const [name,setName]=useState("");
  const dispatch=useDispatch();
 
  const handle=()=>{
 dispatch(addUsers(name))
  }
  return (
    <div>




        <input type="text" placeholder='Add Users'  onChange={(e)=>setName(e.target.value)} />
        <br />
        <button onClick={handle} >Add Users</button>
        <Link href={'/removeuser'}> Remove User</Link>
    </div>
  )
}
