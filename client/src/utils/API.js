import axios from 'axios';

const API = {
  postStorie: function(postData) {
    return axios.post('/api/stories', postData)
  }
}

export default API;