import {
    SAVE_DATA_FULLFIELLED,
    SAVE_DATA_LOADING,
    SAVE_DATA_REJECTED,
    ADD_USER_FULLFILLED,
    ADD_USER_LOADING,
    ADD_USER_REJECTED,
    DELETE_USER,
    DELETE_USER_LOADING,
    DELETE_USER_REJECTED
} from './types'

const initialState = {
    users: [],
    isLoading: false,
    isError: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {


        //LISTAR
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


        //AGREGAR

        case ADD_USER_FULLFILLED:
        return {
            ...state,
            data: [...state.data, action.payload],
            isError: false,
        };

        case ADD_USER_LOADING:
        return {
            ...state,
            isLoading: action.payload,
        };

    case ADD_USER_REJECTED:
        return {
            ...state,
            isError: true,
            isLoading: false,
        };
    
        //BORRAR

    case DELETE_USER:{
        return {
            ...state,
            data: state.data.filter((item) => item._id !== action.payload),
            isError: false
        }
    };

    case DELETE_USER_LOADING:
        return {
            ...state,
            isLoading: action.payload
        };

    case DELETE_USER_REJECTED:
        return {
            ...state,
            isError: true,
            isLoading: false
        }

        default:
            return state
    }
}

export default usersReducer