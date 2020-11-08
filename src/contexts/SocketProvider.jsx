import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import io from 'socket.io-client';

const SocketContext = React.createContext();

const URL = 'https://send-io.herokuapp.com';
// const URL = 'http://localhost:4000';

export function useSocket() {
	return useContext(SocketContext);
}

export function Socketprovider({ username, children }) {
	const [socket, setSocket] = useState();

	// useEffect(() => {
	// 	setId(localStorage.getItem('send-io-usertoken'));
	// }, []);

	useEffect(() => {
		if (username) {
			console.log(`Socket?${username}`);
			const newSocket = io(
				URL,
				{
					query: { username },
					reconnection: false,
				},
			);
			setSocket(newSocket);
			return () => newSocket.close();
		} return 0;
	}, [username]);

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
