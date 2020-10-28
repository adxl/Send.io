import React, { useRef, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function Login() {
	const [alert, setAlert] = useState();

	const usernameRef = useRef();
	const codeRef = useRef();
	const passwordRef = useRef();

	const handleLogin = (e) => {
		e.preventDefault();

		const data = {
			id: `${usernameRef.current.value}#${codeRef.current.value}`,
			password: passwordRef.current.value,
		};

		console.log(data);

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		};

		fetch('http://localhost:4000/login', options).then((response) => {
			if (response.ok) {
				return response.text();
			}
			setAlert('Wrong username and/or password');
			throw new Error('BAD REQUEST');
		}).then((token) => {
			if (token) {
				console.log(token);
				localStorage.setItem('send-io-usertoken', token);
			}
		}).catch((error) => { console.log(error); });
	};

	return (
		<>
			<Container className="auth-cont d-flex align-items-center justify-content-center ">
				<Form onSubmit={handleLogin}>

					<h3 className="mb-3 text-center">Login</h3>
					<p className="mb-2 mt-2 text-center text-danger">{alert}</p>

					<Form.Group controlId="formBasicEmail" className="d-flex  justify-content-center">
						<Form.Control ref={usernameRef} type="text" placeholder="Username" required />
						<Form.Text className="text-muted h4 ml-2 mr-2">#</Form.Text>
						<Form.Control ref={codeRef} type="text" placeholder="code" required />
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
