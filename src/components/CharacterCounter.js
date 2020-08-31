import React from 'react'
import { useRecoilState } from 'recoil'
import { textState } from '../atom/text/text'
import CharacterCount from './CharacterCount'
import CharacterUpper from './CharacterUpper'

function TextInput() {
    const [text, setText] = useRecoilState(textState)

    function onChange(e) {
        setText(e.target.value)
    }

    return (
        <div>
            echo: {text}
            <br />
            <input type="text" value={text} style={{ borderRadius: 20, outline: 'none', marginTop: 10 }} onChange={onChange} />
        </div>
    )
}

export default function CharacterCounter() {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
            <div style={{backgroundColor: '#e4e4e4', borderRadius: 20, width: 400, height: 400, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <TextInput />
                <CharacterCount />
                <CharacterUpper />
            </div>
        </div>
    )
}
