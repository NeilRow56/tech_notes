import Link from 'next/link'
import React from 'react'

const DashHeader = () => {
  return (
    <header className="">
            <div className="container border-b-2 border-gray-500">
                  <Link href='/dash'>
                  <a>
                  <h1 className="text-3xl font-bold py-2  ">techNotes</h1>
                  </a>
                  
                  </Link>
                
                <nav >
                    {/* add nav buttons later */}
                </nav>
            </div>
        </header>
  )
}

export default DashHeader
