import React, { useState, useRef } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

const URL = 'https://send-io.herokuapp.com';

export default function NewConversationModal({ hideModal }) {
	const [alert, setAlert] = useState();

	const friendInput = useRef();

	const createConversation = (friend) => {
		const data = {
			friend,
		};

		const options = {
			method: 'POST',
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};

		fetch(`${URL}/conversations/new`, options)
			.then((response) => {
				if (response.ok) {
					hideModal();
				}
				return response.text();
			})
			.then((message) => setAlert(message))
			.catch((error) => { console.log(error); });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const friend = friendInput.current.value;
		createConversation(friend);
	};

	return (
		<>
			<Modal.Header closeButton>Create a new conversation</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Control ref={friendInput} placeholder="Entre a friend name" type="text" required />
					</Form.Group>
					<p>{alert}</p>
					<Button type="submit">Create conversation</Button>
				</Form>
			</Modal.Body>
		</>
	);
}
