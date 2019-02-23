import axios from "axios";
import { BASE_URL} from "../../config";

class Api {
  constructor(path) {
    this.client = axios.create({
      baseURL: `${BASE_URL}/svc/${path}`,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export default new Api();
export const NewsApi = new Api("search");
export const BooksApi = new Api("books");
