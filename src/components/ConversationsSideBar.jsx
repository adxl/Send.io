import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function ConversationsSideBar() {
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/conversations', {
			headers: {
				Authorization: localStorage.getItem('send-io-usertoken'),
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setConversations(data);
			})
			.catch((error) => { throw error; });
	}, []);

	return (
		<>
			<Container className="border">
				<h2>Conversations</h2>
				<div className="border ">
					{conversations.length > 0
						? conversations.map((c) => (
							<div key={c.id}>
								<p>
									{c.friend}
								</p>

							</div>
						))
						: <p>No friends</p>}
				</div>

			</Container>
		</>
	);
}
