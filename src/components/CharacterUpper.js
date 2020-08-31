import React from 'react'
import {useRecoilValue} from 'recoil'
import {charUpperState} from '../atom/text/selectors/charUpperState'

export default function CharacterUpper() {
    const upper = useRecoilValue(charUpperState)
    return (
        <div>
            Character upper: {upper}      
        </div>
    ) 
}
