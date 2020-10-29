import React from 'react';
import { Container } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

export default function Home() {
	return (
		<>
			<Container className="d-flex">
				<Register />
				<Login />
			</Container>
		</>
	);
}
