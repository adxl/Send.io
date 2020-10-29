import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
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

	return (
		<>
			<p>
				Hello {username}<span className="text-muted">#{code}</span>
			</p>
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
