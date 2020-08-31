import React from 'react'
import {useRecoilState} from 'recoil'
import { textState } from '../atom/text/text'
import CharacterCount from './CharacterCount'
import CharacterUpper from './CharacterUpper'

function TextInput(){
    const [text, setText] = useRecoilState(textState)

    function onChange(e){
        setText(e.target.value)    
    }

    return (
        <div>
            echo: {text }
            <br/>
            <input type="text" value={text} style={{borderRadius: 20, outline: 'none', marginTop: 10}} onChange={onChange}/>
        </div>
    )
}

export default function CharacterCounter() {
    return (
        <div style={{width: '100%', height: '100%', marginLeft: 10}}>
            <TextInput/>
            <CharacterCount/>
            <CharacterUpper/>
        </div>
    )
}
