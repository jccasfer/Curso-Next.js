'use client';                                      //React Context is unavailable in Server Components

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const { status, data: session } = useSession();  //acceso al React context
  //cogemos de useSession 2 propiedades, status y data que renombramos como session

  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
      <Link href="/" className='mr-5'>Next.js</Link>
      <Link href="/users">Users</Link>
      {status === 'loading' && <div className="loading loading-ring"></div>}
      {status === 'authenticated' &&
        <div>
          {session.user!.name /*sabemos que tenemos user ya que arriba si esta loadin devolvemos null =>(marco con ! para que compilador no de error)*/}
          <Link href="/api/auth/signout" className='ml-3'>Sign Out</Link>
        </div>}
      {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default NavBar