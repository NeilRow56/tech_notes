import Link from 'next/link'
import React from 'react'

const DashHeader = () => {
  return (
    <header className="">
            <div className="container">
                <Link href="/">
                  <a>techNotes</a>
                    
                </Link>
                <nav >
                    {/* add nav buttons later */}
                </nav>
            </div>
        </header>
  )
}

export default DashHeader
