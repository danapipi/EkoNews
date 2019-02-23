import { NewsApi, BooksApi } from "../utils/Api";
import { API_KEY } from "../../config";

const news = NewsApi.client;
const books = BooksApi.client;

export const articleSearch = {
  newsArticle: query =>
    news.get(`/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`)
};

export const bookListsHardCover = {
  review: () =>
    books.get(`/v3/list/current/hardcover-fiction.json?api-key=${API_KEY}`)
};

export const bookListsEbook = {
  review: () =>
    books.get(`/v3/list/current/e-book-fiction.json?api-key=${API_KEY}`)
};
