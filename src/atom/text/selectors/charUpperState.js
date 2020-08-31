import {selector} from 'recoil';
import {textState} from '../text'

export const charUpperState = selector({
    key: 'charUpperState',
    get: ({get}) => {
        const text = get(textState);

        return text.toUpperCase();
    }
})