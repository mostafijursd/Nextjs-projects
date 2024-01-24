'use client'

import AddUser from "@/components/AddUser";
import DisplayUser from "@/components/DisplayUser";



export default function Home() {
  return (
    <div>

      <h1>Redux with NEXT JS</h1>
      <AddUser/>
     <DisplayUser/>
    </div>
  );
}
