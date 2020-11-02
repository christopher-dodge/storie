import axios from 'axios';

const API = {
  postStorie: function(postData) {
    return axios.post('/api/blogs', postData)
  }
}

export default API;