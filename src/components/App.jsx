import React, { useEffect } from 'react';
import Home from './Home';
import UserPictureProvider from '../contexts/UserPictureProvider';
import Dashboard from './Dashboard';

const URL = 'https://send-io.herokuapp.com';

export default function App() {
	const userToken = localStorage.getItem('send-io-usertoken');

	useEffect(() => {
		fetch(URL);
	});

	return (
		<>
			{ userToken
				? (
					<UserPictureProvider>
						<Dashboard />
					</UserPictureProvider>
				)
				: <Home />}
		</>
	);
}
