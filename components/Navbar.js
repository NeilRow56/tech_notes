import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter();

  return (
    <nav className="flex w-full shadow-md mb-5 py-2">
      <div className='flex w-full justify-between items-center mx-10'>
       
          <Link href='/'>
          <a className={router.pathname == '/' ? "active" : "not_active" }>Home</a>
          </Link>
          
          
          <Link href='/dash'>
          <a className={router.pathname == '/dash' ? "active" : "not_active" }>Dash</a>
          </Link>
          <Link href='/dash/welcome'>
          <a className={router.pathname == '/dash/welcome' ? "active" : "not_active" }>Dash - welcome</a>
          </Link>

          <Link href='/'>
          <a className={router.pathname == '/login' ? "active" : "not_active" }>Login</a>
          </Link>
        
        

      </div>
    </nav>
  )
}

export default Navbar
