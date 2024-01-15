import React from 'react'
import getUser from '../../../../public/services/getUser'
export default async function page(props) {
  const getUserList=getUser();
  const users= await getUserList;
  const currentId=props.params.userId;
  const userData=users[currentId-1]
console.log(users[currentId-1]);


  return (
    <div>

        <h1>User detail</h1>
        <span></span>
        
        
    </div>
  )
}
