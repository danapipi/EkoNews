import { NewsApi, BooksApi } from "../utils/Api";
import { API_KEY } from "../../config";

const news = NewsApi.client;
const books = BooksApi.client;

export const articleSearch = {
  newsArticle: query =>
    news.get(`/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`)
};

export const bookLists = {
  review: query =>
    books.get(`/v3/list/current/${query}.json?api-key=${API_KEY}`)
};
