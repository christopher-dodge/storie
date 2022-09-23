import axios from 'axios';

const API = {
  postStorie: (postData) => {
    return axios.post('/api/blogs', postData);
  },
  getStories: () => {
    return axios.get('/api/blogs');
  }
}

export default API;