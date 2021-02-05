import React from 'react'
import classes from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={classes.message}>

            <div className={classes.messageWrapper}>

                <div className={classes.avatar}>
                    <img src={props.avatar} alt="avatar" />
                </div>

                <div className={classes.text}>
                    <span className={classes.name}>{props.name}</span>
                    <div className={classes.messageText}>
                        <div className={classes.ug} />
                        {props.message}
                    </div>
                    <span className={classes.time}>{props.time}</span>
                </div>

            </div>

        </div>
    )
}

export default Message
