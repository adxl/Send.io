import React from 'react';
import Conversation from './components/Conversation';
import { Socketprovider } from './contexts/SocketProvider';

export default function App() {
	const id = localStorage.getItem('send-io-userid');
	return (
		<>
			<Socketprovider id={id}>
				<Conversation id={id} />
			</Socketprovider>
		</>
	);
}
