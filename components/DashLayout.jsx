// components/DashLayout.js
import DashHeader from '../components/DashHeader'

import Link from 'next/link'
import DashFooter from './DashFooter'




export default function DashLayout({ children }) {
  return (
    <>
    
    <div className='container mx-auto'>
      <DashHeader />
      <main>{children}</main>
      <footer className="py-3 px-3 fixed bottom-0 border-t-2 border-gray-500 w-full">
      <DashFooter />
      </footer>
    </div>
    </>
  )
}

