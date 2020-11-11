import React, { useRef, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Container, Form, Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useSocket } from '../contexts/SocketProvider';
import { useConversation } from '../contexts/ConversationProvider';
import { useUserPicture } from '../contexts/UserPictureProvider';

const URL = 'https://send-io.herokuapp.com';

export default function Conversation({ username }) {
	const [messages, setMessages] = useState([]);

	const messageInput = useRef();
	const conversationEnd = useRef();

	const socket = useSocket();
	const { conversation } = useConversation();
	const getPicture = useUserPicture();

	const fetchMessages = () => {
		if (conversation) {
			const { friend } = conversation;
			fetch(`${URL}/conversations/${friend}/messages`, {
				headers: {
					Authorization: localStorage.getItem('send-io-usertoken'),
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setMessages(data);
					if (conversationEnd) {
						conversationEnd.current.scrollIntoView({ behavior: 'auto' });
					}
				})
				.catch((error) => { throw error; });
		}
	};

	useEffect(() => {
		fetchMessages();
	}, [conversation]);

	function sendMessage(e) {
		e.preventDefault();
		const message = {
			conversationId: conversation.id,
			sender: username,
			text: messageInput.current.value,
		};
		socket.emit('send-message', message);
		messageInput.current.value = '';
		fetchMessages();
	}

	useEffect(() => {
		if (socket) {
			socket.on('receive-message', () => {
				fetchMessages();
			});
		}
	}, [socket]);

	return (
		<>
			{conversation
				?	(
					<Container className="framed border-top-0 d-flex flex-column p-0 h-100">
						<div className="framed-bottom d-flex align-items-center p-2 bg-1">
							<div className="ring">
								<Image roundedCircle className="no-tiny" src={getPicture(conversation.friend)} alt="profile-pic" />
							</div>
							<div className="pl-2">
								<p>{conversation.friend}</p>
							</div>
						</div>
						<Container className="pb-4 mt-auto scroll">
							{messages.length > 0
								? messages.map((m) => {
									if (m.sender === username) {
										return (
											<div className="d-flex align-items-center justify-content-end mb-1 " key={m.id}>

												<OverlayTrigger
													placement="right"
													delay={{ show: 50, hide: 0 }}
													overlay={(
														<Tooltip id="button-tooltip">
															{m.createdAt.time}
														</Tooltip>
													)}
												>
													<p className=" text-white bubble bg-primary py-1 px-2 no-stretch">{m.text}</p>
												</OverlayTrigger>

											</div>
										);
									}
									return (
										<div className="d-flex align-items-center justify-content-start mb-1" key={m.id}>
											<OverlayTrigger
												placement="left"
												delay={{ show: 50, hide: 0 }}
												overlay={(
													<Tooltip id="button-tooltip">
														{m.createdAt.time}
													</Tooltip>
												)}
											>
												<p className="bubble bg-secondary py-1 px-2 no-stretch">{m.text}</p>
											</OverlayTrigger>
										</div>
									);
								})
								: <p className="pb-5 text-center text-muted">No messages yet, say something</p>}
							<div ref={conversationEnd} />
						</Container>
						<Form onSubmit={sendMessage} className="w-100 framed-top">
							<Container fluid className=" d-flex align-items-end justify-content-between p-0 ">
								<Form.Group className="m-0 w-100">
									<Form.Control className="w-100 square border-0 bg-3" required placeholder="Type a message.." ref={messageInput} type="text" />
								</Form.Group>
								<Button type="submit" className="square">
									<FontAwesomeIcon icon={faPaperPlane} />
								</Button>
							</Container>
						</Form>
					</Container>
				)
				:	(
					<Container className=" d-flex align-items-center justify-content-center p-0 h-100">
						<p className="w-100 p-4 text-center">
							Select a conversation to start chatting
						</p>
					</Container>
				)}
		</>
	);
}

// Conversation.propTypes = {
// 	id: PropTypes.string.isRequired,
// };
