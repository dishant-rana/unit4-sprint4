// use axios for api call
// import axios from "axios";
import {
  FILTER_DATA,
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  SORT_DATA,
} from "./actionTypes";
export const getProductsDataLoading = () => {
  return {
    type: GET_DATA_LOADING,
  };
};
export const getProductsDataError = () => {
  return {
    type: GET_DATA_ERROR,
  };
};
export const getProductsDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};
const getProductsData = () => (dispatch) => {
  dispatch(getProductsDataLoading());
  fetch(" https://movie-fake-server.herokuapp.com/products")
    .then((res) => res.json())
    .then((res) => dispatch(getProductsDataSuccess(res)))
    .catch(() => dispatch(getProductsDataError()));
};

const sortProducts = (payload) => {
  return {
    type: SORT_DATA,
    payload,
  };
};

const filterProducts = (payload) => {
  return {
    type: FILTER_DATA,
    payload,
  };
};

export { getProductsData, sortProducts, filterProducts };
