import {
    SAVE_DATA_FULLFIELLED,
    SAVE_DATA_LOADING,
    SAVE_DATA_REJECTED
} from './types'

export const saveData = (data) => {
    return{
        type: SAVE_DATA_FULLFIELLED,
        payload: data
    };
};

export const saveDataLoading = (isLoading) => {
    return{
        type: SAVE_DATA_LOADING,
        payload: isLoading
    };
};

export const saveDataError = () => {
    return{
        type: SAVE_DATA_REJECTED,
    };
};