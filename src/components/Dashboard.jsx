import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Form, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Socketprovider } from '../contexts/SocketProvider';
import Conversation from './Conversation';
import ConversationsSideBar from './ConversationsSideBar';
import { FriendshipsProvider } from '../contexts/FriendshipsProvider';
import { ConversationProvider } from '../contexts/ConversationProvider';

import Friends from './Friends';
import Invites from './Invites';

const URL = 'https://send-io.herokuapp.com';
const AVATAR_URL = 'https://eu.ui-avatars.com/api/?size=500&color=fff';

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

	const hashColor = (str) => {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
		return '00000'.substring(0, 6 - c.length) + c;
	};

	return (
		<Container fluid className="d-flex  flex-column m-0 p-0 h-100 bg-3">

			<Row className="d-flex justify-content-between m-0 p-0 h-100">
				<Col xs={9} className="p-0  h-100">
					<Row className="m-0 h-100 d-flex ">
						<ConversationProvider>
							<Col xs={4} className="p-0 h-100 bg-1">
								<div className="d-flex justify-content-between align-items-center p-2">
									<div className="d-flex align-items-center">
										{username
										&& (
											<div className="ring">
												<Image roundedCircle className="no-tiny" src={`${AVATAR_URL}&background=${hashColor(username)}&name=${username.charAt(0)}`} alt="profile-pic" />
											</div>
										)}
										<p className="pl-2">{username}</p>
									</div>
									<Form onSubmit={handleLogout}>
										<Button type="submit">
											<FontAwesomeIcon icon={faSignOutAlt} />
										</Button>
									</Form>
								</div>
								<br />
								<ConversationsSideBar />
							</Col>
							<Col xs={8} className="p-0 h-100 bg-2">
								<Socketprovider username={username}>
									<Conversation username={username} />
								</Socketprovider>
							</Col>
						</ConversationProvider>
					</Row>
				</Col>
				<Col xs={3} className="p-0 pt-5 bg-1">
					<FriendshipsProvider>
						<Container className="d-flex flex-column p-0">
							<Invites />
							<hr />
							<Friends />
						</Container>
					</FriendshipsProvider>
				</Col>
			</Row>
		</Container>
	);
}
