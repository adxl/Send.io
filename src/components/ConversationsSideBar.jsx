import React, { useState, useEffect } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import NewConversationModal from './NewConversationModal';
import { useConversation } from '../contexts/ConversationProvider';

const URL = 'https://send-io.herokuapp.com';

export default function ConversationsSideBar() {
	const [conversations, setConversations] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const { selectConversation } = useConversation();

	const fetchConversations = () => {
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
	};

	useEffect(() => {
		fetchConversations();
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
				fetchConversations();
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
				<Container className="d-flex align-items-center justify-content-between border">
					<h3>Conversations</h3>
					<Button type="button" onClick={openModal}>+</Button>
				</Container>
				<div className="border ">
					{conversations.length > 0
						? conversations.map((c) => (
							<Container key={c} className="d-flex align-items-center justify-content-between border">
								<p className="border w-100">
									<Button variant="white" className="border w-100 text-left" onClick={() => selectConversation(c)}>{c}</Button>
								</p>
								<Button type="button" value={c} variant="danger" onClick={deleteConversation}>X</Button>
							</Container>
						))
						: <p>No conversations</p>}
				</div>

				<Modal show={modalOpen} onHide={hideModal}>
					<NewConversationModal hideModal={hideModal} fetchConversations={fetchConversations} />
				</Modal>

			</Container>
		</>
	);
}
