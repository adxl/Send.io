import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import io from 'socket.io-client';

const SocketContext = React.createContext();

export function useSocket() {
	return useContext(SocketContext);
}

export function Socketprovider({ id, children }) {
	const [socket, setSocket] = useState();

	useEffect(() => {
		const newSocket = io(
			'http://localhost:4000',
			{
				query: { id },
				reconnection: false,
			},
		);
		setSocket(newSocket);
		return () => newSocket.close();
	}, [id]);

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
