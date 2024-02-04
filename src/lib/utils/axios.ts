import axios from 'axios';
export const BASE_URL =
	process.env.NODE_ENV === 'production'
		? process.env.REACT_APP_API_ENDPOINT
		: 'http://127.0.0.1:5000';

export const api = axios.create({
	baseURL: BASE_URL,
});

api.interceptors.request.use(
	(config) => {
		const token =
			typeof window !== 'undefined' && localStorage.getItem('accessToken');

		config.headers['Authorization'] = `Bearer ${token}`;
		return config;
	},
	(error: Error) => {
		return Promise.reject(error);
	}
);
