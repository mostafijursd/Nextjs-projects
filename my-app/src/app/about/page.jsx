'use client'
import Link from "next/link"

const About =()=>{
    return(
        <div>
            <h1  style={{color:'green'}}>About Page</h1>
            <Link href='/about/aboutstudent'>Student About</Link>
        </div>
    )
}
  export default About