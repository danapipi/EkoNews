import { APP_NAME } from "../../../config";

export const NEWS_ACTIONS = Object.freeze({
  REQUEST: `${APP_NAME}/news/request`,
  FULFILLED: `${APP_NAME}/news/fulfilled`,
  REJECTED: `${APP_NAME}/news/rejected`,
  SORT: `${APP_NAME}/news/sort`
});

export const BOOKS_ACTIONS = Object.freeze({
  REQUEST: `${APP_NAME}/books/request`,
  FULFILLED: `${APP_NAME}/books/fulfilled`,
  REJECTED: `${APP_NAME}/books/rejected`
});

export const newsActions = Object.freeze({
  request: query => ({
    type: NEWS_ACTIONS.REQUEST,
    payload: query
  }),
  fulfilled: newsData => ({
    type: NEWS_ACTIONS.FULFILLED,
    payload: newsData
  }),
  rejected: message => ({ type: NEWS_ACTIONS.REJECTED, payload: { message } }),
  sort: sort => ({
    type: NEWS_ACTIONS.SORT,
    sort
  })
});

export const booksActions = Object.freeze({
  request: ({ query }) => ({
    type: BOOKS_ACTIONS.REQUEST,
    payload: {
      query
    }
  }),
  fulfilled: listBooks => ({
    type: BOOKS_ACTIONS.FULFILLED,
    payload: listBooks
  }),
  rejected: message => ({ type: BOOKS_ACTIONS.REJECTED, payload: { message } })
});

const initialState = {
  newsData: [],
  listBooks: [],
  loading: false,
  message: "",
  sortNewsData: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEWS_ACTIONS.REQUEST:
      return {
        ...state,
        loading: true
      };
    case NEWS_ACTIONS.FULFILLED:
      return {
        ...state,
        loading: false,
        newsData: payload.newsData
      };
    case NEWS_ACTIONS.REJECTED:
      return { ...state, loading: false, message: payload.message };
    case NEWS_ACTIONS.SORT:
      return {
        ...state,
        sortNewsData: payload.sort
      };
    case BOOKS_ACTIONS.REQUEST:
      return {
        ...state,
        loading: true,
        query: payload.query
      };
    case BOOKS_ACTIONS.FULFILLED:
      return {
        ...state,
        loading: false,
        listBooks: payload.listBooks
      };
    case BOOKS_ACTIONS.REJECTED:
      return { ...state, loading: false, message: payload.message };
    default:
      return state;
  }
};

export const dashboardSelect = state => state.dashboard;
export const dataNewsSortASelect = state =>
  state.dashboard.newsData
    .splice()
    .sort((a, b) => new Date(b.pub_date) - new Date(a.pub_date));
export const dataNewsSortBSelect = state =>
  state.dashboard.newsData
    .splice()
    .sort((a, b) => new Date(a.pub_date) - new Date(b.pub_date));
