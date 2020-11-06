import React, { useState, useEffect } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import NewConversationModal from './NewConversationModal';

const URL = 'https://send-io.herokuapp.com';

export default function ConversationsSideBar() {
	const [conversations, setConversations] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		fetch(`${URL}/conversations`, {
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setConversations(data);
			})
			.catch((error) => { throw error; });
	}, []);

	const deleteConversation = (e) => {
		const friend = e.target.value;

		const options = {
			method: 'DELETE',
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
				'Content-Type': 'application/json',
			},
		};

		fetch(`${URL}/conversations/${friend}`, options)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Error');
				}
			})
			.catch((error) => { console.log(error); });
	};

	const openModal = () => {
		setModalOpen(true);
	};

	const hideModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<Container className="border">
				<h2>Conversations</h2>
				<Button type="button" onClick={openModal}>+</Button>
				<div className="border ">
					{conversations.length > 0
						? conversations.map((c) => (
							<div key={c}>
								<p>
									{c}
								</p>
								<Button type="button" value={c} variant="danger" onClick={deleteConversation}>X</Button>
							</div>
						))
						: <p>No conversations</p>}
				</div>

				<Modal show={modalOpen} onHide={hideModal}>
					<NewConversationModal hideModal={hideModal} />
				</Modal>

			</Container>
		</>
	);
}
