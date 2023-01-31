// import { useReducer } from "react";

const initialState = {
  currentPage: 1,
  allUsers: [],
  users: [],
  user: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload, allUsers: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "POST_RECIPE":
      return {
        ...state,
      };
    case "GET_DIETS":
      return {
        ...state,
        diets: action.payload,
      };
    case "GET_DETAIL_FROM_STATE":
      const users = [...state.allUsers];
      const userDetail = users.filter(
        (r) => r.id.toString() === action.payload
      );
      return {
        ...state,
        user: userDetail,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
