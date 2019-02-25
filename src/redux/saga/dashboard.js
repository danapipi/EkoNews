import { call, put, takeLatest, select } from "redux-saga/effects";
import { articleSearch, bookLists } from "../../services";
import {
  newsActions,
  NEWS_ACTIONS,
  booksActions,
  BOOKS_ACTIONS
} from "../modules/dashboard";

function* newsRequestSaga({ payload }) {
  try {
    const {
      data: {
        response: { docs }
      }
    } = yield call(articleSearch.newsArticle, payload);
    yield put(newsActions.fulfilled({ newsData: docs }));
  } catch (error) {
    yield put(newsActions.rejected(error));
  }
}

function* booksRequestSaga({ payload }) {
  try {
    const {
      data: {
        results: { books }
      }
    } = yield call(bookLists.review, payload);
    console.warn("data buku", books);
    yield put(booksActions.fulfilled({ listBooks: books }));
  } catch (error) {
    yield put(booksActions.rejected(error.response));
  }
}

const watchDashboard = [
  takeLatest(NEWS_ACTIONS.REQUEST, newsRequestSaga),
  takeLatest(BOOKS_ACTIONS.REQUEST, booksRequestSaga)
];

export default watchDashboard;
