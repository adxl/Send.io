import React from 'react';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import Register from './components/Register';

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
