import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
import Register from './Register';

const URL = 'https://send-io.herokuapp.com';

export default function Home() {
	return (
		<>
			<Container className="d-flex flex-column justify-content-center align-items-center h-100 bg-2">
				<h1 className="mb-5">Welcome to Send.io
					<span className="pl-2">
						<FontAwesomeIcon icon={faPaperPlane} />
					</span>
				</h1>
				<div className="d-flex w-100">
					<Register URL={URL} />
					<Login URL={URL} />
				</div>
			</Container>
		</>
	);
}
