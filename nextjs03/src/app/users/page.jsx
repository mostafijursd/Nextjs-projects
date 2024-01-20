import Link from 'next/link';
import React from 'react'; 
import './../style.css'
  async function getData(){
     let data= await fetch("http://localhost:3000/api/users")
     data= await data.json();
     return data
  }
export default  async function page() {
    let users= await getData();

  return (
    <div>
        <h1>User </h1>

{
    users.map((item)=>(
        <div className='user-item'>
        <span><Link href={`users/${item.id}`}> {item.name}</Link> </span>
        <span> <Link href={`users/${item.id}/updata`}>Edit</Link></span>
        </div>
    ))
}
    </div>
  )
}
