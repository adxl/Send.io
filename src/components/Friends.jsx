import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useFriendship } from './FriendshipsProvider';

const URL = 'https://send-io.herokuapp.com';

export default function Friends() {
	const { friends, fetchFriends } = useFriendship();

	console.log('render friends');

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
			.then((response) => {
				if (response.ok) {
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
				<h3>Friends</h3>
				<br />
				<Container className="border ">
					{friends.length > 0
						? friends.map((f) => (
							<Container key={f} className="d-flex align-items-center justify-content-between border">
								<p className="">{f}</p>
								<Button className="border" variant="danger" type="button" value={f} onClick={handleUnfriend}>Unfriend</Button>
							</Container>
						))
						: <p>No friends</p>}
				</Container>
			</Container>
		</>
	);
}
