import React, { useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap';
import { useSocket } from '../contexts/SocketProvider';
import { useConversation } from '../contexts/ConversationProvider';

export default function Conversation({ username }) {
	const messageInput = useRef();
	const socket = useSocket();
	const { conversation } = useConversation();

	function sendMessage(e) {
		e.preventDefault();
		const message = {
			conversationId: conversation.id,
			friend: conversation.friend,
			sender: username,
			text: messageInput.current.value,
		};
		socket.emit('send-message', message);
	}

	useEffect(() => {
		if (socket) {
			socket.on('receive-message', (m) => {
				console.log(m);
			});
		}
	}, [socket]);

	return (
		<>
			{conversation

				?	(
					<Container className="border d-flex align-items-end justify-content-center p-0">
						<Form onSubmit={sendMessage} className="w-100">
							<Container className="border d-flex align-items-end justify-content-between p-0 w-100">
								<Form.Group className="m-0 w-100">
									<Form.Control className="w-100" required placeholder="Type a message" ref={messageInput} type="text" />
								</Form.Group>
								<Button type="submit">Send</Button>
							</Container>
						</Form>
					</Container>
				)
				:	(
					<Container className="border d-flex align-items-center justify-content-center p-0">
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
