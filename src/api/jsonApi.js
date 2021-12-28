import { Auth } from 'auth-provider';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const getAccessToken = async () => {
	try {
		const res = await Auth.currentSession();
		return res.getIdToken().getJwtToken();
	} catch (error) {
		return '';
	}
};

export const getAuthorizationHeader = async () => {
	const token = await getAccessToken();
	const headers = {
		Authorization: `Bearer ${token}`,
	};
	return headers;
};

const currentUser = async () => {
	try {
		const res = await Auth.currentAuthenticatedUser();
		console.log(res);
		return res;
	} catch (error) {
		return 'No current user';
	}
};

const getUsers = async () => {
	const headers = await getAuthorizationHeader();
	const res = await axios({
		url: 'https://jsonplaceholder.typicode.com/users',
		method: 'GET',
		headers: {
			...headers,
			// if you want to add other headers ...
		},
	});
	return res;
};

const getPosts = async () => {
	const headers = await getAuthorizationHeader();
	const res = await axios({
		url: 'https://jsonplaceholder.typicode.com/posts',
		method: 'GET',
		headers: {
			...headers,
			// if you want to add other headers ...
		},
	});
	return res;
};

const getPhotoById = async ({ id }) => {
	const headers = await getAuthorizationHeader();
	const res = await axios({
		url: `https://jsonplaceholder.typicode.com/photos/${id}`,
		method: 'GET',
		headers: {
			...headers,
			// if you want to add other headers ...
		},
	});
	return res;
};

export default {
	getUsers,
	getPosts,
	getPhotoById,
	getAccessToken,
	currentUser,
};
