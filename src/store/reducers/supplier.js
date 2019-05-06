import {
  SUPPLIER_REQUEST,
  SUPPLIER_SUCCESS,
  SUPPLIER_FAILURE
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  list: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUPPLIER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SUPPLIER_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      }
    default:
      return state;
  }
};