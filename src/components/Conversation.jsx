import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap';
import { useSocket } from '../contexts/SocketProvider';

export default function Conversation() {
	const messageInput = useRef();
	const socket = useSocket();

	function sendMessage(e) {
		e.preventDefault();
		const message = messageInput.current.value;
		socket.emit('send-message', { sender: 'senderId', message });
		console.log(message);
	}

	return (
		<>
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
		</>
	);
}

// Conversation.propTypes = {
// 	id: PropTypes.string.isRequired,
// };
