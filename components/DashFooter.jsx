import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from 'next/router';





const DashFooter = () => {

  const router = useRouter()

  const onGoHomeClicked = () => router.push('/dash')

  let goHomeButton = null

  if(router.pathname !== '/dash') {
    goHomeButton = (
      <button
       className="text-red-500 cursor-pointer"
       title="Home"
       onClick={onGoHomeClicked}
       >
        <FontAwesomeIcon icon={faHouse} height={20} width={20} />
      </button>
    )
  }



  return (
    <footer className="flex space-x-4">
      { goHomeButton }
      <p> Current Employee</p>
      <p> Status</p>
    </footer>
  )
}

export default DashFooter





//button onClick={() => router.push('/feedback')}
// Go to the feedback page

// <input
//           type="checkbox"
//           onChange={() => router.push('/feedback')}
// >
// </input>
// Check me to go to the feedback page

{/* <button onClick={() => router.replace('/feedback')}>
          Go to the feedback page and not go back
</button> */}