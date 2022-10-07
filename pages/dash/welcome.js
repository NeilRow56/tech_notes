import Link from 'next/link'
import React from 'react'
import ClientOnly from '../../components/ClientOnly'

const WelcomePage = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date)


  return (
    <section className="">
<ClientOnly>
<p>{today}</p>
</ClientOnly>

           

            <h1>Welcome!</h1>

            <p>
            <Link href="/dash/notes">
            <a>View techNotes</a>
            </Link>
            </p>

            <p>
            <Link href="/dash/employees">
            <a>
            View Employee Settings
            </a>
            </Link>
            </p>

        </section>
  )
}

export default WelcomePage
