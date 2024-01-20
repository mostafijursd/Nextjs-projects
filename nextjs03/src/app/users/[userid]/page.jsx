import React from 'react'
async function getData(id){
    let data= await fetch(`http://localhost:3000/api/users/${id}`)
    data= await data.json();
    return data
 }
export default async function page({params}) {
    let user= await getData(params.userid)
    
  return (
    <div>

        <h2>User Detail</h2>
        <h3>Name :{user.name}</h3>
        <h3>Email :{user.email}</h3>
    </div>
  )
}
