import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Socketprovider } from '../contexts/SocketProvider';
import Conversation from './Conversation';
import ConversationsSideBar from './ConversationsSideBar';
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
		<>
			<p>Hello {username}</p>

			<Form onSubmit={handleLogout}>
				<Button type="submit">Logout</Button>
			</Form>

			<Container className="d-flex align-items-center justify-content-center">

				<ConversationsSideBar />

				<Socketprovider>
					<Conversation />
				</Socketprovider>

				<Container>
					<Invites />
					<Friends />
				</Container>

			</Container>
		</>
	);
}
