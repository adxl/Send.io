import React, { useState, useRef } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

const URL = 'https://send-io.herokuapp.com';

export default function NewConversationModal({ hideModal, fetchConversations }) {
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
					fetchConversations();
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
			<Modal.Header closeButton id="modal-header" className="bg-1 border-0 wt">Create a new conversation</Modal.Header>
			<Modal.Body className="bg-2">
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Control className="bg-3 border-0" ref={friendInput} placeholder="Entre a friend name" type="text" required />
					</Form.Group>
					<p className="mb-2 text-danger">{alert}</p>
					<Button type="submit" className="w-100">Create conversation</Button>
				</Form>
			</Modal.Body>
		</>
	);
}
