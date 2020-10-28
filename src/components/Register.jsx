import React, { useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function Login() {
	const usernameRef = useRef();
	const passwordRef = useRef();

	const handleRegister = (e) => {
		e.preventDefault();

		const data = {
			username: usernameRef.current.value,
			password: passwordRef.current.value,
		};

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		};

		fetch('http://localhost:4000/register', options).then((response) => {
			if (response.ok) {
				return 'signed';
			} throw new Error('An error occured');
		}).catch((error) => { throw error; });
	};

	return (
		<>
			<Container className="auth-cont d-flex align-items-center justify-content-center ">
				<Form onSubmit={handleRegister}>

					<h3 className="mb-3 text-center">Register</h3>

					<Form.Group controlId="formBasicEmail" className="d-flex  justify-content-center">
						<Form.Control ref={usernameRef} type="text" placeholder="Username" required />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control ref={passwordRef} type="password" placeholder="Password" required />
					</Form.Group>

					<Button type="submit" variant="success" className="w-100">Register</Button>

				</Form>
			</Container>
		</>
	);
}
