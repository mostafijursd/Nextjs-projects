import React from 'react'
import Link from 'next/link'
function layout({children}) {
  return (
    <div>
<Link href='/login/loginstudent'>loginstudent </Link>
<br />
<Link href='/login/loginteacher'>loginteacher </Link>

        {children}
    </div>
  )
}

export default layout