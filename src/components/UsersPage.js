import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import {usersList} from '../atom/users/users'
import UsersList from './UsersList'
import { Link } from 'react-router-dom'

function UserInput() {
    const [input, setInput] = useState('')
    const [usernames, setUsernames] = useRecoilState(usersList)

    function onChange(e) {
        setInput(e.target.value.trim())
    }

    function submit(){
        setUsernames([...usernames, input])
        
        setInput('')
    }

    return (
        <div>
            <input type="text" value={input} onChange={onChange}></input>

            <button onClick={submit}>Add User</button>
        </div>
    )
}

export default function UsersPage() {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
            <UserInput/>
            <UsersList/>
            <Link to="/">Go back</Link>
        </div>
    )
}
