import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Socketprovider } from '../contexts/SocketProvider';
import Conversation from './Conversation';
import ConversationsSideBar from './ConversationsSideBar';
import Friends from './Friends';

export default function Dashboard() {
	const [username, setUsername] = useState();
	const [code, setCode] = useState();

	useEffect(() => {
		fetch('http://localhost:4000/users/me', {
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setUsername(data.username);
				setCode(data.code);
			})
			.catch((error) => { throw error; });
	}, []);

	const handleLogout = (e) => {
		localStorage.removeItem('send-io-usertoken');
	};

	return (
		<>
			<p>
				Hello {username}<span className="text-muted">#{code}</span>
			</p>

			<Form onSubmit={handleLogout}>
				<Button type="submit">
					Logout
				</Button>
			</Form>

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
