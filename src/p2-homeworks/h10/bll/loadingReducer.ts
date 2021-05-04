type loadingActionType = {
    type: 'SET-LOADING'
    payload: boolean
}

type StateType = {
    isLoading: boolean
}

const initState: StateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingActionType): StateType => {
    switch (action.type) {
        case 'SET-LOADING': {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default:
            return state
    }
}

export const loadingAC = (payload: boolean): loadingActionType => ({
    type: 'SET-LOADING',
    payload
})
