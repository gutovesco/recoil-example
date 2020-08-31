import {selector} from 'recoil';
import {usersList} from '../users'
import {api} from '../../../services/api'

export const charCountState = selector({
    key: 'charCountState',
    get: async ({get}) => {
        const _usersList = get(usersList);

        const responses = await Promise.all(
            _usersList.map(username => api.get(`/users/${username}`))
        )

        const followerMap = []

        responses.forEach(response => {
            const {data} = response;

            followerMap[data.login] = data.followers
        })
    }
})