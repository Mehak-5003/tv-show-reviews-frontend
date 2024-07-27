import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:1337/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getTVShows() {
    return apiClient.get('/tv-shows');
  },
  getTVShow(id) {
    return apiClient.get(`/tv-shows/${id}`);
  },
};
