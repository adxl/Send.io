import React from 'react';
import PropTypes from 'prop-types';
import Conversation from './components/Conversation';
import { Socketprovider } from './contexts/SocketProvider';

export default function Dashboard({ id }) {
	return (
		<>
			<Socketprovider id={id}>
				<Conversation id={id} />
			</Socketprovider>
		</>
	);
}

Dashboard.propTypes = {
	id: PropTypes.string.isRequired,
};
