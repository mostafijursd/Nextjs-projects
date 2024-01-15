import React from 'react'
import getUser from '../../../public/services/getUser'
import Link from 'next/link';
export default async function page() {

    const getUserList=getUser();
    const users= await getUserList;
    console.log(users);
  return (
    <div>


        <h1>user</h1>
        {
            users.map((item)=>(
                <h1>

                    <Link href={`/users/ ${item.id}`}>{item.name}</Link>
                </h1>
            ))
        }
    </div>
  )
}
