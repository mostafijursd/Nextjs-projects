"use client"
import user from './user.module.css'
import React, { useState } from 'react'
import Image from 'next/image'
import Profile from '../../../public/vercel.svg' 
import img from '../../../public/img.jpg'

export default function page() {
  
  return (
    <div>

        <h1  className={user.main}>User</h1>
    <button >Clict Me</button>
    
    <Image
      src={Profile}
      />
       <Image  src={img} width={200} height={200}/>
    </div>
  )
}
