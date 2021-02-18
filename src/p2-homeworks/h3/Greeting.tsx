import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => {
    const inputClass = error ? s.error : s.success

    return (
        <div className={s.greeting}>
            <div className={s.greetingWrapper}>
                <input value={name} onChange={setNameCallback} className={inputClass} />
                <button onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
            <span>{error}</span>
        </div>
    )
}

export default Greeting
