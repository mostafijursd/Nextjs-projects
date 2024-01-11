"use client"

import React from 'react'

export default function Product({id}) {
  return (
    <div>

<button onClick={()=>alert(id)}>Click me</button>
    </div>
  )
}
