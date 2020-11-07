import React, { useState, useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useFriendship } from '../contexts/FriendshipsProvider';

const URL = 'https://send-io.herokuapp.com';

export default function Invites() {
	const { invites, fetchInvites, fetchFriends } = useFriendship();

	console.log('render invites');

	const [inviteAlert, setInviteAlert] = useState();

	const searchUsernameRef = useRef();

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

	const handleDenyRequest = (e) => {
		e.preventDefault();

		const data = {
			friend: e.target.value,
		};

		const options = {
			method: 'POST',
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
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

	const handleAcceptRequest = (e) => {
		e.preventDefault();

		const data = {
			friend: e.target.value,
		};

		const options = {
			method: 'POST',
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
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

	return (
		<>
			<Container className="border">
				<Form onSubmit={handleAddFriend}>
					<h3>Add friend</h3>
					<Form.Group className="d-flex justify-content-center">
						<Form.Control ref={searchUsernameRef} type="text" placeholder="Username" required />
					</Form.Group>
					<p>{inviteAlert}</p>
					<Button type="submit" className="w-100">Add</Button>
				</Form>
				<br />
				{invites.length > 0 && (
					<Container className="border">
						<h3>Invites</h3>
						{invites.map((i) => {
							const { user } = i;
							return (
								<Container key={user} className="d-flex align-items-center justify-content-center">
									<p>{user}</p>
									<Button variant="success" type="button" value={user} onClick={handleAcceptRequest}>Accept</Button>
									<Button variant="danger" type="button" value={user} onClick={handleDenyRequest}>Deny</Button>
								</Container>
							);
						})}
					</Container>
				)}
			</Container>
		</>
	);
}
