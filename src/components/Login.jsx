import React, { useRef, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function Login({ URL }) {
	const [alert, setAlert] = useState();

	const usernameRef = useRef();
	const passwordRef = useRef();

	const handleLogin = async (e) => {
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

		const response = await fetch(`${URL}/login`, options);
		if (response.ok) {
			const token = await response.text();
			localStorage.setItem('send-io-usertoken', token);
			window.location.reload();
		} else {
			const error = await response.text();
			setAlert(error);
		}
	};

	return (
		<>
			<Container className="d-flex align-items-center justify-content-center ">
				<Form onSubmit={handleLogin}>

					<h1 className="mb-3 text-center">Login</h1>
					<p className="mb-2 mt-2 text-center text-danger">{alert}</p>

					<Form.Group controlId="formBasicEmail" className="d-flex justify-content-center">
						<Form.Control autoComplete="off" className="bg-3 border-0" ref={usernameRef} type="text" placeholder="Username" required />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control className="bg-3 border-0" ref={passwordRef} type="password" placeholder="Password" required />
					</Form.Group>

					<hr />

					<Button type="submit" className="w-100">Login</Button>

				</Form>
			</Container>
		</>
	);
}
