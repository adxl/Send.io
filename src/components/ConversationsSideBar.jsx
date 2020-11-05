import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const URL = 'https://send-io.herokuapp.com';

export default function ConversationsSideBar() {
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
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
	}, []);

	return (
		<>
			<Container className="border">
				<h2>Conversations</h2>
				<div className="border ">
					{conversations.length > 0
						? conversations.map((c) => {
							const { friend } = c;
							return ((
								<div key={friend}>
									<p>
										{friend}
									</p>

								</div>
							));
						})
						: <p>No conversations</p>}
				</div>

			</Container>
		</>
	);
}
