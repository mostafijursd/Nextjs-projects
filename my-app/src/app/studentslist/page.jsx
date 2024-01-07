import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>

<h1>students List</h1>
<ul>
    <li> <Link href='/studentslist/mostafijur'> Mostafijur</Link></li>
    <li><Link href='/studentslist/babu'> Babu</Link></li>
    <li><Link href='/studentslist/raja'> Raja</Link></li>
</ul>
    </div>
  )
}

export default page