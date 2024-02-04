import { useMutation, QueryClient, useQuery } from '@tanstack/react-query';
//lib
import { USER_ENDPOINTS } from '../utils/routes';
import { getData } from '../helpers/getData';
import { postData } from '../helpers/postData';
import { putData } from '../helpers/putData';
import { toast } from 'react-toastify';
import { useAppStore } from '../store';

const queryClient = new QueryClient();

//SIGN_IN
const fetchPostSignIn = async (user) => {
	if (!user) return null;
	const endpoint = `${USER_ENDPOINTS.SIGN_IN}`;
	return await postData(endpoint, user);
};

export const useSingInUserQuery = () => {
	const { setUser } = useAppStore();
	return useMutation({
		mutationFn: (user) => fetchPostSignIn(user),
		onSuccess: (data) => {
			setUser(data.app_user);
			queryClient.setQueryData(['appUser'], data.app_user);
		},
		onError: (err) => {
			console.error(err);
		},
	});
};

// GET USER DATA

const fetchAppUser = async () => {
	const endpoint = `${USER_ENDPOINTS.GET_USER}/`;
	const response = await getData(endpoint);
	return response.app_user;
};

export const useGetAppUser = () => {
	const { data, isError, error, isLoading } = useQuery({
		queryKey: ['appUser'],
		queryFn: () => fetchAppUser(),
	});
	return {
		appUser: data,
		isLoading,
		isError,
		error,
	};
};

// UPDATE USER DATA

const fetchPutSignIn = async (userValues) => {
	if (!userValues) return null;
	const endpoint = `${USER_ENDPOINTS.UPDATE_USER}/${userValues.id}`;
	return await putData(endpoint, user);
};

export const useUpdateUser = () => {
	return useMutation({
		mutationFn: (userValues) => fetchPutSignIn(userValues),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['appUser'] });
		},
		onError: (err) => {
			toast.error('There was an error with the request, please try again.', {
				type: 'error',
				autoClose: 3000,
			});
			console.error(err);
		},
	});
};
