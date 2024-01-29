import React from 'react'
import { FaBattleNet } from "react-icons/fa6";
export default function Header() {
  return (
    <div className='  bg-slate-900 h-16 w-full  '>
<h1 className=' text-2xl text-orange-500 font-bold italic flex justify-center '> Todo App </h1>
<div className=' pb-5 flex justify-center'>
<span className=' text-lime-400 text-3xl  '><FaBattleNet/>
</span>
</div>
    </div>
  )
}
