import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/recipes");

    const users = apiData.data;
    dispatch({ type: GET_USERS, payload: users });
  };
};

export const getUser = (id) => {
return async function (dispatch){
    const apiData = await axios.get(`http://localhost:3001/recipes/${id}`);
    const user =apiData.data;
    dispatch({type:"GET_USER",payload: user });
};
};

