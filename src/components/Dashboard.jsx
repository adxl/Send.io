import React from 'react';
import { Container } from 'react-bootstrap';
import { Socketprovider } from '../contexts/SocketProvider';
import Conversation from './Conversation';
import ConversationsSideBar from './ConversationsSideBar';
import Friends from './Friends';

export default function Dashboard() {
	return (
		<>
			<Container className="d-flex align-items-center justify-content-center">
				<ConversationsSideBar />
				<Socketprovider>
					<Conversation />
				</Socketprovider>
				<Friends />
			</Container>
		</>
	);
}
