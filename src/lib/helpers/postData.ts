import {AxiosResponse } from 'axios';
import { api } from '../utils/axios';
import { submitErrorToSlack } from './slackMessage';

export const postData = async (endpoint:string, values: Record<string, any>):Promise<any> => {
	return api
		.post(endpoint, values)
		.then((res: AxiosResponse) => {
			if (res.status === 200 || res.status === 201) {
				return res.data;
			}
			throw new Error(JSON.stringify(res));
		})
		.catch((error) => {
			console.error(error);
			throw error;
			// submitErrorToSlack(endpoint, error, 'POST');
		});
};

export const postFormData = async (endpoint:string, values: Record<string, any>):Promise<any>  => {
	const axiosOptions = {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	};

	let formData = new FormData();

	Object.keys(values).forEach((key:string) => {
		formData.append(key, values[key]);
	});

	return api
		.post(endpoint, formData, axiosOptions)
		.then((res:AxiosResponse) => {
			if (res.status === 200 || res.status === 201) {
				return res.data;
			}
			throw new Error(res.data);
		})
		.catch((error:Error) => {
			console.error(error);
			//submitErrorToSlack(endpoint, error, 'POST');
			throw error;
		});
};
