import React from 'react'
import Link from 'next/link'
function layout({children}) {
  return (
    <div>
      <h1>Login Page</h1>
      <Link href='/login'>Login main</Link>
      <br />
<Link href='/login/loginstudent'>loginstudent </Link>
<br />
<Link href='/login/loginteacher'>loginteacher </Link>

        {children}
    </div>
  )
}

export default layout