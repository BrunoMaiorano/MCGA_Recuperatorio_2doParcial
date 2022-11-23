import {
    SAVE_DATA_FULLFIELLED,
    SAVE_DATA_LOADING,
    SAVE_DATA_REJECTED
} from './types'

const initialState = {
    users: [],
    isLoading: false,
    isError: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DATA_FULLFIELLED: 
        return{
            ...state,
                users: action.payload,
                isError: false
            }
        case SAVE_DATA_LOADING:
            return{
                ...state,
                isLoading: action.payload
            }
        case SAVE_DATA_REJECTED:
            return{
                ...state,
                isError: true,
                isLoading: false
            }
        default:
            return state
    }
}

export default usersReducer