import axios from 'axios';

// This api is used to communicate to our backend routes : )
const api = axios.create({
  // baseURL: 'http://localhost:5000/'
});

export default api;