import React from 'react'
import {useRecoilState, useRecoilValue} from 'recoil'
import {usersList} from '../atom/users/users'
import {usersFollowers} from '../atom/users/selectors/Followers'

export default function UsersList() {
    const usernames = useRecoilValue(usersList)
    const followersMap = useRecoilValue(usersFollowers)

    return (
        <ul>
            {usernames.map((username) => (
                <li key={username}>{username} ({followersMap[username]})</li>
            ))}
        </ul>
    )
}
