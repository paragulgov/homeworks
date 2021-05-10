import React, {useState} from 'react'
import {API} from './RequestsAPI'

export const Request = () => {
    const [value, setValue] = useState<boolean>(false)
    const [text, setText] = useState<string>('')

    const buttonHandler = () => {
        API.postRequest(value).then(response => {
            console.log(response.data)
            setText(response.data.errorText)
        }).catch(error => {
            console.log({...error})
            console.log(error.response ? error.response.data.errorText : error.message)
            setText(error.response.data.errorText)
        })
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={value}
                onChange={() => setValue(!value)}
            />

            <button onClick={buttonHandler}>SEND</button>

            <div>{text}</div>
        </div>
    )
}

