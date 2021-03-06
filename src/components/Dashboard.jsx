import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Form, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Socketprovider } from '../contexts/SocketProvider';
import Conversation from './Conversation';
import ConversationsSideBar from './ConversationsSideBar';
import { FriendshipsProvider } from '../contexts/FriendshipsProvider';
import { ConversationProvider } from '../contexts/ConversationProvider';
import { useUserPicture } from '../contexts/UserPictureProvider';
import Friends from './Friends';
import Invites from './Invites';

const URL = 'https://send-io.herokuapp.com';

export default function Dashboard() {
	const [username, setUsername] = useState();
	const getPicture = useUserPicture();

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
												<Image roundedCircle className="no-tiny" src={getPicture(username)} alt="profile-pic" />
											</div>
										)}
										<p className="pl-2">{username}</p>
									</div>
									<Form onSubmit={handleLogout}>
										<Button type="submit" className="bg-3 border-0">
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
				<Col xs={3} className="p-0 pt-5 bg-1 h-100">
					<FriendshipsProvider>
						<Container className="d-flex flex-column align-items-center p-0 h-100">
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
