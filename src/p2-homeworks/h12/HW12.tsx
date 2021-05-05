import React from 'react'
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio'
import s from './HW12.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../h10/bll/store'
import {changeThemeC, ThemeType} from './bll/themeReducer'

const themes = ['dark', 'red', 'some', 'france']

function HW12() {
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)

    const onChangeCallback = (value: ThemeType) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr />
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />

            <hr />
        </div>
    )
}

export default HW12
