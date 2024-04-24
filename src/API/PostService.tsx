import axios from 'axios';

export default class PostService {
  static async getAll() {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6');
    return responce;
  }

  static async getById(id: string) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    return response;
  }
  static async getCommentsByPostId(id: string) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response;
  }
}
