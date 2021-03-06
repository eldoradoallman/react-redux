import axios from 'axios';
import API from '../_api';
import { logger } from '../Functions';

export const types = {
  FETCH_HOME_CONTENT: 'FETCH_HOME_CONTENT',
  FETCH_HOME_CONTENT_PENDING: 'FETCH_HOME_CONTENT_PENDING',
  FETCH_HOME_CONTENT_REJECTED: 'FETCH_HOME_CONTENT_REJECTED',
  FETCH_HOME_CONTENT_FULFILLED: 'FETCH_HOME_CONTENT_FULFILLED'
};

export const initialState = {
  homeFetching: false,
  homeFetched: false,
  homeError: null,
  users: []
};

export const actions = {
  fetchHomeContent: () => ({
    type: types.FETCH_HOME_CONTENT,
    payload: axios.get(API.HOME.CONTENT)
  }),
  getUserData: () => ({
    type: 'CLICK_BUTTON',
    payload: logger(() => console.log('the button has been clicked'))
  })
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_HOME_CONTENT_PENDING:
      return { ...state, homeFetching: true };
    case types.FETCH_HOME_CONTENT_REJECTED:
      return { ...state, homeFetching: false, homeError: action.payload };
    case types.FETCH_HOME_CONTENT_FULFILLED:
      return { ...state, homeFetching: false, homeFetched: true, users: action.payload.data };
    default:
      return state;
  }
};

export default homeReducer;

// selectors samples
/* import { filter, find, sortBy } from 'your-favorite-library';

export const getProduct = (state) => state.product.products;
export const getProductById = (state, id) => find(state.product.products, id);
export const getProductSortedByName = (state) => sortBy(state.product.products, 'name');
export const getExpiredProducts = (state) => filter(state.product.products, { isExpired: true }); */
