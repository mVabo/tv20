import axios from 'axios';

/**
 * An axios instance we can use so we dont have to repeat the baseURL for every call.
 */
const api = axios.create({
	baseURL: 'https://breaking-api.alpha.tv2.no/v1/public',
	timeout: 3000,
});

export default api;
