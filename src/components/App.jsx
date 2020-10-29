import React from 'react';
import Home from './Home';
import Dashboard from './Dashboard';

export default function App() {
	const userToken = localStorage.getItem('send-io-usertoken');

	return (
		<>
			{ userToken ? <Dashboard /> : <Home />}
		</>
	);
}
