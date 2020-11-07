import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Socketprovider } from '../contexts/SocketProvider';
import Conversation from './Conversation';
import ConversationsSideBar from './ConversationsSideBar';
import { FriendshipsProvider } from '../contexts/FriendshipsProvider';
import { ConversationProvider } from '../contexts/ConversationProvider';
import Friends from './Friends';
import Invites from './Invites';

const URL = 'https://send-io.herokuapp.com';

export default function Dashboard() {
	const [username, setUsername] = useState();

	useEffect(() => {
		fetch(`${URL}/users/me`, {
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setUsername(data.username);
			})
			.catch((error) => { throw error; });
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('send-io-usertoken');
	};

	return (
		<Container fluid className="d-flex flex-column h-100 m-0 p-0 border">
			<Container fluid className="d-flex justify-content-between m-0 border">
				<h3>Hello {username}</h3>
				<Form onSubmit={handleLogout}>
					<Button type="submit">Logout</Button>
				</Form>
			</Container>

			<Container fluid className="d-flex justify-content-between h-100 m-0 mt-4 border ">

				<ConversationProvider>
					<ConversationsSideBar />
					<Socketprovider>
						<Conversation />
					</Socketprovider>
				</ConversationProvider>

				<FriendshipsProvider>
					<Container className="d-flex flex-column">
						<Invites />
						<Friends />
					</Container>
				</FriendshipsProvider>

			</Container>
		</Container>
	);
}
