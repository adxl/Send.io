import React, { useState, useRef } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useFriendship } from '../contexts/FriendshipsProvider';
import { useUserPicture } from '../contexts/UserPictureProvider';

const URL = 'https://send-io.herokuapp.com';

export default function Invites() {
	const [inviteAlert, setInviteAlert] = useState();

	const searchUsernameRef = useRef();

	const { invites, fetchInvites, fetchFriends } = useFriendship();
	const getPicture = useUserPicture();

	const handleAddFriend = (e) => {
		e.preventDefault();

		const data = {
			friend: searchUsernameRef.current.value,
		};

		const options = {
			method: 'POST',
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};

		fetch(`${URL}/invites/send`, options)
			.then((response) => response.text())
			.then((message) => {
				setInviteAlert(message);
				searchUsernameRef.current.value = '';
			})
			.catch((error) => { throw error; });
	};

	const handleAcceptRequest = (friend) => {
		const options = {
			method: 'POST',
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ friend }),
		};

		fetch(`${URL}/invites/accept`, options)
			.then((response) => {
				if (response.ok) {
					fetchInvites();
					fetchFriends();
				} else {
					throw new Error('An error occured');
				}
			})
			.catch((error) => { throw error; });
	};

	const handleDenyRequest = (friend) => {
		const options = {
			method: 'POST',
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ friend }),
		};

		fetch(`${URL}/invites/deny`, options)
			.then((response) => {
				if (response.ok) {
					fetchInvites();
				} else {
					throw new Error('An error occured');
				}
			})
			.catch((error) => { throw error; });
	};

	return (
		<>
			<Container className="d-flex flex-column h-50">
				<h1>Add friend</h1>
				<Form onSubmit={handleAddFriend} className="w-100">
					<Container className="d-flex justify-content-between pl-2">
						<Form.Group className="m-0 w-100">
							<Form.Control className="bg-3 border-0" ref={searchUsernameRef} type="text" placeholder="Username" required />
						</Form.Group>
						<Button type="submit" className="align-items-center justify-content-center">
							<FontAwesomeIcon icon={faUserPlus} />
						</Button>
					</Container>
					<p className="mt-2 pl-4">{inviteAlert}</p>
				</Form>
				<br />
				{invites.length > 0 && (
					<Container className="h-100 py-2 px-0 scroll mb-auto framed-bottom">
						<h1>Invites</h1>
						{invites.map((i) => {
							const { user } = i;
							return (
								<Container key={user} className="d-flex align-items-center justify-content-center">

									<div className="d-flex align-items-center justify-content-between w-100">
										<div className="d-flex justify-content-between align-items-center">
											<div className="ring">
												<Image roundedCircle className="no-tiny" src={getPicture(user)} alt="profile-pic" />
											</div>
											<p className="pl-2">{user}</p>
										</div>
										<div className="d-flex align-items-center">
											<Button className="rounded-circle circle mr-2" variant="success" type="button" onClick={() => handleAcceptRequest(user)}>
												<FontAwesomeIcon icon={faCheck} />
											</Button>
											<Button className="rounded-circle circle" variant="danger" type="button" onClick={() => handleDenyRequest(user)}>
												<FontAwesomeIcon icon={faTrashAlt} />
											</Button>
										</div>
									</div>

								</Container>
							);
						})}
					</Container>
				)}
			</Container>
		</>
	);
}
