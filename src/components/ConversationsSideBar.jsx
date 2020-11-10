import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import NewConversationModal from './NewConversationModal';
import { useConversation } from '../contexts/ConversationProvider';

const URL = 'https://send-io.herokuapp.com';
const AVATAR_URL = 'https://eu.ui-avatars.com/api/?size=500&color=fff';

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

	const hashColor = (str) => {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
		return '00000'.substring(0, 6 - c.length) + c;
	};

	return (
		<>
			<Container className=" p-0">
				<Container className="d-flex align-items-center justify-content-between ">
					<h1>Conversations</h1>
					<Button type="button" onClick={openModal} className="rounded-circle circle">
						<FontAwesomeIcon icon={faEdit} />
					</Button>
				</Container>
				<div>
					{conversations.length > 0
						? conversations.map((c) => {
							const conversationObject = {
								id: c.id,
								friend: c.friend,
							};
							const avatarParams = `background=${hashColor(c.friend)}&name=${c.friend.charAt(0)}`;
							return (
								<Container key={c.id} className="d-flex align-items-center justify-content-between ">
									<p className=" w-100">
										<Button variant="white" className=" w-100 text-left" onClick={() => selectConversation(conversationObject)}>
											<div className="d-flex align-items-center ">
												<Image roundedCircle thumbnail className="no-tiny" src={`${AVATAR_URL}&${avatarParams}`} alt="profile-pic" />
												<div className="pl-2">
													<p>{c.friend}</p>
													<small className="text-muted">{c.lastMessage.substring(0, 30)}</small>
												</div>
											</div>
										</Button>

									</p>
									{
									// eslint-disable-next-line max-len
									/* <Button type="button" value={c.friend} variant="danger" onClick={deleteConversation}>X</Button> */
									}
								</Container>
							);
						})
						: <p>No conversations</p>}
				</div>

				<Modal show={modalOpen} onHide={hideModal}>
					<NewConversationModal hideModal={hideModal} fetchConversations={fetchConversations} />
				</Modal>

			</Container>
		</>
	);
}
