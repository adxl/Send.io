import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
import Invites from './Invites';

export default function Friends() {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/friends', {
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setFriends(data);
			})
			.catch((error) => { throw error; });
	}, []);

	const handleUnfriend = (e) => {
		e.preventDefault();

		const data = {
			friendId: e.target.value,
		};
		alert(data.friendId);
	};

	return (
		<>
			<Container className="border">
				<h1>Friends</h1>
				<br />
				<Container className="border ">
					{friends.length > 0
						? friends.map((f) => (
							<Container key={f.id} className="d-flex align-items-center">
								<p>
									{f.username}
									<span className="text-muted">#{f.code}</span>
								</p>
								<Button variant="danger" type="button" value={f.id} onClick={handleUnfriend}>Unfriend</Button>
							</Container>
						))
						: <p>No friends</p>}
				</Container>
			</Container>
		</>
	);
}
