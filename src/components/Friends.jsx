import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';

const URL = 'https://send-io.herokuapp.com';

export default function Friends() {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		fetch(`${URL}/friends`, {
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

		fetch(`${URL}/friends/unfriend`, options)
			.then((response) => response.text())
			.then((message) => {
				window.location.reload();
			})
			.catch((error) => { throw error; });
	};

	return (
		<>
			<Container className="border">
				<h1>Friends</h1>
				<br />
				<Container className="border ">
					{friends.length > 0
						? friends.map((f) => (
							<Container key={f} className="d-flex align-items-center">
								<p>{f}</p>
								<Button variant="danger" type="button" value={f} onClick={handleUnfriend}>Unfriend</Button>
							</Container>
						))
						: <p>No friends</p>}
				</Container>
			</Container>
		</>
	);
}
