import React, { useRef, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const URL = 'https://send-io.herokuapp.com';

export default function Login() {
	const [alert, setAlert] = useState();

	const usernameRef = useRef();
	const codeRef = useRef();
	const passwordRef = useRef();

	const handleLogin = (e) => {
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

		fetch(`${URL}/login`, options).then((response) => {
			if (response.ok) {
				return response.text();
			}
			setAlert('Wrong username and/or password');
			throw new Error('BAD REQUEST');
		}).then((token) => {
			if (token) {
				localStorage.setItem('send-io-usertoken', token);
				window.location.reload();
			}
		}).catch((error) => { console.log(error); });
	};

	return (
		<>
			<Container className="auth-cont d-flex align-items-center justify-content-center">
				<Form onSubmit={handleLogin}>

					<h3 className="mb-3 text-center">Login</h3>
					<p className="mb-2 mt-2 text-center text-danger">{alert}</p>

					<Form.Group controlId="formBasicEmail" className="d-flex justify-content-center">
						<Form.Control ref={usernameRef} type="text" placeholder="Username" required />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control ref={passwordRef} type="password" placeholder="Password" required />
					</Form.Group>

					<Button type="submit" className="w-100">Login</Button>

				</Form>
			</Container>
		</>
	);
}
