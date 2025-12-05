import React, { useState } from 'react'

const Demo = () => {
    const[state,setState] = useState("virat")
    function change(){
        setState("Rohit")
    }
  return (
    <div>
        <h1>hello </h1>
        <h2>{state}</h2>
        <button onClick={change}>Change Name</button>
    </div>
  )
}

export default Demo