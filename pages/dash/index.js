import Link from 'next/link'
import React from 'react'
import ClientOnly from '../../components/ClientOnly'
import DashLayout from '../../components/DashLayout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const WelcomePage = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date)


  return (
    <DashLayout>
    <section className="">
<ClientOnly >
<p className="py-3">{today}</p>
</ClientOnly>

           
            <div>
            <h1 className="text-2xl font font-semibold py-2">Welcome!</h1>
            </div>
            

            <p className="py-3">
            <Link href="/dash/notes" className="cursor-pointer hover:red-700">
            <a className="flex "><FontAwesomeIcon icon={faArrowRight} height={20} width={20} /><h4 className="ml-3">View techNotes</h4></a>
            </Link>
            </p>

            <p className="py-3">
            <Link href="/dash/employees" className="cursor-pointer">
            <a className="flex "><FontAwesomeIcon icon={faArrowRight} height={20} width={20} /><h4 className="ml-3">View Employee Settings</h4></a>
            </Link>
            </p>

            

        </section>
        </DashLayout>
  )
}

export default WelcomePage
