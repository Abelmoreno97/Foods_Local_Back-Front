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

export const getDiets = (id) => {
  return async function (dispatch){
      const apiData = await axios.get(`http://localhost:3001/diets`);
      const diets =apiData.data;
      dispatch({type:"GET_DIETS",payload: diets });
  };
  };

  export function getDetailFromState(payload) {
    return {
      type: "GET_DETAIL_FROM_STATE",
      payload,
    };
  };

  export function setCurrentPage(payload) {
    return {
      type: "SET_CURRENT_PAGE",
      payload,
    };
  };

// export const postRecipe = (body) => {
//   return async function (dispatch) {
//       const response = await axios.post(`http://localhost:3001//recipes/create`, body);
//       const neww = response.data
//       dispatch({type: "POST_RECIPE",payload: neww});
//   };
// }

