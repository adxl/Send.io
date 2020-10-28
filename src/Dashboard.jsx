import React from 'react';
import Conversation from './components/Conversation';
import { Socketprovider } from './contexts/SocketProvider';
import Friends from './Friends';

export default function Dashboard() {
	return (
		<>
			<Socketprovider>
				<Conversation />
			</Socketprovider>
			<Friends />
		</>
	);
}
