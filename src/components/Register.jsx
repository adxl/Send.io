import React, { useRef, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function Login({ URL }) {
	const [passwordsMatch, setPasswordsMatch] = useState(true);
	const [alert, setAlert] = useState();

	const usernameRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmationRef = useRef();

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

		fetch(`${URL}/register`, options).then((response) => {
			if (response.ok) {
				return response.text(); // token
			} throw new Error('An error occured');
		}).then((token) => {
			if (token) {
				localStorage.setItem('send-io-usertoken', token);
				window.location.reload();
			}
		}).catch((error) => { throw error; });
	};

	const checkPasswords = (e) => {
		const password = passwordRef.current.value;
		const passwordConfirmation = passwordConfirmationRef.current.value;
		if (password !== passwordConfirmation) {
			setAlert("Passwords don't match");
			setPasswordsMatch(false);
		} else {
			setAlert('');
			setPasswordsMatch(true);
		}
	};

	return (
		<>
			<Container className="d-flex align-items-center justify-content-center ">
				<Form onSubmit={handleRegister}>

					<h1 className="mb-3 text-center">Register</h1>
					<p className="mb-2 mt-2 text-center text-danger">{alert}</p>

					<Form.Group controlId="formBasicEmail" className="d-flex  justify-content-center">
						<Form.Control autoComplete="off" className="bg-3 border-0 mb-3" ref={usernameRef} type="text" placeholder="Username" required />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control className="bg-3 border-0" ref={passwordRef} type="password" placeholder="Password" required />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control className="bg-3 border-0" onChange={checkPasswords} ref={passwordConfirmationRef} type="password" placeholder="Password confirmation" required />
					</Form.Group>

					<hr />
					{ passwordsMatch && <Button type="submit" variant="success" className="w-100">Register</Button>}
				</Form>
			</Container>
		</>
	);
}
