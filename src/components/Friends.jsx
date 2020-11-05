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
		alert(data.friend);
	};

	return (
		<>
			<Container className="border">
				<h1>Friends</h1>
				<br />
				<Container className="border ">
					{friends.length > 0
						? friends.map((f) => {
							const { user } = f;
							return (
								<Container key={user} className="d-flex align-items-center">
									<p>{user}</p>
									<Button variant="danger" type="button" value={user} onClick={handleUnfriend}>Unfriend</Button>
								</Container>
							);
						})
						: <p>No friends</p>}
				</Container>
			</Container>
		</>
	);
}
