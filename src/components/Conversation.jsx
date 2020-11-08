import React, { useRef, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap';
import { useSocket } from '../contexts/SocketProvider';
import { useConversation } from '../contexts/ConversationProvider';

const URL = 'https://send-io.herokuapp.com';

export default function Conversation({ username }) {
	const [messages, setMessages] = useState([]);

	const messageInput = useRef();
	const socket = useSocket();
	const { conversation } = useConversation();

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
			// friend: conversation.friend,
			sender: username,
			text: messageInput.current.value,
		};
		socket.emit('send-message', message);
		messageInput.current.value = '';
	}

	// useEffect(() => {
	// 	if (socket) {
	// 		socket.on('receive-message', (m) => {
	// 			console.log(m);
	// 		});
	// 	}
	// }, [socket]);

	return (
		<>
			{conversation

				?	(
					<Container className="border d-flex flex-column p-0">
						<h5 className="border mb-auto p-2"> {conversation.friend}</h5>
						<Container className="border ">
							{messages.length > 0
								? messages.map((m) => {
									console.log(m);
									return (<p>{m.text}</p>);
								})
								: <p>No messages yet, say something</p>}
						</Container>
						<Form onSubmit={sendMessage} className="w-100">
							<Container fluid className="border d-flex align-items-end justify-content-between p-0 ">
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
