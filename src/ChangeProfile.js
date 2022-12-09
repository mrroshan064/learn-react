import React, { useState, useContext } from 'react'
import { AppContext } from "./App"

const ChangeProfile = () => {
    const [newUserName, setNewUserName] = useState("")
    const { setUserName } = useContext(AppContext);
    return (
        <div>
            <input type="text" onChange={(event) => { setNewUserName(event.target.value) }} />
            <button onClick={() => { setUserName(newUserName) }}> Change UserName</button>
        </div >
    )
}

export default ChangeProfile