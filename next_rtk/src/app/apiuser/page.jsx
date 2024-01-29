'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fatchApiData } from '../redux/slice';

export default function page() {
     const dispatch=useDispatch();
     const apiData=useSelector((data)=>data)
    console.log(apiData.name);
  return (
    <div>
<h1>API user </h1>
<button onClick={()=>dispatch(fatchApiData())}>Click </button>
{
    // apiData.map((item)=>(
    //     <div>

    //         <h3>{item.name}</h3>
    //     </div>
    // ))
}
    </div>
  )
}
