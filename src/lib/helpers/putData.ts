import {AxiosResponse } from 'axios';
import { api } from '../utils/axios';
import { submitErrorToSlack } from './slackMessage';

export const putData = async (endpoint:string, values:Record<string, unknown>):  Promise<any> => {
	return api
		.put(endpoint, values)
		.then((res: AxiosResponse) => {
			if (res.status === 200) {
				return res.data;
			}

			throw new Error(res.data);
		})
		.catch((error: Error) => {
			console.error(error);
			throw error;
			// submitErrorToSlack(endpoint, error, 'PUT');
		});
};

export const putFormData = async (endpoint: string, values: Record<string, any>):Promise<any> => {
	const axiosOptions = {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	};

	let formData = new FormData();

	Object.keys(values).forEach((key: string) => {
		formData.append(key, values[key]);
	});

	return api
		.put(endpoint, formData, axiosOptions)
		.then((res: AxiosResponse) => {
			if (res.status === 200) {
				return res.data;
			}
			throw new Error(res.data);
		})
		.catch((error: Error) => {
			console.error(error);
			//submitErrorToSlack(endpoint, error, 'PUT');
			throw error;
		});
};
