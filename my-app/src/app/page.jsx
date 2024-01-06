'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router=useRouter()
  return (
    <main  >
   <h1>This Nextjs  </h1>
  
   <Link  href="/login"> Login </Link>
   <br></br>
   <Link  href="/about"> About </Link>
   
   <br />
   <button onClick={()=>router.push("/login")}>Click Login</button>
    </main>
  )
}
  