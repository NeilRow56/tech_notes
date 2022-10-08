import React, { useState } from "react";

const IncrementCounter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1 className='text-3xl font-bold my-5'>
        Counter: <span className='text-3xl font-bold my-5'>{counter}</span>
      </h1>
      <button className="bg-gray-200 rounded-md px-2 py-1" onClick={() => setCounter(count + 1)}>Add To Count</button>
    </div>
  )
}

export default IncrementCounter