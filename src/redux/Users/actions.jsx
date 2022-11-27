import {
    SAVE_DATA_FULLFIELLED,
    SAVE_DATA_LOADING,
    SAVE_DATA_REJECTED,
    ADD_USER_FULLFILLED,
    ADD_USER_LOADING,
    ADD_USER_REJECTED,
    DELETE_USER,
    DELETE_USER_LOADING,
    DELETE_USER_REJECTED,
    UPDATE_USER,
    UPDATE_USER_LOADING,
    UPDATE_USER_REJECTED
} from './types'


//ACCIONES DE LISTAR

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

//ACCIONES DE AGREGAR

export const addUser = (data) => {
    return {
      type: ADD_USER_FULLFILLED,
      payload: data,
    };
  };
  
  export const addUserLoading = (isLoading) => {
    return {
      type: ADD_USER_LOADING,
      payload: isLoading,
    };
  };
  
  export const addUserError = () => {
    return {
      type: ADD_USER_REJECTED,
    };
  };

  //ACCIONES DE BORRAR

  export const deleteUser = (data) => {
    return {
      type: DELETE_USER,
      payload: data,
    };
  };
  
  export const deleteUserLoading = (isLoading) => {
    return {
      type: DELETE_USER_LOADING,
      payload: isLoading,
    };
  };
  
  export const deleteUserError = () => {
    return {
      type: DELETE_USER_REJECTED,
    };
  };


  //Acciones de Actualizar

  export const updateUser = (data) => {
    return {
        type: UPDATE_USER,
        payload: data,
    };
};

export const updateUserLoading = (isLoading) => {
    return {
        type: UPDATE_USER_LOADING,
        payload: isLoading,
    };
};

export const updateUserError = () => {
    return {
        type: UPDATE_USER_REJECTED,
    };
};