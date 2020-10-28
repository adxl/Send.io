import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

	return (
		<>
			<h1>Friends</h1>
			{friends.length > 0
				? friends.map((f) => (
					<div key={f.id}>
						<p>
							{f.username}
							<span className="text-muted">#{f.code}</span>
						</p>

					</div>
				))
				: <p>No friends</p>}
		</>
	);
}
