import React from 'react'
import {useRecoilState} from 'recoil'
import {usersList} from '../atom/users/users'

export default function UsersList() {
    const [usernames, setUsernames] = useRecoilState(usersList)

    return (
        <ul>
            {usernames.map((username) => (
                <li key={username}>{username}</li>
            ))}
        </ul>
    )
}
