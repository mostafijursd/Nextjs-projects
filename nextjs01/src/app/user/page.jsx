"use client"

import React, { useState } from 'react'

export default function page() {
    const[color,setColor]=useState({backgroundColor:'red'})
  return (
    <div>

        <h1 style={color}>User</h1>
    <button onClick={()=>setColor({backgroundColor:"green"})}>Clict Me</button>
    </div>
  )
}
