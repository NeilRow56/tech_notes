// components/Layout.js


import Link from 'next/link'
import Navbar from './Navbar'



export default function Layout({ children }) {
  return (
    <>
    
    <div className='container mx-auto'>
      <Navbar />
      <main>{children}</main>
      <footer className="py-3 px-3 fixed bottom-0 border-t-2 border-gray-500 w-full">
            <Link href='/login'>
          <a className="">Employee Login</a>
          </Link>
            </footer>
    </div>
    </>
  )
}