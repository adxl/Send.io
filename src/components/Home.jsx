import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
import Register from './Register';

const URL = 'https://send-io.herokuapp.com';

export default function Home() {
	return (
		<>
			<Container fluid className="d-flex flex-column justify-content-center align-items-center m-0 h-100 bg-4 p-0">
				<Container fluid className="d-flex flex-column justify-content-center align-items-center m-0 h-100 p-15">
					<div className="d-flex justify-content-between align-items-center mt-3 w-100 px-5">
						<h1 className="m-0">
							<a href="https://github.com/adxl" className="wt">
								<span className="pr-3">
									<FontAwesomeIcon icon={faPaperPlane} />
								</span>
								Send.io
							</a>
						</h1>
						<div>
							<Nav className="align-items-center">
								<Nav.Link className="wt">Home</Nav.Link>
								<Nav.Link target="_blank" href="https://github.com/adxl/Send.io" className="wt">Features</Nav.Link>
								<Nav.Link target="_blank" href="https://github.com/adxl/Send.io" className="wt">Source</Nav.Link>
								<Nav.Item className="wt">|</Nav.Item>
								<Nav.Link target="_blank" href="https://github.com/adxl" className="wt">About</Nav.Link>
							</Nav>
						</div>
					</div>
					<div className="mt-auto mb-5 text-center px-5">
						<h1 className="mb-1">Welcome to Send.io</h1>
						<p className="">Sign in or create an account and start chatting with your friends</p>
					</div>
					<div className="d-flex w-100 align-items-center mb-auto px-5">
						<Register URL={URL} />
						<h1><u>OR</u></h1>
						<Login URL={URL} />
					</div>
				</Container>
				<small className="w-100 py-2 bg-3 text-center">&copy; <a className="wt" href="https://github.com/adxl">Adel Senhadji</a> - 2020 </small>
			</Container>
		</>
	);
}
