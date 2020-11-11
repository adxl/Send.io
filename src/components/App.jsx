import React from 'react';
import Home from './Home';
import UserPictureProvider from '../contexts/UserPictureProvider';
import Dashboard from './Dashboard';

export default function App() {
	const userToken = localStorage.getItem('send-io-usertoken');
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
