export type ThemeType = 'some' | 'dark' | 'red'

type ActionType = {
    type: 'SET-THEME',
    payload: ThemeType
}

type StateType = {
    theme: ThemeType
}

const initState: StateType = {
    theme: 'some'
}

export const themeReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET-THEME': {
            return {
                ...state,
                theme: action.payload
            }
        }
        default:
            return state
    }
}

export const changeThemeC = (payload: ThemeType): ActionType => ({
    type: 'SET-THEME',
    payload
})
