import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes'

function Header() {
    return (
        <div className={s.links}>
            <NavLink className={s.link} activeClassName={s.active} to={PATH.PRE_JUNIOR}>pre junior</NavLink>
            <NavLink className={s.link} activeClassName={s.active} to={PATH.JUNIOR}>junior</NavLink>
            <NavLink className={s.link} activeClassName={s.active} to={PATH.JUNIOR_PLUS}>junior+</NavLink>
            <div className={s.burger} />
        </div>
    )
}

export default Header
