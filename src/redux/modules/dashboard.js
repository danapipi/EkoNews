import { APP_NAME } from "../../../config";

export const NEWS_ACTIONS = Object.freeze({
  REQUEST: `${APP_NAME}/news/request`,
  FULFILLED: `${APP_NAME}/news/fulfilled`,
  REJECTED: `${APP_NAME}/news/rejected`,
  SORT_A: `${APP_NAME}/news/sortA`,
  SORT_B: `${APP_NAME}/news/sortB`
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
  sortA: () => ({
    type: NEWS_ACTIONS.SORT_A
  }),
  sortB: () => ({
    type: NEWS_ACTIONS.SORT_B
  })
});

export const booksActions = Object.freeze({
  request: query => ({
    type: BOOKS_ACTIONS.REQUEST,
    payload: query
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
    case NEWS_ACTIONS.SORT_A:
      return {
        ...state,
        sortNewsData: state.newsData
          .splice()
          .sort((a, b) => new Date(b.pub_date) - new Date(a.pub_date))
      };
    case NEWS_ACTIONS.SORT_B:
      return {
        ...state,
        sortNewsData: state.newsData
          .splice()
          .sort((a, b) => new Date(a.pub_date) - new Date(b.pub_date))
      };
    case BOOKS_ACTIONS.REQUEST:
      return {
        ...state,
        loading: true
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
