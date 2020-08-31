import {atom} from 'recoil'
import {initialName} from '../../fixtures/initialName'

export const textState = atom({
    key: 'textState',
    default: initialName
})