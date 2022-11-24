import{
    saveData,
    saveDataLoading,
    saveDataError,
    addUser,
    addUserLoading,
    addUserError
} from "./actions"

export const saveUsers = () => async (dispatch) => {
    try {
        dispatch(saveDataLoading(true)); //comienzo a traer los datos
        /* const response = await fetch(`${process.env.REACT_APP_API_URL}/users`); */
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(saveData(data), console.log(data));
        /* console.log(data) */
        dispatch(saveDataLoading(false));
    } catch (error) {
        dispatch(saveDataError());
    }
}

export const addUserThunk = (user) => async (dispatch) => {
    try {
        dispatch(addUserLoading(true));
        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(console.log)
        
        /* const userResponse = await response.json();
        if (response.status !== 201) throw new Error('Error');
        dispatch(addUser(userResponse));
        dispatch(addUserLoading(false)); */
    } catch (error) {
        dispatch(addUserError());
    }
}