import React, { useState, useEffect, useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Invites() {
	const [invites, setInvites] = useState([]);

	const searchUsernameRef = useRef();
	const searchCodeRef = useRef();

	useEffect(() => {
		fetch('http://localhost:4000/invites', {
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setInvites(data);
			})
			.catch((error) => { throw error; });
	}, []);

	const handleAddFriend = (e) => {
		e.preventDefault();

		const data = {
			id: `${searchUsernameRef.current.value}#${searchCodeRef.current.value}`,
		};
		console.log(data);
	};

	const handleDenyRequest = (e) => {
		e.preventDefault();

		const data = {
			friendId: e.target.value,
		};
		alert(data.friendId);
	};

	const handleAcceptRequest = (e) => {
		e.preventDefault();

		const data = {
			friendId: e.target.value,
		};
		alert(data.friendId);
	};

	return (
		<>
			<Container className="border">
				<Form onSubmit={handleAddFriend}>
					<h3>Add friend</h3>
					<Form.Group className="d-flex justify-content-center">
						<Form.Control ref={searchUsernameRef} type="text" placeholder="Username" required />
						<Form.Text className="text-muted h4 ml-2 mr-2">#</Form.Text>
						<Form.Control ref={searchCodeRef} type="text" placeholder="Code" required />
					</Form.Group>
					<Button type="submit" className="w-100">Add</Button>
				</Form>
				<br />
				{invites.length > 0 && (
					<Container className="border">
						<h3>Invites</h3>
						{invites.map((i) => (
							<Container key={i.id} className="d-flex align-items-center justify-content-center">
								<p>
									{i.username}
									<span className="text-muted">#{i.code}</span>
								</p>
								<Button variant="success" type="button" value={i.id} onClick={handleAcceptRequest}>Accept</Button>
								<Button variant="danger" type="button" value={i.id} onClick={handleDenyRequest}>Deny</Button>
							</Container>
						))}
					</Container>
				)}
			</Container>
		</>
	);
}
