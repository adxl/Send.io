import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
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
		localStorage.removeItem('send-io-current-conversation');
	};

	return (
		<Container fluid className="d-flex flex-column h-100 m-0 p-0">

			<Container fluid id="header" className="d-flex justify-content-between m-0 pt-2">
				<h3>Hello {username}</h3>
				<Form onSubmit={handleLogout}>
					<Button type="submit">Logout</Button>
				</Form>
			</Container>

			<Row id="main" className="d-flex justify-content-between m-0 pt-4">
				<Col xs={9} className="p-0 h-100">
					<Row className="m-0 h-100">
						<ConversationProvider>
							<Col xs={4} className="p-0">
								<ConversationsSideBar />
							</Col>
							<Col xs={8} className="p-0 h-100">
								<Socketprovider username={username}>
									<Conversation username={username} />
								</Socketprovider>
							</Col>
						</ConversationProvider>
					</Row>
				</Col>
				<Col xs={3} className="p-0">
					<FriendshipsProvider>
						<Container className="d-flex flex-column p-0">
							<Invites />
							<Friends />
						</Container>
					</FriendshipsProvider>
				</Col>
			</Row>
		</Container>
	);
}
