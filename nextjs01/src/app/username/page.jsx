'use client'

import React from 'react'


 async  function userList(){
        let data=  await fetch("https://jsonplaceholder.typicode.com/users");
      
    data= await data.json();
    return data.users;
 }
export default async function Page() {
    let users=await userList()
    console.log(users);
  return (
    <div>

<h1>Usernames</h1>
{
    users?.map((item)=>(
        <div>    <h3>{item.name}</h3></div>
    ))
}
    </div>
  ) 
}
