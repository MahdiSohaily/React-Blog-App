import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
class httpClient {
  get(url, config = {}) {
    return axios.get(url, config);
  }

  post(url, payload, config) {
    return axios.post(url, payload, config);
  }

  put(url, payload, config) {
    return axios.put(url, payload, config);
  }

  delete(url, config = {}) {
    return axios.delete(url, config);
  }
}

const https = new httpClient();

export default https;
