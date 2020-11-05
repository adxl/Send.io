import React from 'react';
import { Container } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

const URL = 'https://send-io.herokuapp.com';

export default function Home() {
	return (
		<>
			<Container className="d-flex">
				<Register URL={URL} />
				<Login URL={URL} />
			</Container>
		</>
	);
}
