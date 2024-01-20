'use client'

import React, { useEffect, useState } from 'react'
import './../../../style.css'
export default function page({params}) {
  let id=params.userid
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [email,setEmail]=useState("");
  useEffect(()=>{
getUpDelete()
  },[])
  const getUpDelete = async()=>{
    let data= await fetch ("http://localhost:3000/api/users/"+id)
    data=await data.json()
    setName(data.result.name)
  }
  return (
    <div>

        <h1> Updata User Details</h1>
        <input className='input-item' type="text"  valu e={name} placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
        <input className='input-item' type="text"  value={age} placeholder='Enter Your Age' onChange={(e)=>setAge(e.target.value)}/>
        <input className='input-item' type="text"  value={email} placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
        <button className='btn'>Click Me</button>
    </div>
  )
}
