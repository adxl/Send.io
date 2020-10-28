import React from 'react';
import Home from './Home';
import Dashboard from './Dashboard';

export default function App() {
	const id = localStorage.getItem('send-io-userid');

	return (
		<>
			{ id ? <Dashboard id={id} /> : <Home />}
		</>
	);
}
