'use client'

import AddUser from "@/components/AddUser";
import DisplayUser from "@/components/DisplayUser";
import Link from "next/link";



export default function Home() {
  return (
    <div>
<Link href='/apiuser'> API user</Link>
      <h1>Redux with NEXT JS</h1>
      <AddUser/>
     <DisplayUser/>
    </div>
  );
}
