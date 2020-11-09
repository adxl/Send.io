import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import io from 'socket.io-client';
import { useConversation } from './ConversationProvider';

const SocketContext = React.createContext();

const URL = 'https://send-io.herokuapp.com';
// const URL = 'http://localhost:4000';

export function useSocket() {
	return useContext(SocketContext);
}

export function Socketprovider({ username, children }) {
	const [socket, setSocket] = useState();

	const { conversation } = useConversation();

	// useEffect(() => {
	// 	setId(localStorage.getItem('send-io-usertoken'));
	// }, []);

	useEffect(() => {
		if (conversation) {
			// console.log(`Socket?${conversation.id}`);
			const newSocket = io(
				URL,
				{
					query: {
						id: conversation.id,
						username },
					// reconnection: false,
				},
			);
			setSocket(newSocket);
			return () => newSocket.close();
		} return 0;
	}, [conversation]);

	return (
		<SocketContext.Provider value={socket}>
			{children}
		</SocketContext.Provider>
	);
}

// Socketprovider.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	children: PropTypes.element.isRequired,
// };
