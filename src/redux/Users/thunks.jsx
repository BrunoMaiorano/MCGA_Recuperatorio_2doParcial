import{
    saveData,
    saveDataLoading,
    saveDataError,
    addUser,
    addUserLoading,
    addUserError,
    deleteUser,
    deleteUserLoading,
    deleteUserError
} from "./actions"

export const saveUsers = () => async (dispatch) => {
    try {
        dispatch(saveDataLoading(true)); //comienzo a traer los datos
        /* const response = await fetch(`${process.env.REACT_APP_API_URL}/users`); */
        const response = await fetch('https://mcga2022-user-app.onrender.com/api/users')
        const data = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(saveData(data));
        /* console.log(data) */
        dispatch(saveDataLoading(false));
    } catch (error) {
        dispatch(saveDataError());
    }
}

export const addUserThunk = (user) => async (dispatch) => {
    try {
        dispatch(addUserLoading(true));
        const response = await fetch('https://mcga2022-user-app.onrender.com/api/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        const userResponse = await response.json();
        if (response.status !== 201) throw new Error('Error');
        dispatch(addUser(userResponse));
        dispatch(addUserLoading(false));
    } catch (error) {
        dispatch(addUserError());
    }
}

export const deleteUserThunk = (id) => async (dispatch) => {
    try {
        dispatch(deleteUserLoading(true));
        const response = await fetch(`https://mcga2022-user-app.onrender.com/api/users/delete/${id}`, {
            method: 'DELETE',
        });
        if (response.status !== 200) throw new Error('Error');
        dispatch(deleteUser(id));
        dispatch(deleteUserLoading(false));
    } catch (error) {
        dispatch(deleteUserError());
    }
}