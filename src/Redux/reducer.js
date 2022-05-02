import {
  FILTER_DATA,
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  SORT_DATA,
} from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_DATA_SUCCESS:
      localStorage.setItem("data", JSON.stringify(payload));
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case SORT_DATA:
      let sorteddata;
      if (payload === "desc") {
        sorteddata = state.data.sort((a, b) => {
          return b.price - a.price;
        });
      } else {
        sorteddata = state.data.sort((a, b) => {
          return a.price - b.price;
        });
      }
      return {
        ...state,
        data: sorteddata,
      };
    case FILTER_DATA:
      let originalData = JSON.parse(localStorage.getItem("data"));

      let filtereddata = originalData.filter((a) => a.category == payload);
      console.log(filtereddata);

      return {
        ...state,
        data: filtereddata,
      };
    default:
      return state;
  }
};
export { reducer };
