import { AxiosResponse } from 'axios';
import { api } from '../utils/axios';
import { submitErrorToSlack } from './slackMessage';

export const getData = async (endpoint: string): Promise<any> => {
	return api
		.get(endpoint)
		.then((res: AxiosResponse) => {
			if (res.status === 200) {
				return res.data;
			}
			throw new Error(JSON.stringify(res));
		})
		.catch((error: Error) => {
			console.error(error);
			throw error;
			// submitErrorToSlack(endpoint, error, 'GET');
		});
};
