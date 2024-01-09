  'use client'

import { useEffect,useState } from 'react'
export default function Page() {
    const [product,setProduct]=useState([]);
useEffect(()=>{ getResponse()})
    const getResponse= async()=>{
        let data=  await fetch("https://jsonplaceholder.typicode.com/users")
        data=await data.json()
        
       setProduct(data)
    }
  return (
    <div>

        <h1>Product List</h1>
{
    product.map((item)=>(
        <h3>{item.name}</h3>
    ))
}
    </div>
  )
}
