import React from 'react';
import Conversation from './components/Conversation';
import { Socketprovider } from './contexts/SocketProvider';
import Login from './components/Login';

export default function App() {
	// const id = localStorage.getItem('send-io-userid');
	return (
		<>
			<Login />
			{/* <Socketprovider id={id}>
				<Conversation id={id} />
			</Socketprovider> */}
		</>
	);
}
