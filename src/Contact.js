import React, { useState } from 'react'

const Contact = ({ setUserName }) => {
  const [newUserName, setNewUserName] = useState("")
  return (
    <div>
      <input type="text" onChange={(event) => setNewUserName(event.target.value)} />
      <button onClick={() => { setUserName(newUserName) }}> Change UserName </button>
    </div>
  )
}

export default Contact